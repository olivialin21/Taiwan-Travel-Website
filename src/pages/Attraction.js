import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getTitle } from "../utils";
import { setPage } from "../actions";
// import Navbar from "../components/Navbar"
import Header from "../components/Header"
import DataList from "../components/Datas"
// import Steps from "../components/Steps"
// import Footer from "../components/Footer"
import imgBanner from "../img/banner_attraction.png"

function Attraction() {
  const { state: { page: { title } }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url, getTitle(url))
  }, []);// eslint-disable-line react-hooks/exhaustive-deps  
  
  return (
    <>
    {/* <Navbar /> */}
    <Header title={title} bannerImg={imgBanner}/>
    <DataList />
    {/* <Steps />
    <Footer /> */}
    </>
  );
}

export default Attraction;