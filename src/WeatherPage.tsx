import axios from "axios";
import { useEffect, useState } from "react";
import Header, { cordd } from "./components/Header";
import WeatherTable from "./components/WeatherTable";

const WeatherPage = () => {
    const [cordd, setCor] = useState<cordd | undefined>(undefined);
  const [weatherReports, setWeatherRepo] = useState([]);
  const [err, setErr] = useState(false);
  const [loader, setLoader] = useState(false);
  const fetchWeatherData = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${cordd?.lat}&lon=${cordd?.lon}&appid=1635890035cbba097fd5c26c8ea672a1`).then((res) => {
          setLoader(false);
        setWeatherRepo(res.data.list);
      }).catch((error) => {
        setWeatherRepo([]);
        setLoader(false);
        window.alert(error?.response?.data?.message);
        setErr(true);
      });
  };
  useEffect(() => {
    if (cordd !== undefined) {
      setLoader(true)
      fetchWeatherData();
    }
  }, [cordd]);
  return (
    <div>
      {" "}
      <header className="App-header">
        <Header handleCordd={setCor} setErr={setErr} loader={loader} setLoader={setLoader}/>
      </header>
      <div>
        {weatherReports && weatherReports.length > 0 && !err && (
          <WeatherTable data={weatherReports} />
        )}
      </div>
    </div>
  );
};
export default WeatherPage;