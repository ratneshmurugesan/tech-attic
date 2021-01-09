import * as React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import PopUp from "./PopUp";

import { TQuestionListProps, TQuestionItem } from "./interface";
import { getCreationDate } from "./utils";

const QuestionList: React.FC<TQuestionListProps> = ({ apiDataItems, handleClickOpen, handleClose, openStateObj }) => {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell id={"author-header"}
                            align="center"
                            key={"author-header"}>Author</TableCell>
                        <TableCell id={"title-header"}
                            align="center"
                            key={"title-header"}>Title</TableCell>
                        <TableCell id={"cDate-header"}
                            align="center"
                            key={"cDate-header"}>Creation Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {apiDataItems.length
                        ? apiDataItems.map((item: TQuestionItem, i: number) => {
                            const owner = item.owner;
                            const author = owner.display_name;
                            const question_id = item.question_id;
                            const title = item.title;
                            const cDate = getCreationDate(item.creation_date);
                            return [
                                <TableRow key={question_id}>
                                    <TableCell
                                        id={`name-${question_id}`}
                                        align="center"
                                        key={`name-${question_id}`}
                                    >
                                        {author}
                                    </TableCell>
                                    <TableCell
                                        id={`title-${question_id}`}
                                        align="center"
                                        key={`title-${question_id}`}
                                    >
                                        <span
                                            id={`span-title-${question_id}`}
                                            key={`span-title-${question_id}`}
                                            className={"title"}
                                            onClick={() => handleClickOpen(i)}
                                        >
                                            {title}
                                        </span>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        id={`cDate-${question_id}`}
                                        key={`cDate-${question_id}`}
                                    >
                                        {cDate}
                                    </TableCell>
                                </TableRow>,
                                <PopUp key={`popup-${question_id}`}  item={item} index={i} openStateObj={openStateObj} handleClose={handleClose} />
                            ];
                        })
                        : null}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default QuestionList;