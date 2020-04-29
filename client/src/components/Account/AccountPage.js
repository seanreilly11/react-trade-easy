import React, { useEffect, useState } from "react";
import axios from "axios";

export const AccountPage = ({ match }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(match.params.id);
    }, []);

    const getUser = async (id) => {
        const response = await axios.get(`/users/u=${id}`);
        setUser(response.data);
        console.log(response.data);
    };

    return (
        <div className="container h-100 my-5">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="col-9 row account-info border py-3 rounded-lg">
                    <div className="col-lg-4 col-md-6 col-sm-12 order-2 order-md-2 order-lg-1 account-info__sidebar d-flex flex-column justify-content-center">
                        <h5 className="account-info__sidebar__heading">
                            Selling
                        </h5>
                        <ul className="account-info__sidebar__list">
                            <li className="account-info__sidebar__list-item account-info__sidebar__list-item--active">
                                Items I'm Selling
                            </li>
                            <li className="account-info__sidebar__list-item">
                                Sold items
                            </li>
                        </ul>
                        <h5 className="account-info__sidebar__heading">
                            Buying
                        </h5>
                        <ul className="account-info__sidebar__list">
                            <li className="account-info__sidebar__list-item">
                                Bought items
                            </li>
                            <li className="account-info__sidebar__list-item">
                                My watchlist
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 order-1 order-md-1 order-lg-2 account-info__picture d-flex flex-column align-items-center justify-content-center">
                        <h3 className="text-center">
                            {user.firstName} {user.lastName}
                        </h3>
                        {/* <img
                            src="./images/avatar.png"
                            alt="Profile avatar"
                            className="w-100"
                        /> */}
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 order-3 account-info__details text-left text-md-right d-flex flex-column justify-content-center">
                        <p className="mb-2">Username: {user.username}</p>
                        <p className="mb-2">Email: {user.email}</p>
                        <p className="mb-2">Location: {user.location}</p>
                        <p className="mb-3">Balance: ${user.balance}</p>
                        <div className="row justify-content-start justify-content-sm-end">
                            <button
                                className="btn btn-primary mr-2"
                                data-toggle="modal"
                                data-target="#addProductModal"
                                id="addListingBtn"
                            >
                                Add Listing
                            </button>
                            <button
                                className="btn btn-outline-primary"
                                data-toggle="modal"
                                data-target="#editProfileModal"
                                id="editProfileBtn"
                            >
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
