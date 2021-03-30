// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "./components/Login";
// import Signup from "./components/Signup";
// import {
//   gql,
//   useQuery,
//   ApolloProvider,
//   ApolloClient,
//   InMemoryCache,
// } from "@apollo/client";
// import { TokenContext } from "./context/tokenContext";
// import { useContext, useState } from "react";

// const QUERY_ME = gql`
//   {
//     me
//   }
// `;

// function ApoloClientToken(token) {
//   const client = new ApolloClient({
//     uri: "http://localhost:3000/?token=" + token,
//     cache: new InMemoryCache(),
//   });

//   return client;
// }

// function App() {
//   const [token, setToken] = useState(localStorage.getItem("token"));

//   return (
//     <TokenContext.Provider value={{ token, setToken }}>
//       <div className="App">
//         <ApolloProvider client={ApoloClientToken(token)}>
//           {token ? <RenderMe /> : <RenderUnauth />}
//         </ApolloProvider>
//       </div>
//     </TokenContext.Provider>
//   );
// }

// function RenderMe() {
//   const context = useContext(TokenContext);
//   const { data, loading } = useQuery(QUERY_ME, {
//     onCompleted: (res) => {},
//   });

//   console.log(context);

//   if (loading || data === undefined) {
//     return <div>Loading...</div>;
//   }

//   if (data.me) {
//     return (
//       <div>
//         {data.me.id}{" "}
//         <button
//           onClick={() => {
//             localStorage.removeItem("token");
//             context.setToken(null);
//           }}
//         >
//           logout
//         </button>{" "}
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <Switch>
//         <Route path="/" component={Login} exact />
//         <Route path="/signup" component={Signup} />
//       </Switch>
//     </Router>
//   );
// }

// function RenderUnauth() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" component={Login} exact />
//         <Route path="/signup" component={Signup} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import "./App.css";

import { FormControl, MenuItem, Select } from "@material-ui/core";

function App() {
  const [countries, setCountries] = useState(["USA", "UK", "CAMBODIA"]);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) =>
        response.json()
      );
    };
  }, []);

  return (
    <div className="app">
      <div className="app_header">
        <h1>COVID-19 TRACKER</h1>

        <FormControl className="app_dropdown">
          <Select variant="outlined" value="abc">
            {countries.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Header */}
      {/* Title + select input dropdown field */}

      {/* Info box */}
      {/* Info box */}
      {/* Info box */}

      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;
