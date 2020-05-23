import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ProcessPaymenntActon,
  PaymentComplete,
} from "../stateManagement/actions/paymentActions";
import { Redirect } from "react-router-dom";
import { TableView } from "./layouts/Checkout/TableView";
class ProcessPayment extends Component {
  state = { isAuthised: true, bill: null };

  componentDidMount() {
    if (this.props.location.state) {
      let { requiredData } = this.props.location.state;
      if (requiredData) {
        this.props.processPaymentAction(requiredData);
        this.setState((s) => ({ bill: requiredData }));
      }
    } else {
      this.setState((s) => ({ isAuthised: false }));
    }
  }

  componentWillUnmount() {
    this.props.paycomplete();
  }

  render() {
    let view = <h1>Processing payment</h1>;
    if (!this.state.isAuthised) {
      return <Redirect to="home"></Redirect>;
    }
    if (this.props.payment.error) {
      view = <h1>Error Processing Payment</h1>;
    } else if (this.props.payment.success) {
      view = (
        <div className="paymant-process">
          <h1>Order Placed Succesful.</h1>
          <hr />
          <div>Your items will be delivered in 2-3 business days. </div>
          <div className="bill">
            <div>TrackID:{this.props.payment.id}</div>
            <TableView data={this.state.bill} />
          </div>
        </div>
      );
    }

    return view;
  }
}

export default connect(
  (state) => ({
    payment: state.payment,
    session: state.session,
  }),
  {
    processPaymentAction: ProcessPaymenntActon,
    paycomplete: PaymentComplete,
  }
)(ProcessPayment);
