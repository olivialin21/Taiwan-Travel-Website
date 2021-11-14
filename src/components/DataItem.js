import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getClass } from "../actions"

export default function DataItem({data}) {
  const { dispatch } = useContext(StoreContext);
  const city = data.City ? data.City : data.Address ? data.Address.slice(0,3) : "未提供地點";
  let cityInfo = [];

  useEffect(() => {
    cityInfo = getClass (dispatch, city, data.ID)
  }, [])

  
  return(
    <div className="col-3">
      <div className="dataItem">
        <div className="dataItem-img">
          {data.Picture.PictureUrl1 ? 
            <img src={data.Picture.PictureUrl1} alt="sitePicture"/>
            :
            <div>
              未提供圖片
            </div>
          }
        </div>
        <div className="dataItem-intro">
          <h5>{data.Name}</h5>
          <p>{city}</p>
          <div className="row">
            <div>{cityInfo.Class1}</div>
            <div>{cityInfo.Class2}</div>
            <div>{cityInfo.Class3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}