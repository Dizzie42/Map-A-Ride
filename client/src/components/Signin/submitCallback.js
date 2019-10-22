import axios from "axios";
import { loading, signInErrors, userAuthenticated } from "../../utils/actions";

function setToken(token) {
  window.localStorage.setItem("token", token);
}
function handleAuthentication(res, dispatch) {
  const { token } = res.data;
  const parsedToken = token.split("Bearer ")[1];
  setToken(parsedToken);
  dispatch(userAuthenticated(parsedToken));
}

export default (inputs, dispatch, props) => {
  dispatch(loading(true));
  axios
    .post("/api/users/login", inputs)
    .then(res => handleAuthentication(res, dispatch))
    .then(() => props.history.push("/dashboard"))
    .then(() => dispatch(loading(false)))
    .catch(err => dispatch(signInErrors(err.response.data)))
    .then(() => dispatch(loading(false)));
};
