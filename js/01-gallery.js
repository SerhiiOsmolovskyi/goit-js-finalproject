import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>
    `<li class="gallery__item js-item">
        <a class="gallery__link"  href="${original}">
          <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
        </a>
      </li>`
    ).join('');
 }

createMarkup(galleryItems);

// gallery.innerHTML = createMarkup(galleryItems);
gallery.insertAdjacentHTML('afterbegin', createMarkup(galleryItems));
gallery.addEventListener('click', handlerClick);

function handlerClick(event) {
    event.preventDefault();
    if (event.currentTarget === event.target) {
        return;
    }
    const currentImage = event.target.closest('.js-item')
    // console.dir(currentImage);
    if (currentImage) {
        const currentImageSrc = currentImage.querySelector('img').getAttribute('data-source');
        const currentImageAlt = currentImage.querySelector('img').getAttribute('alt');

        const instance = basicLightbox.create(`
      
        <img src="${currentImageSrc}" alt="${currentImageAlt}" width="1280" />
        `);
        instance.show();
    
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                instance.close();
            }
        });
    }
}




