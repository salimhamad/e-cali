import React from "react";
import { useSelector } from "react-redux";
export default function Personalinformation() {
  // userakam wargrtotawane ba  useSelector ka logink la storaj a localakaya halgyrawa w layra showm krdwa
  const { user } = useSelector((state) => state.loginSlice);
  console.log(user);
  return (
    <div>
      <h3> personal information</h3>

      {user && (
        <div>
          <div>
            <h6>
              email : <b> {user.email}</b>
            </h6>
          </div>

          <div>
            <h6>
              password : <b> {user.password}</b>
            </h6>
          </div>
        </div>
      )}
    </div>
  );
}

// am coda ba shorcuty rfc anwsret
// import React from 'react'

// export default function Personalinformation() {
//     return (
//         <div>

//         </div>
//     )
// }

{
  /* 
      bama nayatawane  chunka ama bo array bakaryat
      {user.map((userInfo) => {
        return (
          <div>
            name={userInfo.name}
            email={userInfo.password}
            password={userInfo.email}
          </div>
        );
      })} */
}
