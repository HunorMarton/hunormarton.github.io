import React, { useState } from 'react'
import * as sources from '../constants/sourceTypes'
import portfolioItems from '../data/portfolioItems'
import PortfolioItem from './HobbyItem'
import Skills from './Skills'
import './Hobby.scss'

export default function Hobby() {
  const [filter, setFilter] = useState(sources.ALL)

  return (
    <section id="hobby">
      <h1>Hobby Projects</h1>
      <Skills filter={filter} setFilter={setFilter} />
      <div className="hobby-items">
        {portfolioItems
          .filter(
            item =>
              filter === sources.ALL ||
              item.sources.some(source => source.type === filter) ||
              item.techs.some(tech => tech === filter) ||
              (filter === sources.CODEPEN &&
                item.sources.some(
                  source => source.type === sources.CODEPENPOST // Also include CodePen posts if filtered for CodePen
                ))
          )
          .map(item => (
            <PortfolioItem key={item.title} data={item} />
          ))}
      </div>
    </section>
  )
}
