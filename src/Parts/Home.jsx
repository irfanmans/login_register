import React from "react";
import homePage from "../json/home.json";

export default function Home() {
    return (
        <section className="px-14 mt-20">
            <div className="grid w-3/4 grid-cols-3 gap-y-5">
                {homePage.home.map((item, index) => {
                    return (
                        <div key={index} className="w-[340px] border rounded-lg shadow-sm">
                            <img src={item.image} height={100} alt={item.name} />
                            <p className="mt-3 p-2">{item.paragraf}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
