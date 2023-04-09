import { useEffect, useState } from "react";
import { prepData } from "./BazaarVars";
import axios from "axios";

export default function useBazaar(props) {
  const [bazaarData, setBazaarData] = useState(null);

  useEffect(() => {
    async function fetchBazaarData() {
      try {
        const response = await axios.get(
          "https://api.hypixel.net/skyblock/bazaar"
        );
        if (response.status === 200 && response.data.success) {
          setBazaarData(prepData(response.data.products));
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchBazaarData();
    console.log("here");
  }, [props]);

  if (!bazaarData) {
    return null;
  }
  return bazaarData.sort((a, b) => {
    return a.salesBacklog > b.salesBacklog;
  });
}
