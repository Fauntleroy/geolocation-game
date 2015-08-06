import './index.less';

import locations from './locations.js';

navigator.geolocation.getCurrentPosition(function( position ) {
    console.log( position );
});