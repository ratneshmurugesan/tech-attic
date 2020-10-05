/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const APIResponseComponent = ({
  open,
  message,
  type,
  counter,
}) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  useEffect(_ => {
    setOpenSnackbar(open);
  }, [open, counter]);

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

APIResponseComponent.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  counter: PropTypes.number,
};

APIResponseComponent.defaultProps = {
  type: 'success',
  counter: 1,
};

export default APIResponseComponent;


