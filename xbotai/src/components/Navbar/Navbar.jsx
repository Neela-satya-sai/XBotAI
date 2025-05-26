import React from "react";
import styles from "./Navbar.module.css";
import { Stack, Button } from "@mui/material";
// import Link from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/image 29.png";
import pencile from "../../assets/image 31.png";

function Navbar() {
  return (
    <nav className={styles.navbar_wrapper}>
      <Stack className={styles.navItems}>
        <Stack direction={"row"} className={styles.newChat_wrapper}>
          {" "}
          <img src={logo} alt="logo img" className={styles.logo} />{" "}
          <Link to="/" className={styles.newChat}>
            <span>New Chat</span>
          </Link>
          <img src={pencile} alt="pencile icon" className={styles.pencile} />{" "}
        </Stack>

        <Button
          component={Link}
          to="/history"
          className={styles.buttonHistory}
          sx={{ textDecoration: "none" }}
        >
          Past Conversation
        </Button>
      </Stack>
    </nav>
  );
}

export default Navbar;
