import React from 'react';
import PropTypes from 'prop-types';
import * as techs from '../constants/techTypes';
import Skill from './Skill';

export default function Skills({ filter, setFilter }) {
  const props = { filter, setFilter };
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skillSection">
        <Skill name="All" id={techs.ALL} score={0} {...props} />
        <Skill name="CodePen" id={techs.CODEPEN} score={0} {...props} />
        <Skill name="Github" id={techs.GITHUB} score={0} {...props} />
        <Skill name="Skillshare" id={techs.SKILLSHARE} score={0} {...props} />
      </div>
      <div className="skillSection">
        <Skill name="HTML" id={techs.HTML} score={3} {...props} />
        <Skill name="Pug" id={techs.PUG} score={3} {...props} />
        <Skill name="SVG" id={techs.SVG} score={4} {...props} />
        <Skill name="CSS3" id={techs.CSS3} score={4} {...props} />
        <Skill name="SCSS" id={techs.SCSS} score={3} {...props} />
      </div>
      <div className="skillSection">
        <Skill name="JavaScript" id={techs.JAVASCRIPT} score={4} {...props} />
        <Skill name="TypeScript" id={techs.TYPESCRIPT} score={4} {...props} />
        <Skill name="React" id={techs.REACT} score={4} {...props} />
        <Skill name="Vue" id={techs.VUE} score={3} {...props} />
        <Skill name="RxJS" id={techs.RXJS} score={2} {...props} />
      </div>
    </section>
  );
}

Skills.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
