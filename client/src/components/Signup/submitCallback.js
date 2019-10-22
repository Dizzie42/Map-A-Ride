import axios from "axios";
import { notify } from "react-notify-toast";
import {
  loading,
  resetInputs,
  registrationOK,
  signUpErrors
} from "../../utils/actions";

export default (inputs, dispatch, props, setInputs) => {
  dispatch(loading(true));
  axios
    .post("/api/users/register", inputs)
    .then(res =>
      notify.show(`User registered! email: ${res.data.email}`, "success", 3000)
    )
    .then(() => dispatch(registrationOK))
    .then(() => setInputs(resetInputs))
    .then(() => props.history.push("/login"))
    .catch(err => dispatch(signUpErrors(err.response.data)))
    .then(() => dispatch(loading(false)));
};
