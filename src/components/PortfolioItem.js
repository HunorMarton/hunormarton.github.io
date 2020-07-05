import React from 'react'
import PropTypes from 'prop-types'
import Preview from './Preview'
import Source from './Source'
import Techs from './Techs'
import './PortfolioItem.scss';

export default function PortfolioItem({ data }) {
  return (
    <article>
      <h1>
        <span>{data.title}</span> <span className="date">{data.date}</span>
      </h1>
      <Preview img={data.img} data={data} link={data.link} />
      <div className="info">
        <Source type={data.type} id={data.id} />
        <Techs techs={data.techs} />
      </div>
    </article>
  )
}

PortfolioItem.propTypes = {
  data: PropTypes.object.isRequired,
}
