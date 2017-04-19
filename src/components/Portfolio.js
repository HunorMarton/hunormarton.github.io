import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/filterActions';
import * as techs from '../constants/techTypes';
import PortfolioItem from '../components/PortfolioItem';
import portfolioItems from '../data/portfolioItems';

class Portfolio extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };

  }

  render() {
    return (
      <section id="portfolio">
        <h1>Portfolio</h1>
        <div>filter: {this.props.filter === '' ? 'none' : this.props.filter}</div>
        {
          portfolioItems
          .filter(item =>
            this.props.filter === '' ||
            this.props.filter === techs.HTML ||
            item.type === this.props.filter ||
            item.techs.filter(tech => tech === this.props.filter).length === 1
          )
          .map(item => <PortfolioItem key={item.title} data={item}/>)
        }
      </section>
    );
  }
}


Portfolio.propTypes = {
  filter: PropTypes.string.isRequired
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
)(Portfolio);
