import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { StyledEngineProvider } from "@mui/material/styles";
import "react-circular-progressbar/dist/styles.css";
import { Overview, BuyOrders, SellOrders } from "./Tabs";
import "./styles.css";

import { useState } from "react";

export default function InfoCard({ data, chooseCard }) {
  const [tab, setTab] = useState("overview");
  //handles changing or closing of card information

  //will not display card if currCard is null
  if (data === null) {
    return;
  }

  return (
    <StyledEngineProvider injectFirst>
      <Card className="centerCard">
        <CardContent>
          <center>
            <div>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "1.5em"
                }}
                variant="h4"
                component="div"
              >
                {data.name}
              </Typography>
              <Typography sx={{ fontSize: "16px" }} variant="p" component="div">
                Buy: {data.buyPrice.toFixed(1)} | Sell:{" "}
                {data.sellPrice.toFixed(1)}
              </Typography>
            </div>
          </center>

          {/* Info section tabs and display */}
          <div className="tabSelector">
            <button
              className={"menuBtn" + (tab === "overview" ? " selected" : "")}
              onClick={() => setTab("overview")}
            >
              Overview
            </button>
            <button
              className={"menuBtn" + (tab === "buyorders" ? " selected" : "")}
              onClick={() => setTab("buyorders")}
            >
              Buy Orders
            </button>
            <button
              className={"menuBtn" + (tab === "sellorders" ? " selected" : "")}
              onClick={() => setTab("sellorders")}
            >
              Sell Orders
            </button>
          </div>

          {tab === "overview" && <Overview item={data} />}
          {tab === "buyorders" && <BuyOrders item={data} />}
          {tab === "sellorders" && <SellOrders item={data} />}

          {/* Info section tabs and display */}

          <div id="cardNav">
            <Button
              sx={{
                fontFamily: "Poppins",
                float: "left",
                width: "30%",
                color: "#131313",
                marginInline: "1.5%",
                "&:hover": {
                  backgroundColor: "rgba(256,256,256,0.2)"
                }
              }}
              onClick={() => {
                chooseCard(-1);
              }}
            >
              ← Prev
            </Button>
            <Button
              sx={{
                fontFamily: "Poppins",
                fontSize: "12px",
                verticalAlign: "center",
                float: "center",
                width: "30%",
                color: "#131313",
                marginInline: "1.5%",
                "&:hover": {
                  backgroundColor: "rgba(256,256,256,0.2)"
                }
              }}
              onClick={() => {
                chooseCard(0);
              }}
            >
              close
            </Button>
            <Button
              sx={{
                fontFamily: "Poppins",
                float: "right",
                width: "30%",
                color: "#131313",
                marginInline: "1.5%",
                "&:hover": {
                  backgroundColor: "rgba(256,256,256,0.2)"
                }
              }}
              onClick={() => {
                chooseCard(1);
              }}
            >
              Next →
            </Button>
          </div>
        </CardContent>
      </Card>
    </StyledEngineProvider>
  );
}
