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
        selected_location_index: gameStore.getSelectedLocationIndex() 
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
        var game_classes = cx({
            game: true,
            'game--show-answers': !!this.state.selected_location_index,
            'game--loading-user-location': !this.state.user_location
        });
        var tiles_jsx = locations.map( ( location, index ) => {
            return <GameTile {...location} onClick={this._onTileClick} index={index} />;
        });
        return (
            <div className={game_classes}>
                <ul className="tiles">
                    {tiles_jsx}
                </ul>
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
    }
});

export default Game;