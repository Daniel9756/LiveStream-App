import { combineReducers } from 'redux';
import auth from './auth/reducers';
import user from './user/reducers'
import event from './event/reducer'
console.log(event)
const rootReducer = combineReducers({
    auth,
    user,
    event,
    
});

export default rootReducer;