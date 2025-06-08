// config/ticketSearch.js
const axios = require("axios");

exports.pnrcheck = async (req, res) => {
  const pnr_no = req.query.pnr_no;

  const options = {
    method: "GET",
    url: `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr_no}`,
  headers: {
    'x-rapidapi-key': 'd913d39758msh385ef88984ec5afp1b559bjsn67aa5313bd03',
    'x-rapidapi-host': 'irctc-indian-railway-pnr-status.p.rapidapi.com'
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch PNR details" });
  }
};

exports.train_no = async (req, res) => {
  console.log("request received");
  const train_no = req.query.trainNumber;
  console.log(train_no);
  return res.json();
};
