import React from 'react';
import Skill from './Skill';
import * as techs from '../constants/techTypes';

const Skills = () => (
  <section id="skills">
    <h1>Skills</h1>
    <div className="skillSection">
      <Skill name="HTML" id={techs.HTML} score={3} />
      <Skill name="Pug" id={techs.PUG} score={3} />
      <Skill name="SVG" id={techs.SVG} score={4} />
      <Skill name="CSS3" id={techs.CSS3} score={4} />
      <Skill name="SCSS" id={techs.SCSS} score={3} />
      <Skill name="Bootstrap" id={techs.BOOTSTRAP} score={3} />
    </div>
    <div className="skillSection">
      <Skill name="JavaScript" id={techs.JAVASCRIPT} score={4} />
      <Skill name="React" id={techs.REACT} score={3} />
      <Skill name="Redux" id={techs.REDUX} score={3} />
      <Skill name="RxJS" id={techs.RXJS} score={2} />
      <Skill name="AngularJS" id={techs.ANGULARJS} score={3} />
      <Skill name="jQuery" id={techs.JQUERY} score={3} />
    </div>
  </section>
);

export default Skills;
