// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import {drawGallery} from './js/render-functions';
import { getPhotos } from './js/pixabay-api';

let form = document.querySelector(".form");
let input = document.querySelector('[name="search-text"]');
let loader = document.querySelector(".loader");
let gallery = document.querySelector(".gallery");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if(input.value.trim() === ""){
        // console.log("Заповніть поле пошуку");
        gallery.innerHTML = "";
        return;
    }

    gallery.innerHTML = "";
    loader.style.display = "block";

    getPhotos(input.value).then(response=> {
        let images = response.data.hits;
        if(images.length > 0){
        // console.log(response.data)
        drawGallery(response.data.hits);
        } else {
            gallery.innerHTML = "";
            iziToast.show({
                message: `Sorry, there are no images matching your ${input.value}. Please try again!`,   
                backgroundColor:'#EF4040',
                messageColor: '#FFBEBE',
                position: 'topRight',
                icon: 'fa-solid fa-ban',  
            });
        }
    })
    .catch(error => {
            // console.error(error);
    })
    .finally(()=>{
        loader.style.display = "none";
    })
});