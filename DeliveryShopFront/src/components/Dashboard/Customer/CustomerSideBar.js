import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Person, CheckCircle, BagCheck } from "react-bootstrap-icons";
import "../Admin/AdminSideBar";
import { AuthContext } from "../../AuthContext";
import { House, Cart, Bag } from "react-bootstrap-icons";

function CustomerSideBar() {
  const navigate = useNavigate();
  const { removeToken } = useContext(AuthContext); // Destructure removeToken from AuthContext

  return (
    <div className=" col-md-4 navlink">
      <div>
        <div className="tab">
          <Link to="/customer-dashboard" className="tab-link">
            <House className="tab-icon" />
            <span className="tab-text">Početna</span>
          </Link>
        </div>
        <div className="tab">
          <Link to="/customer-dashboard/profile" className="tab-link">
            <Person className="tab-icon" />
            <span className="tab-text">Profil</span>
          </Link>
        </div>
        <div className="tab">
          <Link to="/customer-dashboard/new-order" className="tab-link">
            <Cart className="tab-icon tab-icon-window" />
            <span className="tab-text">Nova porudžbinа</span>
          </Link>
        </div>
        <div className="tab">
          <Link to="/customer-dashboard/my-orders" className="tab-link">
            <Bag className="tab-icon" />
            <span className="tab-text">Моје porudžbine</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CustomerSideBar;
