import React from 'react'
import PropTypes from 'prop-types'
import * as platforms from '../constants/portfolioTypes'
import './Source.scss'

export default function Source({ type, id }) {
  let source
  let label
  let icon

  switch (type) {
    case platforms.CODEPEN:
      source = `http://codepen.io/HunorMarton/pen/${id}/`
      label = 'Source'
      icon = 'CodePen'
      break
    case platforms.GITHUB:
      source = `https://github.com/HunorMarton/${id}/`
      label = 'Source'
      icon = 'GitHub'
      break
    case platforms.CSSTRICKS:
      icon = 'CSSTricks'
      break
    case platforms.SKILLSHARE:
      icon = 'SkillShare'
      break
    case platforms.YOUTUBE:
      source = `https://youtu.be/${id}`
      label = 'Tutorial'
      icon = 'YouTube'
      break
    case platforms.FREECODECAMP:
      source = `https://www.freecodecamp.org/news/${id}/`
      icon = 'freeCodeCamp'
      label = 'Article'
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
          {label}
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
