import {
  SET_PAGE_TITLE,
  SET_PAGE_CONTENT
} from "../utils/constants"

import {
  getAllAttractions
} from "../api"

export const setPage = async (dispatch, url, title) => {
  let datas = [];
  // dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  dispatch({
    type: SET_PAGE_TITLE,
    payload: title,
  });
  try {
    let res = await getAllAttractions();
    let datas = res.data
    console.log();
    dispatch({
      type: SET_PAGE_CONTENT,
      payload: { title, datas },
    });
    // dispatch({
    //   type: SET_NAVBAR_ACTIVEITEM,
    //   payload: url,
    // });
    // dispatch({ type: SUCCESS_PRODUCTS_REQUEST });
  } catch (error) {
    console.log(error);
    // dispatch({ type: FAIL_PRODUCTS_REQUEST, payload: error });
  }
}