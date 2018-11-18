import React from 'react';

const GalleryItem = ({ img }) => {
  const { url, title, description } = img;
  return (
    <li>
      <img src={url} alt={description} title={title} />
    </li>
  );
};

export default GalleryItem;
