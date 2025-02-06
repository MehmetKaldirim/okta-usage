import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="display-5 text-center mb-4">Home</h1>
        <div className="text-center">
          <p className="lead">Welcome to the Home Page!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { useOktaAuth } from "@okta/okta-react";

// const Home = () => {
//   const { authState, oktaAuth } = useOktaAuth();
//   const [authenticated, setAuthenticated] = useState(null);

//   useEffect(() => {
//     setAuthenticated(authState?.isAuthenticated);
//   }, [authState]);

//   const login = async () => {
//     await oktaAuth.signInWithRedirect();
//   };

//   const logout = async () => {
//     await oktaAuth.signOut();
//   };

//   if (authenticated === null) return null;

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4">
//         <h1 className="display-5 text-center mb-4">Acme Staff Portal</h1>
//         {authenticated ? (
//           <div className="text-center">
//             <p className="lead">
//               You have entered the staff portal,{" "}
//               <Link to="/staff">click here</Link>
//             </p>
//             <button className="btn btn-danger btn-lg mt-3" onClick={logout}>
//               Logout
//             </button>
//           </div>
//         ) : (
//           <div className="text-center">
//             <p className="lead">
//               If you are a staff member, please get your credentials from your
//               supervisor.
//             </p>
//             <button className="btn btn-primary btn-lg mt-3" onClick={login}>
//               Login
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Home;
