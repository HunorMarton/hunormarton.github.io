import React, {PropTypes} from 'react';
import * as types from '../constants/portfolioTypes';

const Source = ({type, id}) => {
  let source;
  let icon;
  switch (type) {
    case types.CODEPEN:
      icon = '../img/Codepen.png';
      source = `http://codepen.io/HunorMarton/pen/${id}/`;
      break;
    case types.GITHUB:
      icon = '../img/Github.png';
      source = `https://github.com/HunorMarton/${id}/`;
      break;
  }

  return (
    <div className="source">
      <a href={source}>
        <img src={icon} alt="source icon" />
        Source
      </a>
    </div>
  );
};

Source.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default Source;
