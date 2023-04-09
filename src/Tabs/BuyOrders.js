import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React from "react";

function Order({ order, index }) {
  return (
    <TableRow
      className={"orderRow" + (index % 2 ? " odd" : " even")}
      key={index}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell className="orderCell" component="th" scope="row" align="left">
        {order.pricePerUnit}
      </TableCell>
      <TableCell className="orderCell" align="right">
        {order.amount}
      </TableCell>
      <TableCell className="orderCell" align="right">
        {order.orders}
      </TableCell>
    </TableRow>
  );
}

export default function BuyOrders({ item }) {
  return (
    <>
      <center>
        <Divider sx={{ margin: "10px" }} />
        <div className="orderInfoContainer">
          <Typography sx={{ fontSize: "15px" }} variant="p" component="div">
            Total Volume <br /> {item.buyVolume}
          </Typography>
        </div>
        <div className="orderInfoContainer">
          <Typography sx={{ fontSize: "15px" }} variant="p" component="div">
            Total Orders <br /> {item.buyOrders}
          </Typography>
        </div>
        <Divider sx={{ margin: "10px" }} />

        {/*table of orders*/}
        <div className="ordersContainer">
          <TableContainer className="ordertable" component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className="orderRow odd">
                  <TableCell className="tableCell" align="left">
                    Price
                  </TableCell>
                  <TableCell className="tableCell" align="right">
                    Amount
                  </TableCell>
                  <TableCell className="tableCell" align="right">
                    Orders
                  </TableCell>
                </TableRow>

                {item.buySummary.map((order, index) => {
                  return <Order order={order} index={index} />;
                })}
              </TableHead>
            </Table>
          </TableContainer>
        </div>
      </center>
    </>
  );
}
