import React from 'react'
import PropTypes from 'prop-types'
import * as platforms from '../constants/portfolioTypes'
import './Source.scss'

export default function Source({ type, id }) {
  let source
  let icon

  switch (type) {
    case platforms.CODEPEN:
      source = `http://codepen.io/HunorMarton/pen/${id}/`
      icon = 'CodePen'
      break
    case platforms.GITHUB:
      source = `https://github.com/HunorMarton/${id}/`
      icon = 'GitHub'
      break
    case platforms.CSSTRICKS:
      icon = 'CSSTricks'
      break
    case platforms.SKILLSHARE:
      icon = 'SkillShare'
      break
    case platforms.YOUTUBE:
      icon = 'YouTube'
      break
    case platforms.FREECODECAMP:
      icon = 'freeCodeCamp'
      break
    default:
      throw Error('Invalid source type')
  }

  const Icon = <i className={`sprite sprite-${icon}`} />

  return (
    <div className="source">
      {source ? (
        <a href={source} target="_blank" rel="noopener noreferrer">
          {Icon}
          Source
        </a>
      ) : (
        Icon
      )}
    </div>
  )
}

Source.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}
