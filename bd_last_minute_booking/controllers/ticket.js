// config/ticketSearch.js
const axios = require("axios");
const Ticket = require("../models/ticketschema");
const { response } = require("express");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
exports.pnrcheck = async (req, res) => {
  const pnr_no = req.query.pnr_no;
  const options = {
    method: "GET",
    url: `https://irctc-indian-railway-pnr-status.p.rapidapi.com/getPNRStatus/${pnr_no}`,
    headers: {
      "x-rapidapi-key": "2bc8fb081cmsha484c631ed2f557p12801ajsn0b0c411a5047",
      "x-rapidapi-host": "irctc-indian-railway-pnr-status.p.rapidapi.com",
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
  const train_no = req.query.train_number;
  const avail = await Ticket.find({ train_no: train_no });
  if (avail.length > 0) {
    console.log(avail);
    return res.status(200).json({ avail });
  }
  return res
    .status(400)
    .json({ message: "ticket eith train_number not available" });
};

exports.save_pnr = async (req, res) => {
  const pnrNo = req.body.pnrNo;
  const upi_id = req.body.upi_id;
  const startdate = req.body.startdate;
  const journeyclass = req.body.journeyclass;
  const price = req.body.price;
  const sourceStation = req.body.sourceStation;
  const reservationUpto = req.body.reservationUpto;
  const train_no = req.body.train_no;
  try {
    const avail = await Ticket.findOne({ pnrnumber: pnrNo });
    if (avail) {
      return res
        .status(400)
        .json({
          message:
            "train ticket with entered pnr number is already on database",
        });
    }
    const ticket = new Ticket({
      pnrnumber: pnrNo,
      upi_id: upi_id,
      startdate: startdate,
      journeyclass: journeyclass,
      price: price,
      sourceStation: sourceStation,
      reservationUpto: reservationUpto,
      train_no: train_no,
    });
    console.log(ticket);
    await ticket.save();
    console.log("entry successfully created");
    return res.status(200).json({ message: "entry successfully saved" });
  } catch (error) {
    console.log("error while fetching");
    console.log(error.message);
  }
};

exports.search_path = async (req, res) => {
  try {
    console.log("request received");
    const reservationUpto = req.query.reservationUpto;
    const sourceStation = req.query.sourceStation;
    console.log(reservationUpto);
    console.log(sourceStation);
    const avail = await Ticket.find({
      reservationUpto: reservationUpto,
      sourceStation: sourceStation,
    });
    if (avail.length > 0) {
      console.log(avail);
      return res.status(200).json({ avail });
    }
    return res.status(400).json({ message: "ticker not available" });
  } catch (error) {
    console.log("error here");
    console.log(error.message);
  }
};

exports.make_payment = async (req, res) => {
  try {
    const price = Math.round(req.body.price * 100);
    const _id = req.body._id;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Premium Attendance Tracker Plan",
            },
            unit_amount: price, // ₹499.00 in paise
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://www.google.com/",
      cancel_url: "https://www.google.com/",
    });
    res.status(200).json({ message: "payment successfull" });
  } catch (error) {
    console.log("error here");
    console.log(error.message);
  }
};

exports.delete_ticket = async (req, res) => {
  const _id = req.query._id;
  console.log(_id);
  const isDeleted = await Ticket.findByIdAndDelete(_id);
  console.log(isDeleted);
  console.log("reached here");
  return res.status(200).json({ message: "entry successfully deleted" });
};
