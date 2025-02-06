import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="display-5 text-center mb-4">Staf</h1>
        <div className="text-center">
          <p className="lead">Staff</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { Component } from "react";

// class Staff extends Component {
//   state = {
//     currentUserName: "",
//     currentUserEmail: "",
//   };

//   componentDidMount() {
//     const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
//     this.setState({
//       currentUserEmail: idToken.idToken.claims.email,
//       currentUserName: idToken.idToken.claims.name,
//     });
//   }

//   render() {
//     const { currentUserEmail, currentUserName } = this.state;

//     return (
//       <div>
//         <h1>Welcome {currentUserName}</h1>
//         <p>Email: {currentUserEmail}</p>
//         <p>You have reached the authorized staff area of the portal</p>
//       </div>
//     );
//   }
// }

// export default Staff;

// // import React, { Component } from "react";

// // class Staff extends Component {
// //   state = {
// //     currentUserName: "",
// //     currentUserEmail: "",
// //   };

// //   componentDidMount() {
// //     const idToken = JSON.parse(localStorage.getItem("okta-token-storage"));
// //     this.setState({
// //       currentUserEmail: idToken.idToken.claims.email,
// //       currentUserName: idToken.idToken.claims.name,
// //     });
// //   }

// //   render() {
// //     const { currentUserEmail, currentUserName } = this.state;

// //     return (
// //       <div>
// //         <h1>Welcome {currentUserName}</h1>
// //         <p>Email: {currentUserEmail}</p>
// //         <p>You have reached the authorized staff area of the portal</p>
// //       </div>
// //     );
// //   }
// // }

// // export default Staff;
