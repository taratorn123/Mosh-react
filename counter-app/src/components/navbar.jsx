import React from "react";

//Stateless Funcional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

// //State Class Component
// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">
//             Navbar{" "}
//             <span className="badge badge-pill badge-secondary">
//               {this.props.totalCounters}
//             </span>
//           </a>
//         </div>
//       </nav>
//     );
//   }
// }

export default NavBar;
