import React from "react";
import { UserProps } from "../types";

export const User = ({ user }: UserProps) => <p>
    <p>{user.name}</p>
    <p>{user.age}</p>
</p>;