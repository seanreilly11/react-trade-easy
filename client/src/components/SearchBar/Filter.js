import React from "react";

export const Filter = () => {
    return (
        <div id="filterBar" className="rounded p-2 bg-success">
            <select
                id="filterSelect"
                className="form-control col-xl-2 col-lg-3 col-md-4 col-12"
            >
                <option value="featured">Featured First</option>
                <option value="low">Price - Low to High</option>
                <option value="high">Price - High to Low</option>
            </select>
        </div>
    );
};
