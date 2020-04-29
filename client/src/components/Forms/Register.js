import React from "react";

export const Register = () => {
    return (
        <div className="container h-100">
            <div className="row justify-content-center align-items-center">
                <div className="col-10 col-md-8 col-lg-6">
                    <form className="form-example my-5">
                        <h1>Sign Up</h1>
                        <p>
                            Sign up today and get a free $100 credit for your
                            account!
                        </p>

                        <div className="form-group mt-5">
                            <label htmlFor="registerUsername">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="registerUsername"
                            />
                        </div>
                        <div className="row">
                            <div className="col-6 form-group">
                                <label htmlFor="registerFirstName">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="registerFirstName"
                                />
                            </div>
                            <div className="col-6 form-group">
                                <label htmlFor="registerLastName">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="registerLastName"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerLocation">City</label>
                            <select
                                className="form-control"
                                id="registerLocation"
                            >
                                <option value="">Please select City</option>
                                <option value="Auckland">Auckland</option>
                                <option value="Blenheim">Blenheim</option>
                                <option value="Christchurch">
                                    Christchurch
                                </option>
                                <option value="Dunedin">Dunedin</option>
                                <option value="Gisborne">Gisborne</option>
                                <option value="Gore">Gore</option>
                                <option value="Hamilton">Hamilton</option>
                                <option value="Hastings">Hastings</option>
                                <option value="Invercargill">
                                    Invercargill
                                </option>
                                <option value="Masterton">Masterton</option>
                                <option value="Napier">Napier</option>
                                <option value="Nelson">Nelson</option>
                                <option value="Northland">Northland</option>
                                <option value="New Plymouth">
                                    New Plymouth
                                </option>
                                <option value="Oamaru">Oamaru</option>
                                <option value="Palmerson North">
                                    Palmerson North
                                </option>
                                <option value="Queenstown">Queenstown</option>
                                <option value="Rotorua">Rotorua</option>
                                <option value="Taupo">Taupo</option>
                                <option value="Tauranga">Tauranga</option>
                                <option value="Timaru">Timaru</option>
                                <option value="Wellington">Wellington</option>
                                <option value="Whangarei">Whangarei</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerEmail">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="registerEmail"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="registerPassword">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="registerPassword"
                            />
                        </div>

                        <button type="button" className="btn btn-primary mt-3">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
