import React, { useEffect } from "react";

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
    useEffect(() =>
    {
        const cityInput = document.getElementById(`input-${props.id}`) as HTMLInputElement;

        if(cityInput !== null)
        {
            cityInput.focus();
        }
    });

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
            onClick={() =>
            {
                const form = document.getElementById(props.id) as CityFormElement;

                onFormSubmit(form);
            }}
        >
            Aceptar
        </Button>

        <input type="submit" className="invisible" />
    </form>;
};

export default CityForm;