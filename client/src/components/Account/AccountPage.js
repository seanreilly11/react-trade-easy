import React, { useEffect, useState } from "react";
import axios from "axios";
import { AccountDetails } from "./AccountDetails";
import { AccountProducts } from "./AccountProducts";

export const AccountPage = ({ match }) => {
    const [user, setUser] = useState({});
    const [cards, setCards] = useState("selling");

    const handleCard = (card) => {
        setCards(card);
    };

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
            <AccountDetails user={user} handleCard={handleCard} />
            <AccountProducts cards={cards} />
        </div>
    );
};
