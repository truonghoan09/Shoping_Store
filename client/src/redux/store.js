import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import signInReducer from './reducers/signInReducer';
import setThemeReducer from './reducers/setThemeReducer';
import addUserReducer from './reducers/addAUserReducer';
import checkSignInReducer from './reducers/checkSignInReducer';
import uploadFileReducer from './reducers/uploadFileReducer';
import toggleQuickshopReducer from './reducers/toggleQuickshopReducer';

const rootReducer = combineReducers({
    setThemeReducer,
    addUserReducer,
    signInReducer,
    checkSignInReducer,
    uploadFileReducer,
    toggleQuickshopReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
