import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './reducers/signInReducer';
import setThemeReducer from './reducers/setThemeReducer';
import addUserReducer from './reducers/addAUserReducer';
import checkSignInReducer from './reducers/checkSignInReducer';
import uploadFileReducer from './reducers/uploadFileReducer';

const rootReducer = combineReducers({
    setThemeReducer,
    addUserReducer,
    signInReducer,
    checkSignInReducer,
    uploadFileReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
