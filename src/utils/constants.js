const API_KEY = "AIzaSyCM-BtqrjbmqNMA8Jkepaj2L9Ybg8eBuYc"

export const POPULAR_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY}`;

// export const META_DATA_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=s2skans2dP4&key=${API_KEY}`;

// export const META_DATA_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="