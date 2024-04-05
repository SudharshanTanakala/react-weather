import React from "react";
import { List } from "./DataModels";
interface LayoutProps {
  data: List[]
}
const WeatherTable = (props: LayoutProps) => {
  return (
    <div className="table">
      {
        props.data.map((d: List, i) => (
          
            <table key={i} style={{margin: "10px"}}>
            <tr>
              <th colSpan={2} style={{background: "orange", color: "black"}}> Date: {d.dt_txt.split(" ")[0].split("-").reverse().join("/")}</th>
            </tr>
            <tr>
              <th colSpan={2} style={{background: "orange", color: "black"}}> Time: {d.dt_txt.split(" ")[1].substring(0, d.dt_txt.split(" ")[1].length -3)}</th>
            </tr>
            <tr style={{background: "grey", color: "black"}}>
              <th colSpan={2}>Temperature</th>
            </tr>
            <tr style={{background: "grey", color: "black"}}>
              <th>Min</th>
              <th>Max</th>
            </tr>
            <tr style={{background: "grey", color: "black"}}>
              <th>{(Number(d.main.temp_min) - 273.15 ).toFixed(1)}&deg;</th>
              <th>{(Number(d.main.temp_max) - 273.15 ).toFixed(1)}&deg;</th>
            </tr>
            <tr >
              <th>Pressure</th>
              <th>{d.main.pressure} hPa</th>
            </tr>
            <tr>
              <th>Humidity</th>
              <th>{d.main.humidity} %</th>
            </tr>
          </table>
          
        ))
      }
   
    </div>
  );
};
export default WeatherTable;
