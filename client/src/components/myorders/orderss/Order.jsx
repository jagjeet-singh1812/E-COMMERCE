import React from 'react';
import './Orders.css';

function Order(props) {
  return (
    <div className="order">
      <h2 className="order__title">Order #{props.orderId}</h2>
      <div className="order__details">
        <p className="order__detail"><strong>Created at:</strong> {props.createdAt}</p>
        <p className="order__detail"><strong>Products:</strong> {props.products.map(product => product.name).join(', ')}</p>
        <p className="order__detail"><strong>Published at:</strong> {props.publishedAt}</p>
        <p className="order__detail"><strong>Updated at:</strong> {props.updatedAt}</p>
      </div>
    </div>
  );
}

export default Order;
