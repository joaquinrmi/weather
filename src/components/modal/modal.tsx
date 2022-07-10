import React, { useEffect } from "react";

import "./modal.scss";

export interface Props
{
    id: string;

    closeRequest(): void;
}

export interface ModalElement extends HTMLDivElement
{
    isOpen(): boolean;
    open(): void;
    close(): void;
}

const Modal: React.FunctionComponent<Props> = (props) =>
{
    useEffect(() =>
    {
        const modal = document.getElementById(props.id) as ModalElement;

        modal.isOpen = () =>
        {
            return modal.classList.contains("visible") && !modal.classList.contains("closing");
        };

        modal.open = () =>
        {
            modal.classList.add("visible");
        };

        modal.close = () =>
        {
            modal.classList.add("closing");
            setTimeout(() =>
            {
                modal.classList.remove("visible");
                modal.classList.remove("closing");
            },
            250);
        };

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

    return <div id={props.id} className="modal">
        <header>
            <i id={`close-${props.id}`} className="fi fi-rr-angle-left"></i>
        </header>

        <section>
            {props.children}
        </section>
    </div>;
};

export default Modal;