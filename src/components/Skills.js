import React from 'react'
import PropTypes from 'prop-types'
import * as techs from '../constants/techTypes'
import * as sources from '../constants/sourceTypes'
import Skill from './Skill'
import './Skills.scss'

export default function Skills({ filter, setFilter }) {
  return (
    <div id="skills">
      <div className="skillSection">
        <Skill
          name="Show All"
          id={sources.ALL}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="CodePen"
          id={sources.CODEPEN}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Github"
          id={sources.GITHUB}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="freeCodeCamp"
          id={sources.FREECODECAMP}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="CSS-Tricks"
          id={sources.CSSTRICKS}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="YouTube"
          id={sources.YOUTUBE}
          score={0}
          filter={filter}
          setFilter={setFilter}
        />
        <Skill
          name="Skillshare"
          id={sources.SKILLSHARE}
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
    </div>
  )
}

Skills.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired
}
