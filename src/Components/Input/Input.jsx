import React from "react";

export default function Input({ type, name, id, placeholder, className, onChange }) {
    return (
        <>
            <input type={type} name={name} id={id} placeholder={placeholder} className={className} onChange={onChange} />
        </>
    );
}
