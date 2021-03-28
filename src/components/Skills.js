import React from 'react'
import PropTypes from 'prop-types'
import * as techs from '../constants/techTypes'
import * as types from '../constants/portfolioTypes'
import Skill from './Skill'
import './Skills.scss'

export default function Skills({ filter, setFilter }) {
  return (
    <section id="skills">
      <h1>Skills</h1>
      <div className="skillSection">
        <Skill
          name="Show All"
          id={types.ALL}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="CodePen"
          id={types.CODEPEN}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Github"
          id={types.GITHUB}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="freeCodeCamp"
          id={types.FREECODECAMP}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="CSS-Tricks"
          id={types.CSSTRICKS}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="YouTube"
          id={types.YOUTUBE}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Skillshare"
          id={types.SKILLSHARE}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="skillSection">
        <Skill
          name="HTML"
          id={techs.HTML}
          score={3}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Pug"
          id={techs.PUG}
          score={3}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="SVG"
          id={techs.SVG}
          score={4}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Canvas"
          id={techs.CANVAS}
          score={2}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="CSS"
          id={techs.CSS}
          score={4}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="SCSS"
          id={techs.SCSS}
          score={3}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
      <div className="skillSection">
        <Skill
          name="JavaScript"
          id={techs.JAVASCRIPT}
          score={4}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="TypeScript"
          id={techs.TYPESCRIPT}
          score={3}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="React"
          id={techs.REACT}
          score={3}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Vue"
          id={techs.VUE}
          score={4}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Three.js"
          id={techs.THREEJS}
          score={2}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="RxJS"
          id={techs.RXJS}
          score={2}
          filter={filter}
          setFilter={setFilter}
        />
      </div>
    </section>
  )
}

Skills.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}
