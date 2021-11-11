import { useContext, useEffect } from "react";
import { StoreContext } from "../store"

export default function Datas() {
  const { state: { page: { datas }} } = useContext(StoreContext);
  return(
    <div className="datas">
      {datas.map(data=>{
        <p>{data}</p>
      })}
    </div>
  );
}