import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/filterActions';
import SkillScore from './SkillScore';

const Skill = ({name, id, score, actions}) => (
  <div className="skill" onClick={() => {actions.filter(id);}}>
    <a>
      <span className="skillName">{name}</span>
      <SkillScore score={score} />
    </a>
  </div>
);

Skill.propTypes = {
  actions: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    filter: state.filter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Skill);
