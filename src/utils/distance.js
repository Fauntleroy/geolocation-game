// Adapted from http://www.movable-type.co.uk/scripts/latlong.html
// Calculate the distance between two points using the "Haversine" formula

const EARTH_RADIUS = 3959; // average radius of Earth (miles)

var toRadians = function( degrees ) {
    return degrees * Math.PI / 180;
};

var distance = function( lat1, lon1, lat2, lon2 ){
    var φ1 = toRadians( lat1 );
    var φ2 = toRadians( lat2 );
    var Δφ = toRadians( lat2 - lat1 );
    var Δλ = toRadians( lon2 - lon1 )

    var a = Math.sin( Δφ / 2 ) * Math.sin( Δφ / 2 ) +
        Math.cos( φ1 ) * Math.cos( φ2 ) *
        Math.sin( Δλ / 2 ) * Math.sin( Δλ / 2 );
    var c = 2 * Math.atan2( Math.sqrt( a ), Math.sqrt( 1 - a ) );

    return EARTH_RADIUS * c;
};

export default distance;