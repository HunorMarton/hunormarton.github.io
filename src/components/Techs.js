import React from 'react';
import PropTypes from 'prop-types';

export default function Techs({ techs }) {
  return (
    <div className="techs">
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}

Techs.propTypes = {
  techs: PropTypes.array.isRequired,
};
