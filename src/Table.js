import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledEngineProvider } from "@mui/material/styles";
import "./styles.css";

export default function BasicTable({ apiData, currCard, setCurrCard }) {
  function makeRow(item, index, handleRowClick) {
    return (
      <TableRow
        className={"tableRow" + (index % 2 ? " odd" : " even")}
        onClick={(event) => handleRowClick(event, index)}
        key={item.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell
          className="tableCell"
          component="th"
          scope="row"
          align="left"
        >
          {item.name}
        </TableCell>
        <TableCell className="tableCell" align="right">
          {item.salesBacklog.toFixed(1)}
        </TableCell>
        <TableCell className="tableCell" align="right">
          {item.buyPrice.toFixed(1)}
        </TableCell>
        <TableCell className="tableCell" align="right">
          {item.sellPrice.toFixed(1)}
        </TableCell>
        <TableCell className="tableCell" align="right">
          {item.profitPerItem.toFixed(1)}
        </TableCell>
        <TableCell className="tableCell" align="right">
          {item.limit}
        </TableCell>
        <TableCell className="tableCell" align="right">
          {(item.limit * item.profitPerItem).toFixed(1)}
        </TableCell>
      </TableRow>
    );
  }

  const data = apiData;

  if (data == null) {
    return <div>Loading...</div>;
  }
  const handleRowClick = (event, index) => {
    if (currCard === null) {
      setCurrCard(index);
    } else {
      setCurrCard(null);
    }
  };

  return (
    <StyledEngineProvider injectFirst>
      <TableContainer className="HPtable" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="tableRow odd">
              <TableCell className="tableCell" align="left">
                Item Name
              </TableCell>
              <TableCell className="tableCell" align="right">
                Sales Backlog
              </TableCell>
              <TableCell className="tableCell" align="right">
                Buy Order at
              </TableCell>
              <TableCell className="tableCell" align="right">
                Sell Offer at
              </TableCell>
              <TableCell className="tableCell" align="right">
                Profit per Item
              </TableCell>
              <TableCell className="tableCell" align="right">
                Quantity
              </TableCell>
              <TableCell className="tableCell" align="right">
                Total Profit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => {
              return makeRow(item, index, handleRowClick);
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledEngineProvider>
  );
}
