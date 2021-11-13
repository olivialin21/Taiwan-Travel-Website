import axios from "axios"
import jsSHA from "jssha"

function getAuthorizationHeader() {
   //  填入自己 ID、KEY 開始
      let AppID = '1df2110c12ab4cd68d3cf8de5398a44e';
      let AppKey = 'QqVw0g74_brVr1wAJtCJt4yp16w';
   //  填入自己 ID、KEY 結束
      let GMTString = new Date().toGMTString();
      let ShaObj = new jsSHA('SHA-1', 'TEXT', {
         hmacKey: { value: AppKey, format: "TEXT" },
     });
     ShaObj.update('x-date: ' + GMTString);
     let HMAC = ShaObj.getHMAC('B64');
     let Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
     return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}

export const getAllAttractions = () => {
   return axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=10&$format=JSON',
   {
      headers: getAuthorizationHeader()
   }
   )
}

export const getClasses = (city, id) => {
   const eq = " eq ";
   return axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${city}?$filter=ID${eq}'${id}'&$format=JSON`,
   {
      headers: getAuthorizationHeader()
   }
   )
}