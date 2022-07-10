import React, { useEffect } from "react";

import "./modal.scss";

export interface Props
{
    id: string;

    closeRequest(): void;
}

const Modal: React.FunctionComponent<Props> = (props) =>
{
    useEffect(() =>
    {
        const checkEscape = (ev: KeyboardEvent) =>
        {
            if(ev.key === "Escape")
            {
                props.closeRequest();
            }
        }

        document.addEventListener("keydown", checkEscape);

        const closeButton = document.getElementById(`close-${props.id}`) as HTMLSpanElement;
        
        closeButton.onclick = () =>
        {
            props.closeRequest();
        };

        return () =>
        {
            document.removeEventListener("keydown", checkEscape);
        };
    },
    []);

    return <div id={props.id} className="modal visible">
        <header>
            <i id={`close-${props.id}`} className="fi fi-rr-angle-left"></i>
        </header>

        <section>
            {props.children}
        </section>
    </div>;
};

export default Modal;