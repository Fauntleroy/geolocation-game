import { Dispatcher } from 'flux';
import { assign } from 'lodash';

var dispatcher = assign( new Dispatcher(), {
    handleAction: function( action ){
        this.dispatch( action );
    }
});

export default dispatcher;