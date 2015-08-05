var vinyl_source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var gulp = require('gulp');
var gulp_util = require('gulp-util');
var assign = require('lodash/object/assign');

var generateBrowserifyBundler = function(){
    var browserify_config = assign( {}, watchify.args, {
        debug: true
    });
    var bundler = browserify( './src/index.jsx', browserify_config );
    bundler.transform('babelify');
    bundler.transform('lessify');
    return bundler;
};

gulp.task( 'compile javascript', function(){
    var bundler = generateBrowserifyBundler();
    return bundler.bundle()
        .pipe( vinyl_source('index.js') )
        .pipe( gulp.dest('./dist') );
});

gulp.task( 'compile and watch javascript', function(){
    var bundler = watchify( generateBrowserifyBundler() );
    var bundle = function(){
        return bundler.bundle()
            .on( 'error', function( error ){
                gulp_util.log( '[watchify]', error.toString() );
                gulp_util.beep();
                this.emit('end');
            })
            .pipe( vinyl_source('index.js') )
            .pipe( gulp.dest('./dist') );
    };
    bundler.on( 'update', function(){
        gulp_util.log( '[watchify]', 'Bundling javascript...');
        bundle();
    });
    bundler.on( 'time', function( time ){
        gulp_util.log( '[watchify]', 'Bundled javascript in '+ time +'ms');
    });
    return bundle();
});

gulp.task( 'copy static files', function(){
    gulp.src([
        './src/index.html'
    ], { base: './src' })
        .pipe( gulp.dest('dist') );
});

gulp.task( 'watch static files', function(){
    gulp.watch([
        './src/index.html'
    ], ['copy static files']);
});

gulp.task( 'build', [
    'compile javascript',
    'copy static files'
]);

gulp.task( 'dev', [
    'compile and watch javascript',
    'copy static files',
    'watch static files'
]);

gulp.task( 'default', ['dev'] );