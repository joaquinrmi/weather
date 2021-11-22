import React from "react";

import "./loading.scss";

export interface Props
{}

const Loading: React.FunctionComponent<Props> = (props) =>
{
    return <svg className="loading" width="30" height="30">
        <circle cx="50%" cy="50%" r="12" strokeWidth="4" stroke="#A1DAF7" fill="none"></circle>
        <circle className="animated-circle" cx="50%" cy="50%" r="12" strokeWidth="4" stroke="#0080C8" fill="none"></circle>
    </svg>;
};

export default Loading;