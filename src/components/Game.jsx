import React from 'react';
import cx from 'classnames';

import userLocationActions from '../actions/userLocation.js';
import gameActions from '../actions/game.js';
import gameStore from '../stores/gameStore.js';

import GameTile from './GameTile.jsx';

var _getGameState = function(){
    return {
        locations: gameStore.getLocations(),
        user_location: gameStore.getUserLocation(),
        selected_location_index: gameStore.getSelectedLocationIndex(),
        closest_location_index: gameStore.getClosestLocationIndex()
    }
};

var Game = React.createClass({
    getInitialState: function(){
        return _getGameState();
    },
    componentWillMount: function(){
        userLocationActions.getLocation();
        gameStore.on( 'change', this._onChange );
    },
    componentWillUnmount: function () {
        gameStore.removeListener( 'change', this._onChange );
    },
    render: function(){
        var locations = this.state.locations;
        var selected_index = this.state.selected_location_index;
        var closest_index = this.state.closest_location_index;
        var correct = ( selected_index === closest_index ) && typeof selected_index === 'number' && typeof closest_index === 'number';
        var wrong = !( selected_index === closest_index ) && typeof selected_index === 'number' && typeof closest_index === 'number';
        var game_classes = cx({
            game: true,
            'game--show-answers': typeof this.state.selected_location_index === 'number',
            'game--loading-user-location': !this.state.user_location,
            'game--wrong':  wrong,
            'game--correct': correct
        });
        var tiles_jsx = locations.map( ( location, index ) => {
            return <GameTile {...location}
                onClick={this._onTileClick}
                onPlayAgainClick={this._onPlayAgainClick}
                index={index}
                selected={index === selected_index}
                closest={index === closest_index}
                key={location.uuid}
            />;
        });
        return (
            <div className={game_classes}>
                <div className="selector">
                    <p>Choose the picture of the national park that is closest to you</p>
                    <ul className="tiles">
                        {tiles_jsx}
                    </ul>
                </div>
                <div className="loading">
                    Getting your location...
                </div>
            </div>
        );
    },
    _onChange: function(){
        this.setState( _getGameState() );
    },
    _onTileClick: function( event, index ){
        gameActions.selectLocation( index );
    },
    _onPlayAgainClick: function(){
        gameActions.reset();
    }
});

export default Game;