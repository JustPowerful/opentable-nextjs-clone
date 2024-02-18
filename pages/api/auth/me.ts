import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers["authorization"] as string;

  if (!bearerToken) {
    return res.status(401).json({
      errorMessage: "Unauthorized request (no bearer token)",
    });
  }

  const token = bearerToken.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      errorMessage: "Unauthorized request (no token)",
    });
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    // throw error;
    return res.status(401).json({
      errorMessage: "Unauthorized request (invalid token)",
    });
  }

  const payload = jwt.decode(token) as {
    email: string;
    iat: number;
    exp: number;
  };

  if (!payload.email) {
    return res.status(401).json({
      errorMessage: "Unauthorized request (invalid token)",
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },

    select: {
      id: true,
      email: true,
      first_name: true,
      last_name: true,
      phone: true,
      city: true,
      created_at: true,
      updated_at: true,
    },
  });

  if (!user) {
    return res.status(401).json({
      errorMessage: "User not found",
    });
  }

  return res.json({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    phone: user.phone,
    city: user.city,
  });
}
