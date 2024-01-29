import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './images.js';

const galleryRef = document.querySelector('.gallery');

const markupString = images
  .map(
    ({ preview, description, original }) => `
<li class="gallery-item">
<a class="gallery-link" href="${original}">
    <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"
        />
</a>
</li>
`
  )
  .join('');

galleryRef.innerHTML = markupString;

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});