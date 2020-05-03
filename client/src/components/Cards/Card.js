import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Card = ({ product, user }) => {
    const isLoggedIn = sessionStorage.username;
    const [showWatchlist, setShowWatchlist] = useState();
    const [isUsers, setIsUsers] = useState(false);

    useEffect(() => {
        const showWatchlist = () => {
            if (isLoggedIn && user.watchlist.indexOf(product._id) === -1)
                setShowWatchlist(true);
            if (isLoggedIn && user.watchlist.indexOf(product._id) > -1)
                setShowWatchlist(false);
        };
        const isUsers = () => {
            if (product.sellerId === user._id) setIsUsers(true);
        };
        showWatchlist();
        isUsers();
    }, [isLoggedIn]);

    return (
        <>
            {product.status === "listed" ? (
                <Link
                    className="col-lg-3 col-12 col-md-6"
                    to={`/product/${product._id}`}
                >
                    <div className="product-link position-relative card p-0 col">
                        <img
                            className="card-img-top p-4 bg-light"
                            src={product.image}
                            alt={product.title}
                        />
                        {isUsers || !isLoggedIn ? (
                            ""
                        ) : showWatchlist ? (
                            <div
                                className="btn-watchlist-card"
                                title="Add to watchlist"
                            >
                                +
                            </div>
                        ) : !showWatchlist ? (
                            <div
                                className="btn-watchlist-card"
                                title="Add to watchlist"
                            >
                                -
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="card-body">
                            <h3 className="card-title">{product.title}</h3>
                            <h4 className="card-text">${product.price}</h4>
                        </div>
                    </div>
                </Link>
            ) : (
                ""
            )}
        </>
    );
};
