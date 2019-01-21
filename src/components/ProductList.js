import React, { Component, Fragment } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../storage/context";

class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {item => {
                  return item.products.map(
                    product => {
                      return <Product 
                          key={product.id} 
                          product={product}
                        />
                    }
                  )
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ProductList;
