import { EventEmitter } from 'events';

import { assign, sample } from 'lodash';

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
    }
});

gameStore.setLocations();

export default gameStore;