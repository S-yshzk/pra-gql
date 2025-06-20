// src/context.ts
import { PrismaClient } from "@prisma/client";
import { prisma } from "./prisma"; // Assuming prisma.ts is in the same directory

export interface Context {
  prisma: PrismaClient;
  // You can add other properties to your context here,
  // e.g., request object, user authentication info, etc.
}

// This function will be passed to Apollo Server's context option
export function createContext(): Context {
  return {
    prisma,
    // Initialize other context properties here if needed
  };
}
