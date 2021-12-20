import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../feautres/LoginSlice";
import { useLoginMutation } from "../service/apisevis";
// import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
// abe jwt ysh install kay boaway tokenaka w bodrwskaw warygrytawane
import jwt from "jsonwebtoken";

// nardny datakany user bo Personalinformation
import Personalinformation from "./Personalinformation";
export default function Login() {
  // const globalUser = useSelector((state) => state.loginSlice.value);
  const { user } = useSelector((state) => state.loginSlice);

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [triggar, result] = useLoginMutation(); yakamyan fctiona ka bakaryayany dwamyan datakay tyaya
  const [userLogin, { isError, isLoading, data, error }] = useLoginMutation();
  // useEffect(() => {
  // wata ka mutaionaka ka nard  agar login bw wata email w passwordaka rastbw ba agar trigger ffunctiony userLogin sarkawtwbw dataka ba wargre
  //  data && dispatch(login(jwt.decode(data?.token)));
  // aw datay ka ayaetawane tokenakaya ema bam dera decodema krdwa boaway ma#lumaty useraka darxat
  // dispatch(login(jwt.decode(data?.token)));

  // data? wata agar datak bardastbw chunka hamw jare data rana bardasnabe oya abe ? daneyt
  // lanaw local w la storaashda da token kaw save akat
  //}, [data]);

  useEffect(() => {
    data && dispatch(login(jwt.decode(data?.token)));
  }, [data]);

  if (isLoading) {
    // wata ta datakan ayane ba progress bkat
    return <div> loding</div>;
  }
  return (
    <div className="container">
      {/* <Personalinformation /> */}
      {/* <Personalinformation
        info={jwt.decode(data?.token)}
        // info={JSON.stringify(jwt.decode(data?.token))}

        // name={user.name}
        // price={user.email}
        // description={user.password}
      /> */}
      {JSON.stringify(jwt.decode(data?.token))}
      {JSON.stringify(data)}
      <div>{JSON.stringify(error)}</div>
      <Card>
        <Card.Body style={{ backgroundColor: "red" }}>
          {JSON.stringify(error)}
        </Card.Body>
      </Card>
      {/* ama ale agar user habw wata login krdwa kawata 
     pewsytnakat login katawane boya ba bche bo home*/}
      {user && <Navigate to="/" />}
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-xl-10">
              <div class="card">
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.jpg"
                      alt="login form"
                      class="img-fluid"
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body p-4 p-lg-5 text-black">
                      <form
                        //  abe type buttonaka submit bet inja formaka datakan waragretawane
                        onSubmit={(e) => {
                          e.preventDefault();
                          userLogin({ email, password });
                        }}
                      >
                        <div class="d-flex align-items-center mb-3 pb-1">
                          <i class="fas fa-cubes fa-2x me-3"></i>
                          {/* <span class="h1 fw-bold mb-0">ecommerscali</span> */}
                        </div>

                        <h5 class="fw-normal mb-3 pb-3">
                          Sign into your account
                        </h5>

                        <div class="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            class="form-control form-control-lg"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                          />
                          <label className="form-label" for="form2Example17">
                            Email address
                          </label>
                        </div>

                        <div class="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            class="form-control form-control-lg"
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                          />
                          <label className="form-label" for="form2Example27">
                            Password
                          </label>
                        </div>

                        <div class="pt-1 mb-4">
                          <button
                            class="btn btn-dark btn-lg btn-block"
                            type="submit"
                            // abe type butonaka submit inja eshakat la formda
                          >
                            Login
                          </button>
                        </div>

                        <a class="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p class="mb-5 pb-lg-2">
                          Don't have an account? <a href="#!">Register here</a>
                        </p>
                        <a href="#!" class="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" class="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* {isLoading && "loging in"}
      {token && token}
      {data && localStorage.setItem("authToken", data.token)}
      {error && error.message} */
}
