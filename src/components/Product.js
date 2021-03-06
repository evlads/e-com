import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../storage/context";
import PropTypes from "prop-types";

import "./Product.css";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3">
        <div className="card mb-3">
          <ProductConsumer>
            {value => (
                <div
                    className="img-container p-5"
                    onClick={() => value.handleDetail(id)}
                  >
                  <Link to="/details">
                    <img src={img} alt="product" className="card-img-top" />
                  </Link>
                  <button 
                      className="cart-btn" 
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }
                    }
                  >
                    {inCart ? (
                      <p className="mb-0">already in cart</p>
                    ) : (
                        <p className="mb-0">buy</p>
                      )}
                  </button>
                </div>
            )}            
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <span className="align-self-center mb-0">{title}</span>
            <span className="font-italic mb-0">${price}</span>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
