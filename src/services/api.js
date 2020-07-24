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

//PATCH fetch appointment
const editAppointment = (data) => {
  const URL = `http://localhost:3000/api/v1/appointments/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: data.title,
      date: data.content,
      time: data.time,
      notes: data.notes,
      patient_id: data.patient_id,
      clinic_id: data.clinic_id,
    }),
  }).then((resp) => resp.json());
};

//DELETE fetch appointment
const deleteAppointment = (patientId) => {
  // console.log(patientId);
  const URL = `http://localhost:3000/api/v1/appointments/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
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

//PATCH fetch medication
const editMedication = (data) => {
  console.log(data);
  const URL = `http://localhost:3000/api/v1/medications/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      name_route: data.name_route,
      strength: data.strength,
      instructions: data.instructions,
      notes: data.notes,
      sunday: data.sunday,
      monday: data.monday,
      tuesday: data.tuesday,
      wednesday: data.wednesday,
      thursday: data.thursday,
      friday: data.friday,
      saturday: data.saturday,
      patient_id: data.patient_id,
    }),
  }).then((resp) => resp.json());
};

//DELETE fetch medication
const deleteMedication = (patientId) => {
  // console.log(patientId);
  const URL = `http://localhost:3000/api/v1/medications/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
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

//PATCH fetch condition
const editCondition = (data) => {
  console.log(data);
  const URL = `http://localhost:3000/api/v1/conditions/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      name: data.name,
      notes: data.notes,
      patient_id: data.patient_id,
    }),
  }).then((resp) => resp.json());
};

//DELETE fetch condition
const deleteCondition = (patientId) => {
  // console.log(patientId);
  const URL = `http://localhost:3000/api/v1/conditions/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
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

//PATCH fetch clinic
const editClinic = (data) => {
  console.log(data);
  const URL = `http://localhost:3000/api/v1/clinics/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      name: data.name,
      practitioner: data.practitioner,
      address: data.address,
      address2: data.address2,
      city: data.city,
      state: data.state,
      zip: data.zip,
      number: data.number,
      notes: data.notes,
      patient_id: data.patient_id,
    }),
  }).then((resp) => resp.json());
};

//DELETE fetch clinic
const deleteClinic = (patientId) => {
  // console.log(patientId);
  const URL = `http://localhost:3000/api/v1/clinics/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
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
    editAppointment,
    deleteAppointment,
  },
  medications: {
    fetchMedications,
    postMedication,
    editMedication,
    deleteMedication,
  },
  conditions: {
    fetchConditions,
    postCondition,
    editCondition,
    deleteCondition,
  },
  clinics: {
    fetchClinics,
    postClinic,
    editClinic,
    deleteClinic,
  },
};
