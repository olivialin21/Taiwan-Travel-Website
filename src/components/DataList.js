import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import DataItem from "../components/DataItem"

export default function DataList() {
  const { state: { page: { datas }} } = useContext(StoreContext);
  return(
    <div className="dataList">
      {datas.map(data=>(
        <DataItem data={data} />
      ))}
    </div>
  );
}