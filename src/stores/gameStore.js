import { EventEmitter } from 'events';

import { assign, sample } from 'lodash';

import constants from '../constants/constants.js';
import dispatcher from '../dispatchers/dispatcher.js';
import distance from '../utils/distance.js';
import locations from '../locations.js';

var _locations = [];
var _user_location;
var _selected_location_index;

var gameStore = assign( {}, EventEmitter.prototype, {
    getLocations: function(){
        return _locations;
    },
    getUserLocation: function(){
        return _user_location;
    },
    getSelectedLocationIndex: function(){
        return _selected_location_index;
    },
    _setLocations: function(){
        _locations = sample( locations, 5 );
    },
    _setDistances: function(){
        _locations = _locations.map( location => {
            location.distance = distance( _user_location.lat, _user_location.lon,
                location.coords.lat, location.coords.lon );
            return location;
        });
    }
});

gameStore.dispatchToken = dispatcher.register( function( action ){
    switch( action.type ){
        case constants.USER_LOCATION_RESPONSE:
            gameStore._setLocations();
            _user_location = action.location;
        break;
        case constants.SELECT_LOCATION:
            gameStore._setDistances();
            _selected_location_index = action.location_index;
        break;
    }
    gameStore.emit('change');
});

export default gameStore;