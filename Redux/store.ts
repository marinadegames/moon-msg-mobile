import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {profileReducer} from "./profileReducer";
import {meProfileReducer} from "./meProfileReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    meProfilePage: meProfileReducer,
    allUsers: usersReducer,
    auth: authReducer,
});

export type rootReducerType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const store = createStore(rootReducer, applyMiddleware(thunk));