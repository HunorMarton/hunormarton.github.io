import React from 'react'
import PropTypes from 'prop-types'
import Preview from './Preview'
import Source from './Source'
import Techs from './Techs'
import './HobbyItem.scss'

export default function HobbyItem({ data }) {
  return (
    <article>
      <h1>
        <span>{data.title}</span> <span className="date">{data.date}</span>
      </h1>
      <Preview img={data.img} data={data} link={data.link} />
      <div className="info">
        {data.sources.map(source => (
          <Source
            key={`${source.type}-${source.id}`}
            type={source.type}
            id={source.id}
          />
        ))}
        <Techs techs={data.techs} />
      </div>
    </article>
  )
}

HobbyItem.propTypes = {
  data: PropTypes.object.isRequired
}
