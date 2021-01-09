export interface TQuestionItem {
  body: string;
  link: string;
  owner: {
    display_name: string;
  };
  author: Object;
  question_id: number;
  title: string;
  display_name: string;
  creation_date: Date;
}
export interface TQuestionListProps {
  apiDataItems: TQuestionItem[];
  openStateObj: TOpenStateObj;
  handleClickOpen: (index: number) => void;
  handleClose: (index: number) => void;
}

export interface TErrorObj {
  error_id: number;
  error_name: string;
  error_message: string;
  error_status: boolean;
}

export interface TOpenStateObj {}

export interface TPopUpProps {
  item: TQuestionItem;
  index: number;
  openStateObj: TOpenStateObj;
  handleClose: (index: number) => void;
}
