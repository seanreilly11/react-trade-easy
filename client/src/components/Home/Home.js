import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import CardList from "../Cards/CardList";

export const Home = () => {
    const type = "Home";
    return (
        <>
            <SearchBar filter={true} />
            <div className="container h-100">
                <div className="row justify-content-center align-items-center">
                    <CardList type={type} />
                </div>
            </div>
        </>
    );
};
