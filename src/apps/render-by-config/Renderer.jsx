import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  // Button
} from "reactstrap";

import {
Button,
// CardMedia
} from '@material-ui/core';

const KeysToComponentMap = {
  card: Card,
  img: CardImg,
  text: CardText,
  body: CardBody,
  title: CardTitle,
  subtitle: CardSubtitle,
  button: Button
};

function renderer(config) {
  if (typeof KeysToComponentMap[config.component] !== "undefined") {
    // console.log({ [config.component]: KeysToComponentMap[config.component] });
    return React.createElement(
      KeysToComponentMap[config.component],
      {
        src: config.src,
        key: config.key,
      },
      config.children &&
        (typeof config.children === "string"
          ? config.children
          : config.children.map(c => renderer(c))) // if more children are detected, recursively fetch and create it.
    );
  }
}

export default renderer;