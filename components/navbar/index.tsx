"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import DirectionsIcon from "@mui/icons-material/Directions";
import Link from "next/link";
import Drawer from "../drawer";
import WhatsAppButton from "../WhatsappButton";

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
        <div className="container mx-auto lg:px-32">
          <Toolbar className="flex items-center justify-between">
            <div className="flex items-center">
              <ContentCutIcon className="text-blue-800 text-3xl"></ContentCutIcon>
              <h1 className="text-blue-800 text-xl select-none">
                Celso Cabeleireiro
              </h1>
            </div>
            <div className="hidden sm:block">
              <ul className="flex items-center gap-4 text-blue-800 text-xl">
                <li>
                  <WhatsAppButton phoneNumber="5511961606160" buttonText="Contato" />
                </li>
                <li>
                  <Link
                    href={
                      "https://www.google.com/maps/dir//Cabeleireiro+Celso+Masculino/data=!4m8!4m7!1m0!1m5!1m1!1s0x94cef7b26b67876d:0x1e3ce37fc83c7af6!2m2!1d-46.6356381!2d-23.4826457"
                    }
                    className="flex items-center gap-1"
                    target="blank"
                  >
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
