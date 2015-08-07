import dispatcher from '../dispatchers/dispatcher.js';
import constants from '../constants/constants.js';

var userLocation = {
    selectLocation: function( location_index ){
        dispatcher.handleAction({
            type: constants.SELECT_LOCATION,
            location_index: location_index
        });
    },
    reset: function(){
        dispatcher.handleAction({
            type: constants.GAME_RESET
        });
    }
};

export default userLocation;