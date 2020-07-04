import React from 'react'
import PropTypes from 'prop-types'

export default function SkillScore({ score }) {
  let scoreIndicator
  let skillDeficit
  // TODO: Replace switch case
  switch (score) {
    case 1:
      scoreIndicator = '■' // ●○ ■□
      skillDeficit = '■■■■'
      break
    case 2:
      scoreIndicator = '■■'
      skillDeficit = '■■■'
      break
    case 3:
      scoreIndicator = '■■■'
      skillDeficit = '■■'
      break
    case 4:
      scoreIndicator = '■■■■'
      skillDeficit = '■'
      break
    case 5:
      scoreIndicator = '■■■■■'
      skillDeficit = ''
      break
    default:
      throw Error('Invalid score')
  }
  return (
    <span className="skillScore">
      <span>{scoreIndicator}</span>
      <span className="skillDeficit">{skillDeficit}</span>
    </span>
  )
}

SkillScore.propTypes = {
  score: PropTypes.number.isRequired,
}
