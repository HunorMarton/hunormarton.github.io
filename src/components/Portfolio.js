import React from 'react'
import PropTypes from 'prop-types'
import * as techs from '../constants/techTypes'
import portfolioItems from '../data/portfolioItems'
import PortfolioItem from './PortfolioItem'

export default function Portfolio({ filter }) {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>
      <div>filter: {filter === '' ? 'none' : filter}</div>
      {portfolioItems
        .filter(
          item =>
            filter === techs.ALL ||
            filter === techs.HTML ||
            item.type === filter ||
            item.techs.filter(tech => tech === filter).length === 1
        )
        .map(item => (
          <PortfolioItem key={item.title} data={item} />
        ))}
    </section>
  )
}

Portfolio.propTypes = {
  filter: PropTypes.string.isRequired,
}
