import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/productActions";
import { Card } from "./Card";

class CardList extends React.Component {
    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        return (
            <div className="row col-12 my-5">
                {this.props.products.map((product) => (
                    <Card key={product._id} product={product} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.products.items,
});

export default connect(mapStateToProps, { fetchProducts })(CardList);
