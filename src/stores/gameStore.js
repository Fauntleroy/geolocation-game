import { EventEmitter } from 'events';

import { assign, sample } from 'lodash';

import distance from '../utils/distance.js';
import locations from '../locations.js';

var data = {
    locations: [],
    user_location: null,
    answered: false
};

var gameStore = assign( {}, EventEmitter.prototype, {
    get: function( key ){
        return data[key];
    },
    getAll: function(){
        return data;
    },
    set: function( key, value ){
        data[key] = value;
        gameStore.emit('change');
    },
    setLocations: function(){
        gameStore.set( 'locations', sample( locations, 5 ) );
        gameStore.emit('change');
    },
    setDistances: function(){
        var locations_with_distances = data.locations.map( location => {
            location.distance = distance( data.user_location.lat, data.user_location.lon, location.coords.lat, location.coords.lon );
            return location;
        });
        gameStore.set( 'locations', locations_with_distances );
        gameStore.emit('change');
    }
});

gameStore.setLocations();

export default gameStore;