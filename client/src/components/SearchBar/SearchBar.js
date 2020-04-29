import React from "react";
import { Search } from "./Search";
import { Categories } from "./Categories";
import { Filter } from "./Filter";

export const SearchBar = ({ filter }) => {
    return (
        <div
            id="filterContainer"
            className="container mt-3 border-success rounded p-0"
        >
            <Search />
            <Categories />
            {filter ? <Filter /> : null}
        </div>
    );
};
