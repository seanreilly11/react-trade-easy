import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { Card } from "./Card";
import axios from "axios";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: {} };
    }

    componentDidMount() {
        this.props.fetchProducts();
        const getUser = async (id) => {
            const response = await axios.get(`/users/u=${id}`);
            this.setState({ user: response.data });
        };
        getUser(sessionStorage.getItem("userID"));
    }

    render() {
        return (
            <div className="row col-12 my-5">
                {this.props.products.map((product) => (
                    <Card
                        key={product._id}
                        product={product}
                        user={this.state.user}
                    />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items,
});

export default connect(mapStateToProps, { fetchProducts })(CardList);
