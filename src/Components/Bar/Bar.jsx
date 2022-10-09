import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import AuthBar from "../AuthBar/AuthBar";
import UserMenu from "../UserMenu/UserMenu";
import { useAuth } from "../../hooks/useAuth";
export default function Bar() {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contacts
          </Typography>
          {isLoggedIn ? <UserMenu></UserMenu> : <AuthBar></AuthBar>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
