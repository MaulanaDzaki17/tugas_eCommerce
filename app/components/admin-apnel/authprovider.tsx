"use client"
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface PropsType {
    children: ReactNode
}

const authprovider = ({children}:PropsType) => {
  return (
    <div>
      
    </div>
  )
}

export default authprovider
