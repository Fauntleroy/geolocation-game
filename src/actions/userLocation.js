import dispatcher from '../dispatchers/dispatcher.js';
import constants from '../constants/constants.js';

var userLocation = {
    getLocation: function(){
        dispatcher.handleAction({
            type: constants.USER_LOCATION_REQUEST
        });
        navigator.geolocation.getCurrentPosition(function( position ) {
            var user_location = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            dispatcher.handleAction({
                type: constants.USER_LOCATION_RESPONSE,
                location: user_location
            });
        }, function( error ){
            dispatcher.handleAction({
                type: constants.USER_LOCATION_ERROR,
                error: error
            });
        });
    }
};

export default userLocation;