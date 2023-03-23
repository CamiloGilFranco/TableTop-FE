export const LANGUAGE_SWITCH = 'LANGUAGE_SWITCH';


const initialState = {
  code: 'en',
}
 const languageReducer = (state = initialState, action)=>{
  switch (action.type) {
    case LANGUAGE_SWITCH:
      return action.payload;
    default:
      return state;
  }
 }

export default languageReducer;