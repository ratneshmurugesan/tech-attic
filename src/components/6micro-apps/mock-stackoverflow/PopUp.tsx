import * as React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import { TPopUpProps } from "./interface";

import "./index.scss";

const PopUp: React.FC<TPopUpProps> = ({ item, index, openStateObj, handleClose }) => {
    const itemTitle: string = item.title;
    const itemBody: object = item.body;
    const itemLink: string = item.link;

    return (
        <tr key={index}>
            <Dialog
                maxWidth={"md"}
                open={openStateObj[index] || false}
                onClose={() => handleClose(index)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{itemTitle}</DialogTitle>
                <div className="question-body" dangerouslySetInnerHTML={{ __html: itemBody }} />
                <a href={itemLink} target="_blank" rel="noopener noreferrer">See all contents on stackoverflow</a>
            </Dialog>
        </tr>
    );
};

export default PopUp;