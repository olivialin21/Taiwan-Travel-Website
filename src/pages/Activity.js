import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getTitle } from "../utils";
import { setPage } from "../actions";
import Header from "../components/Header"
import imgBanner from "../img/banner_activity.png"

function Activity() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps  

  return (
    <>
    {/* <Navbar /> */}
    <Header title="活動" bannerImg={imgBanner}/>
    {/* <AboutUs />
    <Steps />
    <Footer /> */}
    </>
  );
}

export default Activity;