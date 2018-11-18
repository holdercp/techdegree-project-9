import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import Loader from './Loader';

const Gallery = ({ imgs, heading, isLoading }) => {
  const empty = imgs.length === 0;

  // Show a loading indicator if the data is currently being fetched
  if (isLoading) {
    return <Loader />;
  }

  // Generate a list of gallery items if there imgs
  if (!empty) {
    const galleryListItems = imgs.map(img => <GalleryItem img={img} key={img.id} />);
    const galleryList = <ul>{galleryListItems}</ul>;

    return (
      <section>
        <h2>{heading}</h2>
        <div className="photo-container">{galleryList}</div>
      </section>
    );
  }

  // By default, render the "empty" state
  return (
    <section>
      <h2>{`No results for ${heading} :(`}</h2>
      <p>Try a new search or click one of the topics above.</p>
    </section>
  );
};

Gallery.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.object).isRequired,
  heading: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Gallery;
