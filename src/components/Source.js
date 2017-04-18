import React, {PropTypes} from 'react';
import * as types from '../constants/portfolioTypes';

const Source = ({type, id}) => {
  let source;
  let icon;
  switch (type) {
    case types.CODEPEN:
      source = `http://codepen.io/HunorMarton/pen/${id}/`;
      icon = require('../img/Codepen.png');
      break;
    case types.GITHUB:
      source = `https://github.com/HunorMarton/${id}/`;
      icon = require('../img/Github.png');
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
