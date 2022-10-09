import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function AuthBar() {
  return (
    <>
      <Button color="inherit">
        <NavLink to="/">Singup</NavLink>
      </Button>
      <Button color="inherit">
        <NavLink to="/login">Login</NavLink>
      </Button>
    </>
  );
}
