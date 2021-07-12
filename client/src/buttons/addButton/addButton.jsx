import React from 'react'
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { green, purple } from '@material-ui/core/colors'
import Dialog from '@material-ui/core/Dialog'
// import Dialog from './../modalCreateHero/modalCreateHero.jsx';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '2px solid',
    lineHeight: 1.5,
    backgroundColor: 'rgba(29, 66, 255, 0.5)',
    borderColor: 'rgba(2, 43, 249, 0.2)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
      backgroundColor: 'rgba(29, 66, 255)',
      borderColor: 'rgba(29, 66, 255)',
      boxShadow: 'none'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(29, 66, 255)',
      borderColor: 'rgba(29, 66, 255)'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(29, 66, 255)'
    }
  }
})(Button)

const AddBatton = ({ onClick: handleClick, ...props }) => {
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700]
      }
    }
  }))(Button)

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1)
    }
  }))

  const theme = createMuiTheme({
    palette: {
      primary: green
    }
  })

  return (
    <div>
      <BootstrapButton
        {...props}
        onClick={handleClick}
        variant='contained'
        disableRipple
      >
        I need a hero!!!
      </BootstrapButton>
    </div>
  )
}
AddBatton.defaultProps = {
  color: 'primary'
  // className={classes.margin}
}

export default AddBatton
