"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AuthModalInputs from "@/components/AuthModalInputs";
import useAuth from "@/hooks/useAuth";

import { useContext } from "react";
import AuthContext, { AuthenticationContext } from "@/app/context/AuthContext";
import { Alert, CircularProgress } from "@mui/material";

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
  const { error, loading, data, setAuthState } = useContext(
    AuthenticationContext
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { signin, signup } = useAuth();

  const handleClick = () => {
    if (isSignin) {
      signin({ password: inputs.password, email: inputs.email }, handleClose);
    } else {
      signup(inputs, handleClose);
    }
  };

  const [inputs, setInputs] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    if (isSignin) {
      if (inputs.email && inputs.password) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }

    if (!isSignin) {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.phone &&
        inputs.city &&
        inputs.password
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [inputs]);

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
          {loading ? (
            <div className="p-2 h-[300px] flex justify-center items-center">
              <CircularProgress />
            </div>
          ) : (
            <div className="p-2">
              {error && (
                <Alert severity="error" className="mb-9">
                  {error}
                </Alert>
              )}
              <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                <p className="text-sm">
                  {renderContent("Sign in", "Create Account")}
                  {data?.firstName}
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
                  <button
                    className="uppercase  w-full p-3 text-white rounded bg-red-600 text-sm mb-5 disabled:bg-gray-400"
                    disabled={isDisabled}
                    onClick={handleClick}
                  >
                    {renderContent("Sign in", "Sign up")}
                  </button>
                </h2>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
