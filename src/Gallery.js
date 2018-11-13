import React from 'react';
import GalleryItem from './GalleryItem';

const Gallery = ({ imgs, tag }) => {
  let content;
  let galleryListItems;
  let heading = tag;
  const empty = imgs.length === 0;

  if (empty) {
    heading = `No results for ${tag} :(`;
    content = <h4>Try a new search or click one of the topics above.</h4>;
  } else {
    galleryListItems = imgs.map(img => <GalleryItem img={img} key={img.id} />);
    content = <ul>{galleryListItems}</ul>;
  }

  return (
    <section>
      <h2>{heading}</h2>
      <div className="photo-container">{content}</div>
    </section>
  );
};

export default Gallery;
