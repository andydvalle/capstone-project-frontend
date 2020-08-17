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
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/auth",
    {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data),
    }
  ).then((resp) => resp.json());
};

//sends signup information to backend, users#create
const signup = (data) => {
  return fetch(
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/users",
    {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data),
    }
  ).then((resp) => resp.json());
};

//get fetch the current user after login
const getCurrentUser = () => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/current_user";
  return fetch(URL, {
    headers: headers(),
  }).then((resp) => {
    return resp.json();
  });
};

const fetchPatients = () => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/patients";
  return fetch(URL, { headers: headers() }).then((resp) => resp.json());
};

const postPatient = (data) => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/patients";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const editPatient = (data) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/patients/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      firstName: data.firstName,
      lastName: data.lastName,
      dob: data.dob,
      allergies: data.allergies,
    }),
  }).then((resp) => resp.json());
};

const deletePatient = (patientId) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/patients/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

const fetchAppointments = () => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/appointments";
  return fetch(URL).then((resp) => resp.json());
};

const postAppointment = (data) => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/appointments";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const editAppointment = (data) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/appointments/${data.id}`;
  return fetch(URL, {
    method: "PATCH",
    headers: headers(),
    body: JSON.stringify({
      title: data.title,
      date: data.date,
      time: data.time,
      notes: data.notes,
      patient_id: data.patient_id,
      clinic_id: data.clinic_id,
    }),
  }).then((resp) => resp.json());
};

const deleteAppointment = (patientId) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/appointments/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

const fetchMedications = () => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/medications";
  return fetch(URL).then((resp) => resp.json());
};

const postMedication = (data) => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/medications";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const editMedication = (data) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/medications/${data.id}`;
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

const deleteMedication = (patientId) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/medications/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

const fetchConditions = () => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/conditions";
  return fetch(URL).then((resp) => resp.json());
};

const postCondition = (data) => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/conditions";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const editCondition = (data) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/conditions/${data.id}`;
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

const deleteCondition = (patientId) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/conditions/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

const fetchClinics = () => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/clinics";
  return fetch(URL).then((resp) => resp.json());
};

const postClinic = (data) => {
  const URL =
    "https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/clinics";
  return fetch(URL, {
    method: "POST",
    headers: headers(),
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
};

const editClinic = (data) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/clinics/${data.id}`;
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

const deleteClinic = (patientId) => {
  const URL = `https://cors-anywhere.herokuapp.com/https://simple-care-app-api.herokuapp.com/api/v1/clinics/${patientId}`;
  return fetch(URL, {
    method: "DELETE",
  }).then((resp) => resp.json());
};

export const api = {
  auth: {
    login,
    getCurrentUser,
    signup,
  },
  patients: {
    fetchPatients,
    postPatient,
    editPatient,
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
