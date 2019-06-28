import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser'
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
    // margin: theme.spacing(2),
    fontSize: '2em',
  }
}))

export default function SimpleCard() {
  const classes = useStyles()

  const text1 =
    'Systems biology requires not only genome-scale data but also methods\n' +
    '            to integrate these data into interpretable models. Previously, we\n' +
    '            developed approaches that organize omics data into a structured\n' +
    '            hierarchy of cellular components and pathways, called a "data-driven\n' +
    '            ontology." Such hierarchies recapitulate known cellular subsystems\n' +
    '            and discover new ones. To broadly facilitate this type of modeling,\n' +
    '            we report the development of a software library called the '
  const high1 = (
    <mark>
      Data-Driven Ontology Toolkit (DDOT)
      <OpenInBrowserIcon className={classes.icon} color="secondary"/>
    </mark>
  )

  const text2 =
    ' consisting of a\n' +
    '            Python package (https://github.com/idekerlab/ddot) to assemble and\n' +
    '            analyze ontologies and a web application (http://hiview.ucsd.edu) to\n' +
    '            visualize them.'

  return (
    <div className={classes.card}>
      <Card>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Yu MK, Ma J, Ono K, Zheng F, Fong SH, Gary A, Chen J, Demchak B,
            Pratt D, Ideker T.
          </Typography>
          <Typography variant="h5" component="h2">
            DDOT: A Swiss Army Knife for Investigating Data-Driven Biological
            Ontologies.
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Cell Syst. 2019 Mar 27;8(3):267-273.e3. doi:
            10.1016/j.cels.2019.02.003. Epub 2019 Mar 13.
          </Typography>
          <Typography variant="body2" component="p">
            {text1}
            {high1}
            {text2}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color={'primary'} size="small">PubMed ID: xxxxxxx  <OpenInNewIcon/></Button>
        </CardActions>
      </Card>
    </div>
  )
}
