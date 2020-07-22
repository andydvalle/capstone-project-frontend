//grabs the token held in browser's localStorage
const token = () => localStorage.getItem("token");

//standardizes headers for AUTH
const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token(),
  };
};

//sends login information to backend, auth#create
const login = (data) => {
  return fetch("http://localhost:3000/api/v1/auth", {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

//get fetch the current user after login
const getCurrentUser = () => {
  const URL = "http://localhost:3000/api/v1/current_user";
  return fetch(URL, {
    headers: headers(),
  }).then((resp) => {
    return resp.json();
  });
};

// //GET fetch all users
// const getAllUsers = () => {
//     const URL = 'http://localhost:3000/api/v1/users'
//     return fetch(URL)
//     .then(resp => resp.json())
// }

// GET fetch all patients
const fetchPatients = () => {
  const URL = "http://localhost:3000/api/v1/patients";
  return fetch(URL, { headers: headers() }).then((resp) => resp.json());
};

// POST fetch patient/profile
const postPatient = (data) => {
  const URL = "http://localhost:3000/api/v1/patients";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

// DELETE fetch patient/profile
const deletePatient = (patientId) => {
  const URL = `http://localhost:3000/api/v1/patients/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

// GET fetch all appointments
const fetchAppointments = () => {
  const URL = "http://localhost:3000/api/v1/appointments";
  return fetch(URL).then((resp) => resp.json());
};

// POST fetch appointment
const postAppointment = (data) => {
  const URL = "http://localhost:3000/api/v1/appointments";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

// GET fetch all medications
const fetchMedications = () => {
  const URL = "http://localhost:3000/api/v1/medications";
  return fetch(URL).then((resp) => resp.json());
};

// POST fetch medication
const postMedication = (data) => {
  const URL = "http://localhost:3000/api/v1/medications";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};
// GET fetch all conditions
const fetchConditions = () => {
  const URL = "http://localhost:3000/api/v1/conditions";
  return fetch(URL).then((resp) => resp.json());
};

// POST fetch condition
const postCondition = (data) => {
  const URL = "http://localhost:3000/api/v1/conditions";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};
// GET fetch all clinics
const fetchClinics = () => {
  const URL = "http://localhost:3000/api/v1/clinics";
  return fetch(URL).then((resp) => resp.json());
};

// POST fetch clnic
const postClinic = (data) => {
  const URL = "http://localhost:3000/api/v1/clinics";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

//exports all functions
export const api = {
  auth: {
    login,
    getCurrentUser,
  },
  patients: {
    fetchPatients,
    postPatient,
    deletePatient,
  },
  appointments: {
    fetchAppointments,
    postAppointment,
  },
  medications: {
    fetchMedications,
    postMedication,
  },
  conditions: {
    fetchConditions,
    postCondition,
  },
  clinics: {
    fetchClinics,
    postClinic,
  },
};
