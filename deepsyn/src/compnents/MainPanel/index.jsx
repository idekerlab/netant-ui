import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Split from 'react-split'

import PropertyPanel from '../PropertyPanel'
import NetworkPanel from '../NetworkPanel'

const DEFAULT_RATIO = [70, 30]

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    backgroundColor: '#EEEEFF'
  }
}))

const MainPanel = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Split
        sizes={DEFAULT_RATIO}
        direction="horizontal"
        gutterSize={15}
        className={classes.root}
      >
        <NetworkPanel {...props} />
        <PropertyPanel {...props} />
      </Split>
    </div>
  )
}

export default MainPanel
