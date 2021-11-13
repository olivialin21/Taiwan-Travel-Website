import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { setPage } from "../actions";
// import Navbar from "../components/Navbar"
import Header from "../components/Header"
import DataList from "../components/DataList"
// import Steps from "../components/Steps"
import Footer from "../components/Footer"

function Attraction() {
  const { state: { page: { title, banner } }, dispatch } = useContext(StoreContext);

  useEffect(() => {
    const url = window.location.pathname;
    setPage(dispatch, url)
  }, [title]);// eslint-disable-line react-hooks/exhaustive-deps  
  
  return (
    <>
    {/* <Navbar /> */}
    <Header title={title} bannerImg={banner}/>
    <DataList />
    {/* <Steps /> */}
    <Footer />
    </>
  );
}

export default Attraction;