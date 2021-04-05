import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles } from '@material-ui/core/styles';
import {heroName} from "../redux/modalNewHero/actionModal";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles({
    DiaBgrnd: {
      '& > * div': {
        backgroundColor: '#c6a8fd'

      }
    }
  }
);



export default function FormDialog ({ open, onClose: handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const closeAddSuccess = useSelector(state => state.modalHeroAdd.open);
  const nameHeroForAll = useSelector(state => state.modalHeroAdd.nameHero);
  console.log(nameHeroForAll)

  const handleCreateName = (event) => {
    let nameHeroValue = event.target.value;
    console.log(nameHeroValue)

    // nameHeroForAll(nameHeroValue)
    dispatch(heroName(false, {nameHeroValue}))
  }


  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        className={classes.DiaBgrnd}
      >
        <DialogTitle id='form-dialog-title'>Give me a Hero!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please come up with a hero name. Hero's name is his second person.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Please enter name a hero'
            fullWidth
            // value={nameHeroForAll}
            onChange={ e => handleCreateName(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={handleCreateName} color='primary'>
            HERO!!!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

// <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//   Open form dialog
// </Button>
