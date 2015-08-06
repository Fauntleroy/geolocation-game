import './index.less';

import React from 'react';
import cx from 'classnames';
import distance from './utils/distance.js';

import gameStore from './stores/gameStore.js';

navigator.geolocation.getCurrentPosition(function( position ) {
    var user_location = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    };
    gameStore.set( 'user_location', user_location );
});

var GameTile = React.createClass({
    render: function(){
        return (
            <li className="tile">
                <img src={this.props.image} onClick={this._onClick} />
                <div className="tile__details">
                    {this.props.name}<br />
                    {this.props.distance}
                </div>
            </li>
        );
    },
    _onClick: function( event ){
        this.props.onClick( event, this.props.coords );
    }
});

var _getGameState = function(){
    return gameStore.getAll();
};

var Game = React.createClass({
    getInitialState: function(){
        return _getGameState();
    },
    componentWillMount: function(){
        gameStore.on( 'change', this._onChange );
    },
    componentWillUnmount: function () {
        gameStore.removeListener( 'change', this._onChange );
    },
    render: function(){
        var locations = this.state.locations;
        var game_classes = cx({
            game: true,
            'game--show-answers': this.state.answered
        });
        var tiles_jsx = locations.map( location => {
            return <GameTile {...location} onClick={this._onTileClick} />;
        });
        return (
            <div className={game_classes}>
                <ul className="tiles">
                    {tiles_jsx}
                </ul>
            </div>
        );
    },
    _onChange: function(){
        this.setState( _getGameState() );
    },
    _onTileClick: function( event, coords ){
        gameStore.set( 'answered', true );
    }
});

document.addEventListener('DOMContentLoaded', function(){
    React.render( <Game />, document.querySelector('#game') );
});