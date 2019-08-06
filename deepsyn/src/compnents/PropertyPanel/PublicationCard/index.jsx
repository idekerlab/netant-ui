import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import OpenInNewIcon from '@material-ui/icons/OpenInNew'

const useStyles = makeStyles(theme => ({
  card: {
    boxSizing: 'border-box',
    minWidth: 275,
    height: '50em',
    width: '100%',
    padding: '0.3em'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  highlight: {
    fontWeight: 400,
    color: 'red'
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: '1.5em'
  }
}))

const PublicationCard = props => {
  const classes = useStyles()

  const { pubmedId, summary } = props.publication

  if (pubmedId === '' || summary === null) {
    return <Card />
  }

  return (
    <div className={classes.card}>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {getAuthors(summary.authors)}
          </Typography>
          <Typography variant="h5" component="h2">
            {summary.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {getJournal(summary.journal)}
          </Typography>
          <Typography variant="body2" component="p">
            {summary.abstract}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color={'primary'} onClick={() => handleLinkout(pubmedId)}>
            PubMed ID: {pubmedId} <OpenInNewIcon className={classes.icon} />
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const getAuthors = authors => {
  return authors
    .map(author => `${author.LastName} ${author.Initials}`)
    .join(', ')
}

const getJournal = (entry) => (
  `${entry.Title} ${entry.JournalIssue}`
)

const handleLinkout = pubmedId => {
  console.log('PMID', pubmedId)
  const url = 'https://www.ncbi.nlm.nih.gov/pubmed/?term=' + pubmedId.toString()
  window.open(url, '_blank')
}

export default PublicationCard
