import React from "react";

import "./button.scss";

export interface Props
{
    id: string;
    content: string;
}

const Button: React.FunctionComponent<Props> = (props) =>
{
    return <div id={props.id} className="button">
        <span className="content">
            {props.content}
        </span>
    </div>;
};

export default Button;