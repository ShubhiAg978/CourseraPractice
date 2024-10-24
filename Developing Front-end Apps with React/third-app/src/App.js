import axios from "axios";
import React, { useState, useEffect } from "react";

const App = (props) => {
  const [APIlist, setAPIlist] = useState([]);

  useEffect(() => {
    let url = "https://catfact.ninja/facts";
    axios({
      method: "get",
      url: url,
      responseType: "json",
    })
      .then((resp) => {
        let listOfEntries = resp.data.data;
        let entryDetails = listOfEntries.map((entryDetail, index) => (
          <tr key={index}>
            <td style={{ color: "red", border: "1px solid black" }}>
              {entryDetail.fact}
            </td>
          </tr>
        ));
        setAPIlist(entryDetails);
      })
      .catch((err) => {
        console.log(err.toString());
      });
  }, []);

  const colorStyle = { color: props.color, fontSize: props.size };

  return (
    <div>
      <div style={colorStyle}>
        <table>
          <tbody>
            {APIlist.length > 0 ? (
              APIlist
            ) : (
              <tr>
                <td>No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
