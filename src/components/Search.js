import { ReactComponent as IconLocation } from "../img/icon_location.svg"
import { ReactComponent as IconSearch } from "../img/icon_search.svg";
import cityList from "../json/cityList.json"

export default function Search() {
  return(
    <div className="search">
      <IconLocation />
      <select>
        {cityList.map(city =>
          <option value={city.name} key={city.name}>{city.name}</option>
        )}
      </select>
      <input type="Keyword" placeholder="輸入景點名稱" />
      <button className="d-flex align-items-center">
        <IconSearch />
        <span>搜尋</span>
      </button>
    </div>
  );
}