import cityList from "../json/cityList.json";

import {
  SET_PAGE_TITLE,
  SET_PAGE_BANNER,
  SET_PAGE_CONTENT,
  GET_CLASS
} from "../utils/constants"

import { 
  getTitle,
  getBanner
} from "../utils";

import {
  getAllAttractions,
  getClasses
} from "../api"

export const setPage = async (dispatch, url) => {
  // dispatch({ type: BEGIN_PRODUCTS_REQUEST });
  let title = getTitle(url);
  let banner = getBanner(url);
  console.log(banner);
  dispatch({
    type: SET_PAGE_TITLE,
    payload: title,
  });
  dispatch({
    type: SET_PAGE_BANNER,
    payload: banner,
  });
  try {
    let res = await getAllAttractions();
    let datas = res.data
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

export const getClass = async (dispatch, city_cn, id) => {
  let city_en = cityENtoCN(city_cn);
  let classes = await getClasses(city_en, id);
  dispatch({
    type: GET_CLASS
  })
  return classes.data
}

export const cityENtoCN = (city_cn) => {
  const city = cityList.find(
    x => x.name === city_cn
  );
  return city.name_en;
}