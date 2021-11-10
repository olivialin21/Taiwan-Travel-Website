import imgBanner from "../img/banner_L.png"

export default function Header() {
  return(
    <div className="header">
      <img src={imgBanner} alt="imgBanner"/>
    </div>
  );
}