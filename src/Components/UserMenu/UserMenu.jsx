import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../redux/auth/operations";
import { useAuth } from "../../hooks/useAuth";

export default function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  return (
    <>
      <Typography sx={{ mr: 2 }}>Welcome, {user.name}</Typography>
      <Button color="inherit">
        <NavLink to="/tasks">Book</NavLink>
      </Button>
      <Button color="inherit" onClick={() => dispatch(logOut())}>
        <NavLink>Logout</NavLink>
      </Button>
    </>
  );
}
