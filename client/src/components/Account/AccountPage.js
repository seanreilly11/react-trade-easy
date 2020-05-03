import React, { useEffect, useState } from "react";
import axios from "axios";
import { AccountDetails } from "./AccountDetails";
import { AccountProductsList } from "./AccountProductsList";

export const AccountPage = ({ match }) => {
    const [user, setUser] = useState({});
    const [cardGroup, setCardGroup] = useState("selling");

    const handleGroup = (group) => {
        setCardGroup(group);
    };

    const getUser = async (id) => {
        const response = await axios.get(`/users/u=${id}`);
        setUser(response.data);
    };

    useEffect(() => {
        getUser(match.params.id);
    }, []);

    return (
        <div className="container h-100 my-5">
            <AccountDetails user={user} handleGroup={handleGroup} />
            <AccountProductsList cardGroup={cardGroup} />
        </div>
    );
};
