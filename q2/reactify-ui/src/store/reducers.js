import {
    action_types
} from '../actions/constants';

const defaultState = {
    data: [],
    message: null,
    status: null
}

const initialState = {
    loader: false,
    auth: defaultState,
};

const LayoutReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_types.LOADER: {
            return {
                ...state, loader: action.payload
            }
        }
        case action_types.LOGIN: {
            return {
                ...state, auth: action.payload.data
            }
        }
        case action_types.REGISTER: {
            return {
                ...state, register: action.payload
            }
        }
        case action_types.TWEETS: {
            return {
                ...state, tweets: action.payload.data
            }
        }
        case action_types.PEOPLES: {
            return {
                ...state, peoples: action.payload.data
            }
        }
        case action_types.LOGOUT: {
            return {
                ...state, auth: initialState.auth
            }
        }
        case action_types.CLEAR_DATA: {
            return {
                ...state, ...initialState
            }
        }
        default: {
            return state;
        }
    }
};


export default LayoutReducer;