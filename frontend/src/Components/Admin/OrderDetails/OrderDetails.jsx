import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingBox from "../../Users/LoadingBox/loadingBox";
import MessageBox from "../../Users/MessageBox/messageBox";



function OrderDetails() {

    const navigate = useNavigate()

    const [orders, setOrders] = useState(false)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

  const orders_list = async() => {
    try{
        const url = "/api/orders/admin";
        const data = await axios.post(url)
        setOrders(data.data)
    }catch(error){
        console.log(error.message);
        setError(error.message)
    }  
  };


  useEffect(() => {
    orders_list()
  }, [])


  useEffect(() => {
    if(orders){
        setLoading(false)
    }
    console.log(orders, loading, error);
  }, [])

    

  

  return (
    <div>
      <div className="orderHistorySection">
        {loading ? (
                <LoadingBox></LoadingBox>
            ) : error ? (
                <MessageBox>{error}</MessageBox>
            ) : (
        <div className="orderHistoryContainer">
          <div className="orderHistoryContainerSection">
            <div className="orderHistoryAccountTextDiv">
              <p className="orderHistoryAccountText">
                <span
                  className="orderHistoryYourAccountText"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/')
                  }}
                >
                  Order Activities{" "}
                </span>
                {"  "} {"  ›"}{" "}
                <span className="orderHistoryYourOrdersText"> Your Orders</span>
              </p>
            </div>
            <div className="orderHistoryTitleDiv">
              <p className="orderHistoryTitle">Your Orders</p>
            </div>
            <hr />
            <div className="orderHistoryOrderNumberDiv">
              <p className="orderHistoryOrderNumber">
                {" "}
                {orders && orders.length}{" "}
                {orders && orders.length > 1 ? " orders" : " order"}{" "}
                <span className="orderHistoryOrderNumberText">placed</span>
              </p>
            </div>
            {orders.map((order) => (
              <div className="orderHistoryProductContainer" key={order._id}>
                <div className="orderHistoryProductHeadContainer">
                  <div className="orderHistoryProductHeadDiv">
                    <div className="orderHistoryOrderPlacedContainer">
                      <br />
                      <div className="orderHistoryOrderPlacedDiv">
                        <p className="orderHistoryOrderPlacedText">
                          ORDER PLACED
                        </p>
                      </div>
                      <div className="orderHistoryOrderDateDiv">
                        <p className="orderHistoryOrderDateText">
                          {order.updatedAt}
                        </p>
                      </div>
                      <br />
                    </div>
                    <div className="orderHistoryOrderTotalContainer">
                      <br />
                      <div className="orderHistoryOrderTotalDiv">
                        <p className="orderHistoryOrderTotalText">TOTAL</p>
                      </div>
                      <div className="orderHistoryOrderPriceDiv">
                        <p className="orderHistoryOrderPriceText">
                          ${order.totalPrice}
                        </p>
                      </div>
                      <br />
                    </div>
                    <div className="orderHistoryOrderShipContainer">
                      <br />
                      <div className="orderHistoryOrderShipDiv">
                        <p className="orderHistoryOrderShipText">SHIP TO</p>
                      </div>
                      <div className="orderHistoryOrderShippingAddressDiv">
                        <p className="orderHistoryOrderShippingAddressText">
                          {order.shippingAddress.name}{" "}
                          <i class="fas fa-angle-down"></i>
                          <ul className="dropdown-content">
                            <div className="orderShippingDropDownSection">
                              <div className="orderShippingDropDownDiv">
                                <p className="orderShippingDropDownAddressName">
                                  {order.shippingAddress.name}
                                </p>
                                <p className="orderShippingDropDownAddressAddress">
                                  {order.shippingAddress.address}
                                </p>
                                <p className="orderShippingDropDownAddressPlace">
                                  {order.shippingAddress.place}
                                </p>
                                <p className="orderShippingDropDownAddress">
                                  <span className="orderShippingDropDownAddressCity">
                                    {order.shippingAddress.city},{" "}
                                  </span>
                                  <span className="orderShippingDropDownAddressState">
                                    {order.shippingAddress.state}{" "}
                                  </span>
                                  <span className="orderShippingDropDownAddressPinCode">
                                    {order.shippingAddress.pinCode}
                                  </span>
                                </p>
                                <p className="orderShippingDropDownAddressCountry">
                                  {order.shippingAddress.country}
                                </p>
                                <p className="orderShippingDropDownPhone">
                                  Phone: {order.shippingAddress.mobile}
                                </p>
                              </div>
                            </div>
                          </ul>
                        </p>
                      </div>
                      <br />
                    </div>
                    <div className="orderHistoryOrderIdContainer">
                      <br />
                      <div className="orderHistoryOrderIdDiv">
                        <p className="orderHistoryOrderIdText">
                          ORDER # {order._id}
                        </p>
                      </div>
                      <div className="orderHistoryOrderDetailsDiv">
                        <p className="orderHistoryOrderDetailsText">
                          <span
                            className="orderHistoryOrderViewDetailsText"
                            onClick={(e) => {
                              e.preventDefault();
                              navigate(`/order/${order._id}`)
                            }}
                          >
                            View order details{" "}
                          </span>{" "}
                          |{" "}
                          <span className="orderHistoryOrderInvoiceText">
                            {" "}
                            Invoice
                          </span>
                        </p>
                      </div>
                      <br />
                    </div>
                  </div>
                </div>

                <div className="orderHistoryProductContentContainer">
                  <br />
                  <div className="orderHistoryProductContentDiv">
                    <div className="orderHistoryProductContentOrderDiv">
                      <div className="orderHistoryProductOrderStatusDiv">
                        <p className="orderHistoryProductOrderStatus">
                          {order.isPaid ? "Shipped" : "Complete your payment"}
                        </p>
                      </div>
                      <div className="orderHistoryProductOrderStatusTextDiv">
                        <p className="orderHistoryProductOrderStatusText">
                          {order.isPaid
                            ? "Your product has been shipped."
                            : "Complete your transaction"}
                        </p>
                      </div>
                      {order.orderItems.map((product) => (
                        <div key={product._id}>
                          <div className="orderHistoryProductImageDiv">
                            <img
                              className="orderHistoryProductImage"
                              src={product.image}
                              alt=""
                            />
                          </div>
                          <div className="orderHistoryProductNameDiv">
                            <p className="orderHistoryProductName">
                              {product.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
    </div>
  );
}

export default OrderDetails;
