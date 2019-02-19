import {
  FETCH_IMAGES_CALLED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from "./constants";

const initialState = {
  fetching: false,
  img: null,
  error: null
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_CALLED:
      return { ...state, fetching: true, error: null };
    case FETCH_IMAGES_SUCCESS:
      return { ...state, fetching: false, img: action.image };
    case FETCH_IMAGES_FAILURE:
      return { ...state, fetching: false, error: action.error };
    default:
      return state;
  }
};
