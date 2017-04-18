import React, {PropTypes} from 'react';

const SkillScore = ({score}) => {
  let scoreIndicator;
  let skillDeficit;
  switch (score) {
    case 1:
      scoreIndicator = '■'; // ●○ ■□
      skillDeficit = '□□□□';
      break;
    case 2:
      scoreIndicator = '■■';
      skillDeficit = '□□□';
      break;
    case 3:
      scoreIndicator = '■■■';
      skillDeficit = '□□';
      break;
    case 4:
      scoreIndicator = '■■■■';
      skillDeficit = '□';
      break;
    case 5:
      scoreIndicator = '■■■■■';
      skillDeficit = '';
      break;
  }
  return (
    <span className="skillScore">
      <span>{scoreIndicator}</span>
      <span className="skillDeficit">{skillDeficit}</span>
    </span>
  );
};

SkillScore.propTypes = {
  score: PropTypes.number.isRequired
};

export default SkillScore;
