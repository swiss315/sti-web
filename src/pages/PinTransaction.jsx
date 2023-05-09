import React, { useEffect } from "react";
import "../stylesheets/Claims.css";
import { useTransaction } from "../hooks/transactoion";

const PinTransaction = () => {
  const { transaction, data } = useTransaction()

  function convertDate(date) {
    const fullyear = new Date(date);
    let year = fullyear.getFullYear();
    let month = fullyear.getMonth() + 1;
    let day = fullyear.getDate();
    day = day.toString().padStart(2, "0");

    month = month.toString().padStart(2, "0");
    const formattedToday = day + "/" + month + "/" + year;
    return formattedToday;
  }
  useEffect(() => {
    transaction()
  }, [transaction])
  return (
    <div className="general-claims">
      <div className="myclaims">
        <h4>Transaction History</h4>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th className="ref">Reference No</th>
            <th className="ref">Policy Number</th>
            <th className="ref">Amount</th>
            <th className="ref">Status</th>
            <th className="ref">Date</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((data, index) => {
              return (
                <tr>
                  <th>{data.reference}</th>
                  <th>{data.policy_number}</th>
                  <th>{data.amount}</th>
                  <th>{data.status}</th>
                  <th>{convertDate(data.updated_at)}</th>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
    </div>
  );
};

export default PinTransaction;
