import React from "react";

import "./button.scss";

export interface Props
{
    id: string;
    content: string;
}

const Button: React.FunctionComponent<Props> = (props) =>
{
    return <button id={props.id} className="button">
        <span className="content">
            {props.content}
        </span>
    </button>;
};

export default Button;