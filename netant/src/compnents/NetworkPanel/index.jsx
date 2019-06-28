import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#FAFAFA'
  }
}))

const PropertyPanel = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography variant="h2">Main</Typography>
    </div>
  )
}

export default PropertyPanel
