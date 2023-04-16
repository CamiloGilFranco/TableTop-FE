export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';
export const SET_USER = 'SET_USER';

const initialState = {
  user: {},
  loading: false,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return{
        ...state,
        user:action.payload
      };
    case FETCH_USER_REQUEST:
    case UPDATE_USER_REQUEST: 
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case FETCH_USER_FAILURE:
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state
  }
}

export default userReducer;