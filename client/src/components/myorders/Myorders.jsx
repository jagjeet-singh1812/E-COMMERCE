import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "../../utils/api";
import "./m.css";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchDataFromApi("/api/orders?populate=*").then((data) => {
      const extractedOrders = data.data.map((order) => {
        const { id, attributes } = order;
        const { products } = attributes;
        return { id, products };
      });
      setOrders(extractedOrders);
      console.log(orders);
    });
  }, []);
let x=1;
  return (
    <div className="orders-container">
      <h1 className="orders-title">Order History</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-box">
          <div className="order-header">
            <h2>Order #{x++}</h2>
          </div>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>status</th>
                <th>Delivery expected :</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.attributes.title}</td>
                  <td>{product.attributes.desc}</td>
                  <td>₹{product.attributes.price.toFixed(2)}</td>
                  <td>{product.attributes.quantity}</td>
                  <td>₹{(product.attributes.price* product.attributes.quantity).toFixed(2)}</td>
                  <td
                className={`status ${
                  order.status === "completed" ? "green" : "red"
                }`}
                >
                {order.status}
              </td>
              <td>{product.attributes.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="order-total">
            <h3>Total: ₹{order.products.reduce((acc, cur) => acc + (cur.attributes.price*cur.attributes.quantity ), 0).toFixed(2)}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrdersPage;
