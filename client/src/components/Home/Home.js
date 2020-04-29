import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import CardList from "../Cards/CardList";

export const Home = () => {
    return (
        <>
            <SearchBar filter={true} />
            <div className="container h-100">
                <div className="row justify-content-center align-items-center">
                    <CardList />
                </div>
            </div>
        </>
    );
};
