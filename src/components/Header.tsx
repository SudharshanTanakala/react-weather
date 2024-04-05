import axios from "axios";
import { useState } from "react";
import '../App.css'
export interface cordd {
lon: string;
lat: string
}
export interface LayoutProps {
  handleCordd: Function;
  setErr: Function;
  loader: boolean;
  setLoader: Function;
}
const Header = (props: LayoutProps) => {
  const [city, setCity] = useState("");
  const handleChange = (e: any) => {
    
    setCity(e.target.value.trim());
  };
  const fetchCity = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1635890035cbba097fd5c26c8ea672a1`
      )
      .then((res) => {
        props.setLoader(false);
        if(res.data && res.data.coord) {
        props.handleCordd(res.data.coord);
        }
      }).catch((err) => {
        props.setLoader(false);
        window.alert(err?.response?.data?.message);
        props.setErr(true);
      });
  };
  const handleClick = () => {
    props.setLoader(true);
    fetchCity();
  };

  return (
    <>
      <div style={{ margin: 10 }}>
        <h1>Weather in your City</h1>
      </div>
      <div style={{ margin: "32px" }}>
        <input
          style={{ lineHeight: "40px", borderColor: "orange", borderRadius: 1 }}
          placeholder="City..."
          onChange={handleChange}
          value={city}
        />
        <button style={{ lineHeight: "30px", borderColor: "orange", borderRadius: 1 }} onClick={handleClick} disabled={city == "" || undefined ? true : false }>
          Search
        </button>
        
      </div>
      {props.loader && <div className="loader"/>}
    </>
  );
};
export default Header;
