import React, { useEffect } from "react";

import "./popup_error.scss";

export interface Props
{
    id: string;
    title: React.ReactNode;
    content: React.ReactNode;

    closeRequest(): void;
}

const PopupError: React.FunctionComponent<Props> = (props) =>
{
    useEffect(() =>
    {
        setTimeout(() =>
        {
            const element = document.getElementById(props.id) as HTMLDivElement;
            if(element === null)
            {
                return;
            }

            element.classList.add("end");

            const animation = element.querySelector(".popup-animation") as HTMLDivElement;
            if(animation === null)
            {
                return;
            }

            animation.classList.add("end");
        }, 200);
    });

    const closePopup = () =>
    {
        const element = document.getElementById(props.id) as HTMLDivElement;
        if(element === null)
        {
            return;
        }

        element.classList.remove("end");

        const animation = element.querySelector(".popup-animation") as HTMLDivElement;
        if(animation === null)
        {
            return;
        }

        animation.classList.remove("end");

        setTimeout(() =>
        {
            props.closeRequest();
        },
        250);
    };

    return <div id={props.id} className="popup-error">
        <div className="popup-animation">
            <section className="popup-body">
                <header className="popup-header">
                    {props.title}
                </header>

                <section className="popup-content">
                    {props.content}
                </section>

                <footer className="popup-footer">
                    <button
                        className="popup-close"
                        onClick={closePopup}
                    >
                        Cerrar
                    </button>
                </footer>
            </section>
        </div>
    </div>;
};

export default PopupError;