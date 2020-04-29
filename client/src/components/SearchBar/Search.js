import React from "react";

export const Search = () => {
    return (
        <form
            id="searchNav"
            className="bg-success rounded p-2 form-inline w-100"
        >
            <input
                className="col-lg-11 col-sm-10 form-control bg-light border border-success"
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
            <button className="col-lg-1 col-sm-2 btn btn-light">Search</button>
        </form>
    );
};
