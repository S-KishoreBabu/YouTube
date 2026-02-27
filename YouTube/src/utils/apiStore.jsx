const google_API_Key="AIzaSyCz_YBQwlM-W4Iyxr9n9Iedfjjh3o7r4qQ"

const countryCode = ["US", "IN", "GB", "CA", "AU", "DE", "FR", "JP", "CN", "BR"];

let randomNumber = Math.ceil(Math.random()*10)-1;
console.log(countryCode[randomNumber]);
export const Youtube_api='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode='+countryCode[randomNumber]+'&key='+google_API_Key

export const Comments_api = 'https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key='+google_API_Key

export const Youtube_search_api = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";