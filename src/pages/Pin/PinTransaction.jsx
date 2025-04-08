import React, { useEffect } from "react";
import "../../stylesheets/Claims.css";
import { useTransaction } from "../../hooks/transaction";

const PinTransaction = () => {
  const {getAllTransactions, data, isLoading } = useTransaction()

  // const data = [
  //   {
  //     name: "Jane Smith",
  //     reference: "REF/0002",
  //     policy_number: "MOT/PM/02/23/SA/23456",
  //     amount: "₦ 150,000",
  //     status: "Pending",
  //     updated_at: "2021-10-01T12:30:00Z"
  //   },
  //   {
  //     name: "Mike Johnson",
  //     reference: "REF/0003",
  //     policy_number: "MOT/PM/03/23/SA/78901",
  //     amount: "₦ 200,000",
  //     status: "Failed",
  //     updated_at: "2021-11-12T14:45:00Z"
  //   },
  //   {
  //     name: "Emily Davis",
  //     reference: "REF/0004",
  //     policy_number: "MOT/PM/04/23/SA/56789",
  //     amount: "₦ 180,000",
  //     status: "Successful",
  //     updated_at: "2021-12-05T09:15:00Z"
  //   },
  //   {
  //     name: "Chris Brown",
  //     reference: "REF/0005",
  //     policy_number: "MOT/PM/05/23/SA/34567",
  //     amount: "₦ 220,000",
  //     status: "Pending",
  //     updated_at: "2022-01-10T11:00:00Z"
  //   },
  //   {
  //     name: "Sophia Wilson",
  //     reference: "REF/0006",
  //     policy_number: "MOT/PM/06/23/SA/12345",
  //     amount: "₦ 130,000",
  //     status: "Successful",
  //     updated_at: "2022-02-15T10:30:00Z"
  //   },
  //   {
  //     name: "Andrew White",
  //     reference: "REF/0007",
  //     policy_number: "MOT/PM/07/23/SA/65432",
  //     amount: "₦ 145,000",
  //     status: "Failed",
  //     updated_at: "2022-03-20T08:45:00Z"
  //   },
  //   {
  //     name: "Olivia Green",
  //     reference: "REF/0008",
  //     policy_number: "MOT/PM/08/23/SA/45678",
  //     amount: "₦ 190,000",
  //     status: "Pending",
  //     updated_at: "2022-04-05T14:30:00Z"
  //   },
  //   {
  //     name: "Ethan Brown",
  //     reference: "REF/0009",
  //     policy_number: "MOT/PM/09/23/SA/12367",
  //     amount: "₦ 170,000",
  //     status: "Successful",
  //     updated_at: "2022-05-01T09:20:00Z"
  //   },
  //   {
  //     name: "Isabella Taylor",
  //     reference: "REF/0010",
  //     policy_number: "MOT/PM/10/23/SA/78910",
  //     amount: "₦ 210,000",
  //     status: "Failed",
  //     updated_at: "2022-06-15T13:00:00Z"
  //   },
  //   {
  //     name: "Liam Harris",
  //     reference: "REF/0011",
  //     policy_number: "MOT/PM/11/23/SA/54321",
  //     amount: "₦ 250,000",
  //     status: "Pending",
  //     updated_at: "2022-07-22T11:10:00Z"
  //   },
  //   {
  //     name: "Emma Clark",
  //     reference: "REF/0012",
  //     policy_number: "MOT/PM/12/23/SA/76543",
  //     amount: "₦ 160,000",
  //     status: "Successful",
  //     updated_at: "2022-08-03T10:05:00Z"
  //   },
  //   {
  //     name: "Noah Scott",
  //     reference: "REF/0013",
  //     policy_number: "MOT/PM/13/23/SA/87654",
  //     amount: "₦ 300,000",
  //     status: "Failed",
  //     updated_at: "2022-09-18T16:20:00Z"
  //   },
  //   {
  //     name: "Ava Lee",
  //     reference: "REF/0014",
  //     policy_number: "MOT/PM/14/23/SA/98765",
  //     amount: "₦ 140,000",
  //     status: "Pending",
  //     updated_at: "2022-10-12T09:30:00Z"
  //   },
  //   {
  //     name: "James King",
  //     reference: "REF/0015",
  //     policy_number: "MOT/PM/15/23/SA/65478",
  //     amount: "₦ 180,000",
  //     status: "Successful",
  //     updated_at: "2022-11-06T08:50:00Z"
  //   },
  //   {
  //     name: "Charlotte Perez",
  //     reference: "REF/0016",
  //     policy_number: "MOT/PM/16/23/SA/54398",
  //     amount: "₦ 120,000",
  //     status: "Failed",
  //     updated_at: "2022-12-14T10:15:00Z"
  //   },
  //   {
  //     name: "William Lewis",
  //     reference: "REF/0017",
  //     policy_number: "MOT/PM/17/23/SA/43219",
  //     amount: "₦ 175,000",
  //     status: "Pending",
  //     updated_at: "2023-01-10T12:40:00Z"
  //   },
  //   {
  //     name: "Mia Walker",
  //     reference: "REF/0018",
  //     policy_number: "MOT/PM/18/23/SA/32109",
  //     amount: "₦ 195,000",
  //     status: "Successful",
  //     updated_at: "2023-02-20T14:25:00Z"
  //   },
  //   {
  //     name: "Lucas Hall",
  //     reference: "REF/0019",
  //     policy_number: "MOT/PM/19/23/SA/21098",
  //     amount: "₦ 220,000",
  //     status: "Failed",
  //     updated_at: "2023-03-15T09:35:00Z"
  //   },
  //   {
  //     name: "Amelia Martinez",
  //     reference: "REF/0020",
  //     policy_number: "MOT/PM/20/23/SA/10987",
  //     amount: "₦ 165,000",
  //     status: "Pending",
  //     updated_at: "2023-04-10T11:50:00Z"
  //   }
  // ];

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

  const getStatusClass = (status) => {
    switch (status) {
      case "Successful":
        return "text-green-500 font-bold";
      case "Pending":
        return "text-orange-500 font-semibold";
      case "Failed":
        return "text-red-500 font-bold";
      default:
        return "text-gray-500";
    }
  };


  useEffect(() => {
    getAllTransactions()
  }, [])
  return (
    <div className="general-claims">
      <div className="myclaims">
        <h4>Transaction History</h4>
      </div>

      {
        isLoading ?
            <table className="transaction-table w-full">
              <thead>
              <tr>
                {[...Array(5)].map((_, i) => (
                    <th key={i}>
                      <div className="h-4 w-20 bg-gray-300 rounded"></div>
                    </th>
                ))}
              </tr>
              </thead>
              <tbody>
              {Array.from({length: 5}).map((_, i) => (
                  <tr key={i}>
                    <td className="p-3" colSpan={5}>
                      <div className="h-4 w-full bg-gray-200 rounded "></div>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
            :
            <div className="mt-5">
              <table className="transaction-table mt-4">
                <thead>
                <tr>
                  <th className="ref">Index</th>
                  <th className="ref">Reference No</th>
                  <th className="ref">Details</th>
                  <th className="ref">Amount</th>
                  {/*<th className="ref">Status</th>*/}
                  <th className="ref">Date</th>
                </tr>
                </thead>
                {data.length === 0 ? <tbody>
                    <tr>
                      <th className="text-center p-5" colSpan={6}>
                        No Data Found
                      </th>
                    </tr>
                    </tbody> :
                    <tbody>
                    {
                      data.map((data, index) => {
                        return (
                            <tr key={index}>
                              <th className="ref">{index + 1}</th>
                              <th>{data.trnx}</th>
                              <th>{data.details}</th>
                              <th>{data.amount}</th>
                              {/*<th className={getStatusClass(data.status)}>{data.status}</th>*/}
                              <th>{convertDate(data.updated_at)}</th>
                            </tr>
                        )
                      })
                    }

                    </tbody>
                }
              </table>
            </div>
      }
    </div>
  );
};

export default PinTransaction;
