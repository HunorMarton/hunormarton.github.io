import React, {PropTypes} from 'react';
import * as types from '../constants/portfolioTypes';

const Source = ({type, id}) => {
  let source;
  let icon;
  switch (type) {
    case types.CODEPEN:
      source = `http://codepen.io/HunorMarton/pen/${id}/`;
      icon = "CodePen";
      break;
    case types.GITHUB:
      source = `https://github.com/HunorMarton/${id}/`;
      icon = "GitHub";
      break;
  }

  return (
    <div className="source">
      <a href={source} target="_blank">
        <i className={`sprite sprite-${icon}`}/>
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
