import { useEffect, useState } from "react";
import "./styles.css";
import BasicTable from "./Table";
import InfoCard from "./InfoCard";
import HPlogo from "./assets/hypixel_logo.png";
import useBazaar from "./useBazaar";

// Default values
var maxOutlay = 1000000;
var maxOffers = 1;
var maxBacklog = 7;
var includeEnchantments = false;
var sortBySalesBacklog = false;
var sortByProfitPerItem = false;
var sortByTotalProfit = true;

export default function App() {
  const [currCard, setCurrCard] = useState(null);

  const data = useBazaar();

  function chooseCard(offset) {
    if (offset === 0) {
      setCurrCard(null);
      return;
    }
    let index = currCard + offset;
    if (index >= data.length) {
      index = 0;
    } else if (index < 0) {
      index = data.length - 1;
    }
    setCurrCard(index);
  }

  //getting arrow key input for navigation
  document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
      return;
    } else if (e.keyCode === 40) {
      return;
    } else if (e.keyCode === 37) {
      chooseCard(-1);
    } else if (e.keyCode === 39) {
      chooseCard(1);
    }
  };

  let propData = null;
  if (currCard !== null) {
    propData = data[currCard];
  }

  return (
    <div className="App">
      <InfoCard data={propData} chooseCard={chooseCard} />
      <div className={"mainPage" + (currCard != null ? " blur" : "")}>
        <img
          style={{ marginTop: "10px", marginBottom: "0px", height: "100px" }}
          alt="PILYTIX"
          src={HPlogo}
        />
        <h4 style={{ marginTop: "0px", marginBottom: "10px" }}>
          {" "}
          Bazaar Flip Calculator
        </h4>
        <center>
          <BasicTable
            apiData={data}
            currCard={currCard}
            setCurrCard={setCurrCard}
          />
        </center>
      </div>
    </div>
  );
}
