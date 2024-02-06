"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "@/components/AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const renderContent = (signinContent: string, signoutContent: string) => {
    return isSignin ? signinContent : signoutContent;
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <button
        className={`${
          isSignin ? "bg-blue-400 text-white" : "border p-1 px-4 rounded"
        } border p-1 px-4 rounded mr-3`}
        onClick={handleOpen}
      >
        {isSignin ? "Sign in" : "Sign up"}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="p-2">
            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
              <p className="text-sm">
                {renderContent("Sign in", "Create Account")}
              </p>
            </div>
            <div className="m-auto">
              <h2 className="text-xl font-light text-center">
                {renderContent(
                  "Login to your account",
                  "Create an account to get started"
                )}
                <AuthModalInputs
                  isSignin={isSignin}
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                />

                <button className="uppercase  w-full p-3 text-white rounded bg-red-600 text-sm mb-5 disabled:bg-gray-400">
                  {renderContent("Sign in", "Sign up")}
                </button>
              </h2>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
