import './index.less';

import React from 'react';

import Game from './components/Game.jsx';

document.addEventListener('DOMContentLoaded', function(){
    React.render( <Game />, document.querySelector('#game') );
});