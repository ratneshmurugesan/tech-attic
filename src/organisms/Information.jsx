import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Divider from '@material-ui/core/Divider';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './index.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  rootBg: {
    backgroundColor: '#333',
    color: '#ffeb3b',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    padding: '5px',
    flexBasis: '50%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function Information({ details, techs, steps, alive, codeLink }) {
  const classes = useStyles();

  return alive ? (
    <div className={classes.root}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Implementation Details</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column}>
            <p>{details}</p>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Powered by
                <p>{techs}</p>
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions>
          <p>{steps}</p>
        </AccordionActions>
        <AccordionActions>
          <a href={codeLink} rel="noopener noreferrer" target='_blank'>view code in github</a>
        </AccordionActions>
      </Accordion>
    </div>
  ) : null;
}