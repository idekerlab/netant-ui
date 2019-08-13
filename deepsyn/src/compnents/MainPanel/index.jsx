import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Split from 'react-split'
import LeftPanel from './LeftPanel'
import PropertyPanel from '../PropertyPanel'
import SearchPanel from '../SearchPanel'

const DEFAULT_RATIO = [70, 30]

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: 0,
    gridAutoRows: 'minmax(100vh, auto)',
  },
  search: {
    backgroundColor: '#FFFFFF',
    boxSizing: 'border-box',
    gridColumn: '1 / 2',
    gridRow: 1,
  },
  left: {
    backgroundColor: 'teal',
    boxSizing: 'border-box',
    gridColumn: '2/5',
    gridRow: 1,
  },
  right: {
    backgroundColor: 'orange',
    boxSizing: 'border-box',
    gridColumn: '5/6',
    gridRow: 1,
  },
}))

const MainPanel = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <SearchPanel {...props} />
      </div>
      <div className={classes.left}></div>
      <div className={classes.right}>
        <PropertyPanel {...props} />
      </div>
    </div>
  )
}

export default MainPanel
