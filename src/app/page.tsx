"use client";

import { useSession } from "next-auth/react";

// import { getServerSession } from "next-auth/next"
// import { authOptions } from "./api/auth/[...nextauth]/route"

// export default async function Home() {

//   const data = await getServerSession(authOptions)
//   return <main>{JSON.stringify(data)}</main>
// }

export default function Home() {
  const { data } = useSession();
  return <main>{JSON.stringify(data)}</main>
}
