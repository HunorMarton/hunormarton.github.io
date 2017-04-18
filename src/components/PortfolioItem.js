import React, {PropTypes} from 'react';
import Source from './Source';
import Techs from './Techs';

const PortfolioItem = ({data}) => {
  let preview = <img src={`../data/${data.img}`} alt="preview" />;

  return (
    <article>
      <h1>{data.title} <span className='date'>{data.date}</span></h1>
      <div className="preview">{preview}</div>
      <div className="info">
        <Source type={data.type} id={data.id} />
        <Techs techs={data.techs} />

      </div>
    </article>
  );
};

PortfolioItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default PortfolioItem;
