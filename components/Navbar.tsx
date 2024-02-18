"use client";

import { AuthenticationContext } from "@/app/context/AuthContext";
import AuthModal from "@/app/restaurant/[slug]/components/AuthModal";
import useAuth from "@/hooks/useAuth";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

import { useContext } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { data, loading } = useContext(AuthenticationContext);
  const { signout } = useAuth();
  return (
    <nav className="bg-white p-2 flex justify-between w-full box-border">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        {" "}
        OpenTable{" "}
      </Link>
      <div>
        <div className="flex">
          {loading ? null : (
            <>
              {data ? (
                <button
                  onClick={() => {
                    signout();
                  }}
                  className="bg-blue-500 text-white p-2 rounded-md"
                >
                  Logout
                </button>
              ) : (
                <>
                  <AuthModal isSignin={true} />
                  <AuthModal isSignin={false} />
                </>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
