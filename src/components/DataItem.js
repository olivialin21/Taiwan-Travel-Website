import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import { getClass } from "../actions"

export default function DataItem({data}) {
  const { dispatch } = useContext(StoreContext);
  const city = data.Address.slice(0,3);
  const classes = [];

  useEffect(() => {
    const classes = getClass(dispatch, city, data.ID);
  }, [])

  
  return(
    <div className="dataItem">
      <img src={data.Picture.PictureUrl1} alt="sitePicture"/>
      <p>{data.Name}</p>
      <p>{city}</p>
      {classes.map(Class => (
        <div>{Class}</div>
      ))}
    </div>
  );
}