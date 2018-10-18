import * as types from 'actions/actionTypes';

export default function authReducer(state = {}, action = null) {
    switch (action.type) {
        case types.GET_USER_ROLES:
            return { ...state };
        case types.USER_ROLES_RECEIVED:
            return { ...state,
                     rights: action.data.rights,
                     groups: action.data.groups,
                     roles: action.data.roles
                   };
        case types.USER_ROLES_REQUEST_FAILED:
            return { ...state, error: action.error };
        default:
            return state;
    }
}
