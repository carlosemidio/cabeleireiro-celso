// Navbar.tsx

"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import DirectionsIcon from "@mui/icons-material/Directions";
import Link from "next/link";
import Drawer from "../drawer";

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="relative z-20">
      <AppBar position="static" className="bg-white">
        <div className="container mx-auto">
          <Toolbar className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="hidden">
                <Drawer open={drawerOpen} onClose={handleDrawerClose} />
              </div>
              <h1 className="text-blue-800 text-2xl select-none">
                Celso Cabeleireiro
              </h1>
            </div>
            <div className="hidden sm:block">
              <ul className="flex items-center gap-4 text-blue-800 text-xl">
                <li>
                  <Link href={"#"} className="flex items-center gap-1">
                    <EmailIcon></EmailIcon>
                    Entre em contato
                  </Link>
                </li>
                <li>
                  <Link href={"#"} className="flex items-center gap-1">
                    <DirectionsIcon></DirectionsIcon>
                    Ver Rotas
                  </Link>
                </li>
              </ul>
            </div>
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
