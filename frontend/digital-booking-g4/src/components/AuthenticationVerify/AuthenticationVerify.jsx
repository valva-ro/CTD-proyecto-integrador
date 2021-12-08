import { useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";

function comprobarToken(cleanUserInfo) {
  let token = null;
  if (localStorage.hasOwnProperty("jwt")) {
    token = localStorage.getItem("jwt").replaceAll('"', "");
  }
  if (token === null || token === "") {
    cleanUserInfo();
  } else {
    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        cleanUserInfo();
      }
    } catch (err) {
      cleanUserInfo();
    }
  }
}

function AuthenticationVerify({ cleanUserInfo }) {
  const history = useHistory();
  useEffect(() => {
    comprobarToken(cleanUserInfo);
  }, []);
  history.listen((location) => {
    comprobarToken(cleanUserInfo);
  });
  return <></>;
}

export default withRouter(AuthenticationVerify);
