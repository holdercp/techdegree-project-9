import React from 'react';
import PropTypes from 'prop-types';

const GalleryItem = ({ img }) => {
  const { url, title, description } = img;
  return (
    <li>
      <img src={url} alt={description} title={title} />
    </li>
  );
};

GalleryItem.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default GalleryItem;
