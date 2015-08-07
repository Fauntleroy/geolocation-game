import React from 'react';

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
        this.props.onClick( event, this.props.index );
    }
});

export default GameTile;