import axios from "axios";

export function getPhotos(word){
    return axios.get("https://pixabay.com/api/",{
        params:{
            key: "49450031-b4478c296ebc20935df165a9a",
            q: word,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    });
}