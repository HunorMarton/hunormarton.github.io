import React, {PropTypes} from 'react';

const Preview = ({img, link}) => (
  <div className="preview">
    <a href={link} target="_blank">
      <img src={require(`../data/img/${img}.png`)} alt="Portfolio item preview" />
      <div className="run">►</div>
    </a>
  </div>
);

Preview.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Preview;
