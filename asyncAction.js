const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const axios = require('axios')
const applyMiddlware = redux.applyMiddleware
const createStore = redux.createStore

const initailState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = ()=> {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initailState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_USERS_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return {
            loading: false,
            users: [],
            error: action.error
        }
    }
}

const fetchUsers = ()=> {
    return dispatch => {
        dispatch(fetchUsersRequest())
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(res => {
            const usersId = res.data.map(user => user.id)
            dispatch(fetchUsersSuccess(usersId))
        })
        .catch(err => {
            dispatch(fetchUsersFailure(err))
        })
    }
}

const store = createStore(reducer, applyMiddlware(thunkMiddleware))
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchUsers())
