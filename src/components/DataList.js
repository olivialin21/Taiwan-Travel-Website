import { useContext, useEffect } from "react";
import { StoreContext } from "../store"
import DataItem from "../components/DataItem"

export default function DataList() {
  const { state: { page: { datas }} } = useContext(StoreContext);
  return(
    <div className="container">
      <div>搜尋結果</div>
      <div className="dataList row">
        {datas.map(data=>(
          <DataItem data={data} />
        ))}
      </div>
    </div>
  );
}