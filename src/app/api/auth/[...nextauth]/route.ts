import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
        if(!credentials) {
          return null
        }
        if(credentials.email === "andreohenriqueleite@gmail.com" && credentials.password === "123") {
          return {
            id: "1",
            name: "Andreuu",
            email: "andreohenriqueleite@gmail.com",
            image: "https://i.pinimg.com/736x/24/dc/68/24dc6839bd60a2b96a45096d9458783a.jpg"
          }
        }
          return null
        }
    })
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
