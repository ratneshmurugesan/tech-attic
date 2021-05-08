import { User } from "./interfaces";
import { Title } from "./components/title";
import { GetComponentProps } from "./utils";

export type Color = "RED" | "BLUE" | "GREEN";

export type UserProps = {
  user: User;
};

export type TitleProps = {
  title: string;
  color: Color;
};

export type TitleWrapperProps = GetComponentProps<typeof Title> & {
  onClick: () => void;
};
