import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../features/yetkiSlice";

const Navbar = () => {
  const { email } = useSelector((state) => state.yetkiSlice);

  const dispatch = useDispatch();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Online News
          </Typography>

          {email ? (
            <Button color="inherit" onClick={()=>dispatch(deleteUser())}>
              LOGOUT
            </Button>
          ) : (
            <Button color="inherit">Sign Up</Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
