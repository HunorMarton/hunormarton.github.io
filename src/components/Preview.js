import React from 'react';
import PropTypes from 'prop-types';
import './Preview.scss';

export default function Preview({ link, data }) {
  return (
    <div className="preview">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <picture>
          <source srcSet={`${data['img@1x']} 1x, ${data['img@2x']} 2x`} />
          <img src={data['img@1x']} alt="Portfolio item preview" />
        </picture>
        <div className="run">►</div>
      </a>
    </div>
  );
}

Preview.propTypes = {
  link: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};
