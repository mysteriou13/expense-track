'use client'

import { signOut } from "next-auth/react"

export default function Deconnection() {
  return (
    <div>
         <div className="hover:cursor-pointer" onClick={()=>signOut()}> deconnection </div>
    </div>
  )
}
