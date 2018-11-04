import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({ imgs }) => {
  const galleryItems = imgs.map(img => <GalleryItem img={img} key={img.id} />);
  return (
    <section className="photo-container">
      <ul>{galleryItems}</ul>
    </section>
  );
};

export default Gallery;
