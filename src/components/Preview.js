import React, {PropTypes} from 'react';

const Preview = ({img, link}) => (
  <div className="preview">
    <a href={link} target="_blank">
      <picture>
        <source srcSet={`${require(`../data/img/${img}@0.5x-min.png`)} 1x, ${require(`../data/img/${img}-min.png`)} 2x`} media="(max-width: 768px)" />
        <source srcSet={`${require(`../data/img/${img}-min.png`)} 1x, ${require(`../data/img/${img}@2x-min.png`)} 2x`} />
        <img src={require(`../data/img/${img}-min.png`)} alt="Portfolio item preview" />
      </picture>
      <div className="run">►</div>
    </a>
  </div>
);

Preview.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Preview;
