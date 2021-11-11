import pageInfo from "../json/pageInfo.json";

export const getTitle = url => {
   const json = pageInfo.find(
     x => x.url === url
   );
   return json.title;
 }
