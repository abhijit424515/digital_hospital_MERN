const asyncHandler = require("express-async-handler");
const PATIENT = require("../models/patient");

// GET request
// STATUS: DONE
// Send query as json object
const SEARCH = asyncHandler(async (req, res) => {
  const patients = await PATIENT.find(req.body, (err, obj) => {
    if (err) throw err;
  }).clone().catch((err) => { console.log(err) });
  res.status(200).json(patients);
});

// POST request
// send json file to append to database
const postReq = asyncHandler(async (req, res) => {
  if (!req.body) {
    res.status(400);
    throw new Error("Please write some data to append to the DB");
  }
  
  const patient = await PATIENT.insertMany(req.body,(err, obj) => {
    if (err) throw err;
  },{ new: true }).clone().catch((err) => { console.log(err) });
  res.status(200).json(patient);

  // yet to implement repeated count check
});

// PUT request
const putReq = asyncHandler(async (req, res) => {
  console.log(req.params);

  const patient = await PATIENT.findById(req.params.id);
  if (!patient) {
    res.status(400);
    throw new Error("Patient not found in the DB");
  }
  const updatedPatient = await PATIENT.findByIdAndUpdate(req.params.id, req.body, { new: true });

  res.status(200).json(updatedPatient);
});

// DEL request
// STATUS: DONE
// Send query as json object
const delReq = asyncHandler(async (req, res) => {
  if (JSON.stringify(req.body) == "{}") {
    res.status(400);
    throw new Error("Please write a query to delete records in the DB");
  }

  const patients = await PATIENT.deleteMany(req.body, (err, obj) => {
    if (err) throw err;
  },{ new: true }).clone().catch((err) => { console.log(err) });
  res.status(200).json(patients);
});

module.exports = {
  SEARCH,
  postReq,
  putReq,
  delReq,
};
