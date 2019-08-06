import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import NetworkViewer from '../NetworkViewer'
import Search from '../Search'


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

  const handleClick = evt => {
    console.log('CLICK!!')
  }

  return (
    <div className={classes.root} onClick={handleClick}>
      <Search {...props} />
      <Typography variant="h2">Network</Typography>
    </div>
  )
}

export default PropertyPanel
