import React, { MouseEventHandler } from "react";

import "./button.scss";

export interface Props
{
    id: string;
    content: string;

    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<Props> = (props) =>
{
    return <button
        id={props.id}
        className="button"
        onClick={props.onClick}
    >
        <span className="content">
            {props.content}
        </span>
    </button>;
};

export default Button;