import Rating from "@mui/material/Rating";
import LinearProgress from "@mui/material/LinearProgress";
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Overview({ item }) {
  var percentProfit = (100 * (item.sellPrice - item.buyPrice)) / item.buyPrice;
  return (
    <>
      <center>
        <div style={{ padding: "15px" }}>
          <Divider sx={{ margin: "10px" }} />
          <Typography sx={{ fontSize: "15px" }} variant="p" component="div">
            Sales Backlog
          </Typography>
          <LinearProgress
            sx={{
              backgroundColor: "#272727ff",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#e54e4eff"
              },
              width: "70%"
            }}
            variant="determinate"
            value={item.salesBacklog * 100}
          />
          <Typography sx={{ fontSize: "12px" }} variant="p" component="div">
            {item.salesBacklog.toFixed(2) + " Days"}
          </Typography>
        </div>
        <Divider sx={{ margin: "5px" }} />
        <div></div>

        <div className="probCharts">
          <Typography
            sx={{ fontSize: "16px", marginBottom: "0px" }}
            variant="p"
            component="div"
          >
            Profits
          </Typography>
          <div className="chartContainer">
            <CircularProgressbarWithChildren
              value={percentProfit}
              styles={buildStyles({
                rotation: 0.25,
                pathTransitionDuration: 0.5,
                pathColor: "#fdc347",
                trailColor: "#272727ff"
              })}
            >
              {percentProfit.toFixed(1)}%
            </CircularProgressbarWithChildren>
            <div className="chartLabel">
              <Typography sx={{ fontFamily: "Poppins", fontSize: 12 }}>
                Percent Profit
              </Typography>
            </div>
          </div>

          <div className="chartContainer">
            <div className="chartLabel">
              <Typography sx={{ fontFamily: "Poppins", fontSize: 20 }}>
                {item.profitPerItem.toFixed(1)}
              </Typography>
              <Typography sx={{ fontFamily: "Poppins", fontSize: 12 }}>
                Profit Per Item
              </Typography>
              <Divider sx={{ margin: "10px" }} />
              <Typography sx={{ fontFamily: "Poppins", fontSize: 20 }}>
                {(item.profitPerItem * item.limit).toFixed(1)}
              </Typography>
              <Typography sx={{ fontFamily: "Poppins", fontSize: 12 }}>
                Total Profit
              </Typography>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
