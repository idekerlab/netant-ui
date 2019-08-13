import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NetworkViewer from '../NetworkViewer'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FA0000',
  },
}))

const NetworkPanel = props => {
  const classes = useStyles()

  const handleClick = evt => {
    console.log('CLICK!!')
  }

  return <div className={classes.root}></div>
}

export default NetworkPanel
