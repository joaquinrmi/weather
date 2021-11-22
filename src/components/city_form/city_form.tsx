import React, { useEffect } from "react";

import Button from "../button/";

import "./city_form.scss";

export interface Props
{
    id: string;
}

export interface CityFormElement extends HTMLDivElement
{
    setFocus(): void;
    clear(): void;

    onSubmit(data: CityFormData): void;
}

export interface CityFormData
{
    cityName: string;
}

const CityForm: React.FunctionComponent<Props> = (props) =>
{
    useEffect(() =>
    {
        const form = document.getElementById(props.id) as CityFormElement;
        const input = document.getElementById(`input-${props.id}`) as HTMLInputElement;

        form.setFocus = () =>
        {
            input.focus();
        };

        form.clear = () =>
        {
            input.value = "";
        };

        form.onSubmit = () =>
        {};

        const button = document.getElementById(`button-${props.id}`) as HTMLDivElement;

        button.onclick = () =>
        {
            form.onSubmit({
                cityName: input.value
            });
            form.clear();
        };

        const checkSubmit = (ev: KeyboardEvent) =>
        {
            if(ev.key === "Enter" && document.activeElement === input)
            {
                form.onSubmit({
                    cityName: input.value
                });
                form.clear();
            }
        };

        document.addEventListener("keydown", checkSubmit);

        return () =>
        {
            document.removeEventListener("keydown", checkSubmit);
        };
    },
    []);

    return <div id={props.id} className="city-form">
        <input id={`input-${props.id}`} type="text" placeholder="Ciudad" />

        <Button id={`button-${props.id}`} content="Aceptar" />
    </div>;
};

export default CityForm;