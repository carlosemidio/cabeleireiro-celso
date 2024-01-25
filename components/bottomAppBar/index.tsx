"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import DirectionsIcon from "@mui/icons-material/Directions";
import Fab from "@mui/material/Fab";

//modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import WhatsAppButton from "../WhatsappButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar() {
  //modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        className="bg-white sm:hidden"
        sx={{ top: "auto", bottom: 0 }}
      >
        <Toolbar>
          <div className="mx-auto">
            <ul className="flex items-center gap-1 text-xl">
              <li className="text-blue-800 flex gap-1 items-center">
                <WhatsAppButton phoneNumber="5511961606160" buttonText="Contato" />
              </li>
              <li>
                <Link
                  href={"#"}
                  className="flex items-center gap-1 no-underline text-blue-800"
                >
                  <DirectionsIcon></DirectionsIcon>
                  Ver Rotas
                </Link>
              </li>
            </ul>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
