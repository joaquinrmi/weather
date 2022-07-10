import React from "react";

import Button from "../button/";

import "./city_form.scss";

export interface Props
{
    id: string;

    onSubmit(data: CityFormData): void;
}

export interface CityFormData
{
    cityName: string;
}

interface CityFormElement extends HTMLFormElement
{
    city: HTMLInputElement;
}

const CityForm: React.FunctionComponent<Props> = (props) =>
{
    const onFormSubmit = (form: CityFormElement) =>
    {
        if(!form)
        {
            return;
        }

        if(!form.city)
        {
            return;
        }

        props.onSubmit({
            cityName: form.city.value
        });
    };

    return <form
        id={props.id}
        className="city-form"
        onSubmit={(ev) =>
        {
            ev.preventDefault();

            onFormSubmit(ev.currentTarget as CityFormElement);
        }}
    >
        <input
            id={`input-${props.id}`}
            name="city"
            type="text"
            placeholder="Ciudad (nombre en inglés)"
        />

        <Button
            id={`button-${props.id}`}
            content="Aceptar"
            onClick={() =>
            {
                const form = document.getElementById(props.id) as CityFormElement;

                onFormSubmit(form);
            }}
        />

        <input type="submit" className="invisible" />
    </form>;
};

export default CityForm;