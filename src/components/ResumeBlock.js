import React from 'react';
import PropTypes from 'prop-types';
import './ResumeBlock.scss';

export default function ResumeBlock({ pic, link, header, subheader, sub1, sub2 }) {
  return (
    <article className="resume-block">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <picture>
          <img src={pic} alt="Logo" />
        </picture>
      </a>
      <h3>{header}</h3>
      <p>{subheader}</p>
      <p className="sub">{sub1}</p>
      <p className="sub">{sub2}</p>
    </article>
  );
}

ResumeBlock.propTypes = {
  pic: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string.isRequired,
  sub1: PropTypes.string.isRequired,
  sub2: PropTypes.string.isRequired,
};
