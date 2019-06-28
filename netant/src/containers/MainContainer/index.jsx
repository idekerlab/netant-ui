import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainPanel from '../../compnents/MainPanel'
import { withRouter } from 'react-router-dom'

import * as searchActions from '../../actions/search'

const MainContainer = props => <MainPanel {...props} />

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainContainer)
)
