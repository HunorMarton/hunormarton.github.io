import React from 'react'
import PropTypes from 'prop-types'
import * as types from '../constants/portfolioTypes'

export default function Source({ type, id }) {
  let source
  let icon

  switch (type) {
    case types.CODEPEN:
      source = `http://codepen.io/HunorMarton/pen/${id}/`
      icon = 'CodePen'
      break
    case types.GITHUB:
      source = `https://github.com/HunorMarton/${id}/`
      icon = 'GitHub'
      break
    case types.SKILLSHARE:
      icon = 'Skillshare'
      break
    default:
      throw Error('Invalid source type')
  }

  return (
    <div className="source">
      {source && (
        <a href={source} target="_blank" rel="noopener noreferrer">
          <i className={`sprite sprite-${icon}`} />
          Source
        </a>
      )}
    </div>
  )
}

Source.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
