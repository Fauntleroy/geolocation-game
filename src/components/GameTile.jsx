import React from 'react';
import cx from 'classnames';

var GameTile = React.createClass({
    render: function(){
        var tile_classes = cx({
            tile: true,
            'tile--closest': this.props.closest,
            'tile--selected': this.props.selected
        });
        return (
            <li className={tile_classes}>
                <img src={this.props.image} onClick={this._onClick} />
                <div className="tile__details">
                    {this.props.name}<br />
                    {this.props.distance}
                </div>
            </li>
        );
    },
    _onClick: function( event ){
        this.props.onClick( event, this.props.index );
    }
});

export default GameTile;