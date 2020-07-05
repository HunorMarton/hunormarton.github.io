import React from 'react'
import PropTypes from 'prop-types'
import * as techs from '../constants/techTypes'
import Skill from './Skill'
import './Skills.scss';

export default function Skills({ filter, setFilter }) {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skillSection">
        <Skill name="All" id={techs.ALL} score={0} filter={filter} setFilter={setFilter} />
        <Skill name="CodePen" id={techs.CODEPEN} score={0} filter={filter} setFilter={setFilter} />
        <Skill name="Github" id={techs.GITHUB} score={0} filter={filter} setFilter={setFilter} />
        <Skill name="Skillshare" id={techs.SKILLSHARE} score={0} filter={filter} setFilter={setFilter} />
      </div>
      <div className="skillSection">
        <Skill name="HTML" id={techs.HTML} score={3} filter={filter} setFilter={setFilter} />
        <Skill name="Pug" id={techs.PUG} score={3} filter={filter} setFilter={setFilter} />
        <Skill name="SVG" id={techs.SVG} score={4} filter={filter} setFilter={setFilter} />
        <Skill name="CSS3" id={techs.CSS3} score={4} filter={filter} setFilter={setFilter} />
        <Skill name="SCSS" id={techs.SCSS} score={3} filter={filter} setFilter={setFilter} />
      </div>
      <div className="skillSection">
        <Skill name="JavaScript" id={techs.JAVASCRIPT} score={4} filter={filter} setFilter={setFilter} />
        <Skill name="TypeScript" id={techs.TYPESCRIPT} score={4} filter={filter} setFilter={setFilter} />
        <Skill name="React" id={techs.REACT} score={4} filter={filter} setFilter={setFilter} />
        <Skill name="Vue" id={techs.VUE} score={3} filter={filter} setFilter={setFilter} />
        <Skill name="RxJS" id={techs.RXJS} score={2} filter={filter} setFilter={setFilter} />
      </div>
    </section>
  )
}

Skills.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
}
