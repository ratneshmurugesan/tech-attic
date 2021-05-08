import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  primaryButton: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 100,
    padding: theme.spacing(1, 4),
    "&:hover": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
    },
  },
  disabledPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.disabled,
    borderColor: theme.palette.primary.disabled,
    "&:hover": {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.disabled,
      cursor: "not-allowed",
    },
  },
  secondaryButton: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.light,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 100,
    padding: theme.spacing(1, 4),
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.light,
    },
  },
  disabledSecondary: {
    color: theme.palette.primary.disabled,
    backgroundColor: theme.palette.secondary.light,
    borderColor: theme.palette.primary.disabled,
    "&:hover": {
      color: theme.palette.primary.disabled,
      backgroundColor: theme.palette.secondary.light,
      cursor: "not-allowed",
    },
  },
  defaultButton: {
    color: theme.palette.primary.main,
    // fontWeight: theme.fontweight.bold,
    borderRadius: 100,
    padding: theme.spacing(1, 4),
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  disabledDefault: {
    color: theme.palette.primary.disabled,
    "&:hover": {
      color: theme.palette.primary.disabled,
      cursor: "not-allowed",
    },
  },
  ternaryButton: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: 100,
    padding: theme.spacing(1, 4),
    "&:hover": {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
    },
  },
  disabledTernary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.disabled,
    borderColor: "transparent",
    "&:hover": {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.disabled,
      cursor: "not-allowed",
    },
  },
}));

const ButtonComponent = props => {
  const {
    name,
    onClick,
    type,
    disabled,
    classObject,
    disableRipple,
    ...rest
  } = props;
  const classes = useStyles();

  const getButtonType = _ => {
    switch (type) {
      case "primary":
        return `${classes.primaryButton} ${
          disabled ? classes.disabledPrimary : ""
        } ${classObject ? classObject.primary : ""}`;

      case "secondary":
        return `${classes.secondaryButton} ${
          disabled ? classes.disabledSecondary : ""
        } ${classObject ? classObject.secondary : ""}`;

      case "ternary":
        return `${classes.ternaryButton} ${
          disabled ? classes.disabledTernary : ""
        } ${classObject ? classObject.ternary : ""}`;

      default:
        return `${classes.defaultButton} ${
          disabled ? classes.disabledDefault : ""
        } ${classObject ? classObject.default : ""}`;
    }
  };
  return (
    <Button
      {...rest}
      onClick={e => {
        if (!disabled) {
          onClick(e);
        }
      }}
      className={getButtonType()}
      disableRipple={disableRipple}
    >
      {name}
    </Button>
  );
};

ButtonComponent.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  classObject: PropTypes.object,
  disableRipple: PropTypes.bool,
  id: PropTypes.string,
  key: PropTypes.string,
};

ButtonComponent.defaultProps = {
  type: "default",
  disabled: false,
  classObject: undefined,
  disableRipple: true,
};

export default ButtonComponent;
