import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl);

const renderGallery = (pictures) => {
    const result =  pictures
        .map((picture) => `<div class="gallery__item">
  <a class="gallery__link" href="${picture.original}">
    <img
      class="gallery__image"
      src="${picture.preview}"
      data-source="${picture.original}"
      alt="${picture.description}"
    />
  </a>
</div>`)
        .join("");
    
    return result;
}
// console.log(renderGallery(galleryItems));

galleryEl.innerHTML = renderGallery(galleryItems);

const onPictureClick = (e) => {
    
    if (!e.target.dataset.source) {
        return;
    }
    e.preventDefault();
    console.log('onPictureClick');

    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

    instance.show();

    // document.addEventListener("keydown", (e) => {
    //     if (e.key === "Escape") {
    //         console.log('Close modal')

    //     }
    // })
};

galleryEl.addEventListener("click", onPictureClick);


