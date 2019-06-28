import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MainPanel from '../../compnents/MainPanel'
import { withRouter } from 'react-router-dom'

import * as searchActions from '../../actions/search'
import * as publicationActions from '../../actions/publication'

const MainContainer = props => <MainPanel {...props} />

function mapStateToProps(state) {
  return {
    search: state.search,
    publication: state.publication
  }
}

function mapDispatchToProps(dispatch) {
  return {
    searchActions: bindActionCreators(searchActions, dispatch),
    publicationActions: bindActionCreators(publicationActions, dispatch)
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainContainer)
)
