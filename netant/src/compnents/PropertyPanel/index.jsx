import React, {useEffect} from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import PublicationCard from './PublicationCard'

const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',

    width: '100%',
    height: '100%',
    backgroundColor: '#EFEFEF'
  },
  title: {
    display: 'flex',
    alignItems: 'cecnter',
    justifyContent: 'center',
    padding: '0.5em'
  }
}))

const PropertyPanel = props => {

  useEffect(() => {
    props.publicationActions.fetchPubStarted('29686393')

  }, [])

  const classes = useStyles()

  const getCards = () => {
    const cards = []
    let count = 10
    while (count--) {
      cards.push(<PublicationCard key={count} {...props} />)
    }

    return cards
  }

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h5">Results</Typography>
      </div>
      {getCards()}
    </div>
  )
}

export default PropertyPanel
