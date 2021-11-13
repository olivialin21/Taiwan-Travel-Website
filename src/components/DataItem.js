import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getClass } from "../actions"

export default function DataItem({data}) {
  const { dispatch } = useContext(StoreContext);
  const city = data.Address.slice(0,3);
  let classes = [];

  useEffect(() => {
    classes = getClass (dispatch, city, data.ID)
  }, [])

  
  return(
    <div className="col-3">
      <div className="dataItem">
        <div className="dataItem-img">
          <img src={data.Picture.PictureUrl1} alt="sitePicture"/>
        </div>
        <div className="dataItem-intro">
          <h5>{data.Name}</h5>
          <p>{city}</p>
          <div className="row">
            <div>{classes.Class1}</div>
            <div>{classes.Class2}</div>
            <div>{classes.Class3}</div>
          </div>
        </div>
      </div>
    </div>
  );
}