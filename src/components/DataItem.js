export default function DataItem({data}) {
  return(
    <div className="dataItem">
      <img src={data.Picture.PictureUrl1}/>
      <p>{data.Name}</p>
    </div>
  );
}