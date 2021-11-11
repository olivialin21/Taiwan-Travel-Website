import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getTitle } from "../utils";
import { setPage } from "../actions";
import Header from "../components/Header"
import imgBanner from "../img/banner_hotel.png"

function Hotel() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps  

  return (
    <>
    {/* <Navbar /> */}
    <Header title="旅宿" bannerImg={imgBanner}/>
    {/* <AboutUs />
    <Steps />
    <Footer /> */}
    </>
  );
}

export default Hotel;