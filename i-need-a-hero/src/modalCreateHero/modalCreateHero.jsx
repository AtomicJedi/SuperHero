import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import MuiDialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import {
  // createMuiTheme,
  withStyles,
  // makeStyles,
  // ThemeProvider
} from '@material-ui/core/styles'

const Dialog = withStyles({
  root: {
    backgroundColor: '#967AC8',
  },
  "@global":{

    ".MuiPaper-root":{
      backgroundColor: '#967AC8',
    },
  }
})(MuiDialog);

export default function FormDialog ({ open, onClose: handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Email Address'
            type='email'
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleClose} color='primary'>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

// <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//   Open form dialog
// </Button>
