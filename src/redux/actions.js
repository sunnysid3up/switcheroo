import {
  FETCH_IMAGES_CALLED,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE
} from "./constants";

export const fetchImages = () => {
  return {
    type: FETCH_IMAGES_CALLED
  };
};

export const fetchImagesSuccess = image => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    image
  };
};

export const fetchImagesFailure = error => {
  return {
    type: FETCH_IMAGES_FAILURE,
    error
  };
};
