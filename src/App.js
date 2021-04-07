import React, { useState, useEffect } from "react";
import "./App.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import InfoBox from "./InfoBox";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
          console.log("hi", countries);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" onChange={onCountryChange} value={country}>
            <MenuItem value="worldwide">WordWide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="app_stats">
        <InfoBox title="Coronavirus Cases" cases="123" total="33536" />
        <InfoBox title="Recovered" cases="123" total="33536" />
        <InfoBox title="Deaths" cases="123" total="33536" />
      </div>
      {/* Header */}
      {/* Title + select input dropdown field */}

      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;
