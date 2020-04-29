import React from "react";

export const Categories = () => {
    return (
        <>
            <button
                id="categoryDropDownBtn"
                className="btn btn-block btn-primary my-1"
                data-toggle="collapse"
                data-target="#categories"
                aria-expanded="false"
                aria-controls="categories"
            >
                Categories
            </button>
            <div id="categories" className="collapse">
                <div
                    id="collapse"
                    className="categories-section p-3 bg-light d-flex justify-content-around row m-0"
                >
                    <button
                        type="button"
                        id="collectiblesButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Antiques/Collectibles
                    </button>
                    <button
                        type="button"
                        id="booksButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Books
                    </button>
                    <button
                        type="button"
                        id="clothingButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Clothing
                    </button>
                    <button
                        type="button"
                        id="electronicsButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Electronics
                    </button>
                    <button
                        type="button"
                        id="furnitureButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Furniture/Homeware
                    </button>
                    <button
                        type="button"
                        id="gamesButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Games/Toys
                    </button>
                    <button
                        type="button"
                        id="gardeningButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Gardening/Outdoors
                    </button>
                    <button
                        type="button"
                        id="musicButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Music
                    </button>
                    <button
                        type="button"
                        id="sportButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Sport
                    </button>
                    <button
                        type="button"
                        id="otherButton"
                        className="btn-category btn btn-outline-secondary btn-sm my-1"
                    >
                        Other
                    </button>
                </div>
            </div>
        </>
    );
};
