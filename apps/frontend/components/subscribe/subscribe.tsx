"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Subscribe() {

    const t = useTranslations("subscribe");

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");

    function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
        e.preventDefault();

    }

    return (
        <div className="subscribe-container my-4 gap-4 flex flex-col w-full">
            <h2 className="font-bold">{t("title")}</h2>
            <form onSubmit={handleSubmit} className="subscribe-form flex flex-col gap-4 w-full items-center justify-center">

                <div className="name flex justify-between items-center gap-2 md:gap-6">
                    <input
                    type="text"
                    placeholder={t("nameplaceholder")}
                    value={firstName}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border rounded-full w-1/2 px-4 py-2"
                    />
                    <input
                    type="text"
                    placeholder={t("secondnameplaceholder")}
                    value={secondName}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border rounded-full w-1/2 px-4 py-2"
                    />
                </div>
                <input
                    type="email"
                    placeholder={t("emailplaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border rounded-full px-4 py-2 w-full md:w-[96%]"
                />
                <button 
                    type="submit"
                    className="bg-gray-200 w-1/3 p-3 text-black cursor-pointer rounded-full"
                    >Subscribe</button>
            </form>
        </div>
    );
}