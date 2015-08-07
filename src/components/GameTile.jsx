import React from 'react';
import cx from 'classnames';

var GameTile = React.createClass({
    render: function(){
        var distance = Math.round( this.props.distance ) +' miles away';
        var tile_classes = cx({
            tile: true,
            'tile--closest': this.props.closest,
            'tile--selected': this.props.selected
        });
        return (
            <li className={tile_classes}>
                <img className="tile__image" src={this.props.image} onClick={this._onClick} />
                <div className="tile__details">
                    <h2 className="tile__name">{this.props.name}</h2>
                    <h3 className="tile__distance">{distance}</h3>
                    <button className="tile__play-again" onClick={this._onPlayAgainClick}>Play Again!</button>
                </div>
            </li>
        );
    },
    _onClick: function( event ){
        this.props.onClick( event, this.props.index );
    },
    _onPlayAgainClick: function( event ){
        this.props.onPlayAgainClick( event );
    }
});

export default GameTile;