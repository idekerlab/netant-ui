import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Split from 'react-split'
import NetworkPanel from '../NetworkPanel'
import SearchPanel from '../SearchPanel'

const DEFAULT_RATIO = [30, 70]

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    boxSizing: 'border-box',
    border: '4px solid black',
  },
}))

const LeftPanel = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
    </div>
  )
}

export default LeftPanel
