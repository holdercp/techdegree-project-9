import React from 'react';
import GalleryItem from './GalleryItem';
import Loader from './Loader';

const Gallery = ({ imgs, heading, isLoading }) => {
  let content;
  let galleryListItems;
  let headingContent = heading;
  const empty = imgs.length === 0;

  if (empty) {
    headingContent = `No results for ${heading} :(`;
    content = <h4>Try a new search or click one of the topics above.</h4>;
  } else {
    galleryListItems = imgs.map(img => <GalleryItem img={img} key={img.id} />);
    content = <ul>{galleryListItems}</ul>;
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <section>
      <h2>{headingContent}</h2>
      <div className="photo-container">{content}</div>
    </section>
  );
};

export default Gallery;
