import React from "react";

export default function Input({ type, name, id, placeholder, className }) {
    return (
        <>
            <input type={type} name={name} id={id} placeholder={placeholder} className={className} />
        </>
    );
}
