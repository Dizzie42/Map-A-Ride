//auth context
export function loading(state) {
  return { type: "LOADING", payload: state };
}
export function signInErrors(data) {
  return { type: "SIGN_IN_ERRORS", payload: data };
}
export function signUpErrors(data) {
  return { type: "SIGN_UP_ERRORS", payload: data };
}
export function userAuthenticated(token) {
  return { type: "USER_AUTHENTICATED", payload: token };
}
export const resetInputs = { name: "", email: "", password: "", password2: "" };
export const registrationOK = { type: "REGISTRATION_OK" };

//user context
export function setUserData(data) {
  return { type: "USER_DATA", payload: data };
}

//rides context
export function setRidesData(data) {
  return { type: "SET_RIDES_DATA", payload: data };
}
export function updateRide(data) {
  return { type: "UPDATE_RIDE", payload: data };
}
export function deleteRide(data) {
  return { type: "DELETE_RIDE", payload: data };
}

//useSetCurrentRoute hook
export function createNewRoute(coords) {
  return { type: "CREATE_NEW_ROUTE", payload: coords };
}
export function updateRoute(data) {
  return { type: "UPDATE_ROUTE", payload: data };
}
export function setCreateModeOff() {
  return { type: "CREATE_MODE_OFF" };
}
