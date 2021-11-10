import { Link } from "react-router-dom"
import Search from "../components/Search"
import { ReactComponent as Logo } from "../img/icon_logo.svg"
import { ReactComponent as IconLike } from "../img/icon_like.svg"
import { ReactComponent as IconAttraction } from "../img/icon_attractions.svg"
import { ReactComponent as IconRestaurant } from "../img/icon_restaurant.svg"
import { ReactComponent as IconHotel } from "../img/icon_hotel.svg"
import { ReactComponent as IconActivity } from "../img/icon_activity.svg"

export default function Header({title, bannerImg}) {
  return(
    <div className="header">
      <img className="header-bg" src={bannerImg} alt="bannerImg"/>
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
              <Link to="/attraction">
                <div className="d-flex align-items-center header-search-item">
                  <span>景點</span>
                  <IconAttraction className="header-search-icon"/>
                </div>
              </Link>
              <Link to="/restaurant">
                <div className="d-flex align-items-center header-search-item">
                  <span>餐飲</span>
                  <IconRestaurant className="header-search-icon"/>
                </div>
              </Link>
              <Link to="/hotel">
                <div className="d-flex align-items-center header-search-item">
                  <span>旅宿</span>
                  <IconHotel className="header-search-icon"/>
                </div>
              </Link>
              <Link to="/activity">
                <div className="d-flex align-items-center header-search-item">
                  <span>活動</span>
                  <IconActivity className="header-search-icon"/>
                </div>
              </Link>
            </div>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}