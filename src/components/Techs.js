import React, {PropTypes} from 'react';

const Techs = ({techs}) => (
  <div className="techs">
    <ul>
      {techs.map(tech => <li key={tech}>{tech}</li>)}
    </ul>
  </div>
);

Techs.propTypes = {
  techs: PropTypes.array.isRequired
};

export default Techs;
