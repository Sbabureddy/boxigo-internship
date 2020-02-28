import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function HeaderComponent() {
  return (
    <Navbar color="primary" light>
      <NavbarBrand>My Move Plans</NavbarBrand>
    </Navbar>
  );
}
