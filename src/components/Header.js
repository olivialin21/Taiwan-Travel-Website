import NavItem from "./NavItem"
import Search from "../components/Search"
import { ReactComponent as Logo } from "../img/icon_logo.svg"
import { ReactComponent as IconLike } from "../img/icon_like.svg"
import { ReactComponent as IconAttraction } from "../img/icon_attractions.svg"
import { ReactComponent as IconRestaurant } from "../img/icon_restaurant.svg"
import { ReactComponent as IconHotel } from "../img/icon_hotel.svg"
import { ReactComponent as IconActivity } from "../img/icon_activity.svg"

export default function Header( {title, bannerImg} ) {
  return(
    <div className="header">
      { bannerImg == "/attraction" ?
        <img className="header-bg" src={require('../img/banner_attraction.png').default} alt="bannerImg"/> :
        bannerImg == "/restaurant" ?
        <img className="header-bg" src={require('../img/banner_restaurant.png').default} alt="bannerImg"/> :
        bannerImg == "/hotel" ?
        <img className="header-bg" src={require('../img/banner_hotel.png').default} alt="bannerImg"/> :
        bannerImg == "/activity" ?
        <img className="header-bg" src={require('../img/banner_activity.png').default} alt="bannerImg"/> :
        <img className="header-bg" src={require('../img/banner_attraction.png').default} alt="bannerImg"/>
      }
      <div className="container">
        <div className="header-content">
          <div className="d-flex justify-content-between">
            <Logo className="header-logo"/>
            <div className="d-flex align-items-center header-like">
              <IconLike />
              <span>我的最愛</span>
            </div>
          </div>
          <div className="header-search">
            <h1>{title}</h1>
            <div className="d-flex">
              <NavItem to="/attraction">
                <span>景點</span>
                <IconAttraction className="header-search-icon"/>
              </NavItem>
              <NavItem to="/restaurant">
                <span>餐飲</span>
                <IconRestaurant className="header-search-icon"/>
              </NavItem>
              <NavItem to="/hotel">
                <span>旅宿</span>
                <IconHotel className="header-search-icon"/>
              </NavItem>
              <NavItem to="/activity">
                <span>活動</span>
                <IconActivity className="header-search-icon"/>
              </NavItem>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}