import React from 'react';
import PropTypes from 'prop-types';
import SkillScore from './SkillScore';

export default function Skill({ name, id, score, filter, setFilter }) {
  const handleClick = () => setFilter(id);
  const handlePress = () => setFilter(id);
  return (
    <div className="skill" onClick={handleClick} onKeyPress={handlePress}>
      <span className={id === filter ? 'selectedSkill skillName' : 'skillName'}>
        {name}
      </span>
      {score > 0 && <SkillScore score={score} />}
    </div>
  );
}

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
