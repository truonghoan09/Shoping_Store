import { UPLOAD_FILE_SUCCESS, UPLOAD_FILE_REQUEST, UPLOAD_FILE_FAILURE } from "../type";

const initialState = {
    loading: false,
    error: null,
};
  
const uploadFileReducer = (state = initialState , action: any) => {
    switch (action.type) {
      case UPLOAD_FILE_REQUEST:
        return { ...state, loading: true, error: null };
      case UPLOAD_FILE_SUCCESS:
        return { ...state, loading: false, error: null };
      case UPLOAD_FILE_FAILURE:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

export default uploadFileReducer;