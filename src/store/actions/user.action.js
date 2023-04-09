import { 
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS, 
  FETCH_USER_REQUEST, 
  UPDATE_USER_FAILURE, 
  UPDATE_USER_REQUEST, 
  UPDATE_USER_SUCCESS 
} from "../reducers/User.reducer"

export const fetchUserRequest = () => {
  return { type: FETCH_USER_REQUEST };
};

export const fetchUserSuccess = (user) => {
  return { type: FETCH_USER_SUCCESS, payload: user };
};

export const fetchUserFailure = (error) => {
  return { type: FETCH_USER_FAILURE, payload: error };
};

export const updateUserRequest = () => {
  return { type: UPDATE_USER_REQUEST };
};

export const updateUserSuccess = (user) => {
  return { type: UPDATE_USER_SUCCESS, payload: user };
};

export const updateUserFailure = (error) => {
  return { type: UPDATE_USER_FAILURE, payload: error };
};