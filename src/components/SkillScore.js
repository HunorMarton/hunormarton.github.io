import React, {PropTypes} from 'react';

const SkillScore = ({score}) => {
  let scoreIndicator;
  switch (score) {
    case 1:
      scoreIndicator = '■'; // ●○ ■□
      break;
    case 2:
      scoreIndicator = '■■';
      break;
    case 3:
      scoreIndicator = '■■■';
      break;
    case 4:
      scoreIndicator = '■■■■';
      break;
    case 5:
      scoreIndicator = '■■■■■';
      break;
  }
  return <span className="skillScore">{scoreIndicator}</span>;
};

SkillScore.propTypes = {
  score: PropTypes.number.isRequired
};

export default SkillScore;
