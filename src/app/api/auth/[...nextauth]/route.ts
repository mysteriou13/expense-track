// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@example.com" },
        password: { label: "Password", type: "password" },
        provider: { label: "Provider", type: "text", placeholder: "local" },
      },
      async authorize(credentials) {
        // Appel à ton backend via fetch ou RTK Query
        const res = await fetch( process.env.NEXT_PUBLIC_URL_BACK + "/users/User", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const data = await res.json();

        if (res.ok && data.user && data.token) {
          // On renvoie l'objet utilisateur + token
          return {
            id: data.user.id,
            name: data.user.name,
            email: data.user.email,
            token: data.token, // ton JWT du back
          };
        }

        return null;
      },
    }),

      
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),

  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })

  ],

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
