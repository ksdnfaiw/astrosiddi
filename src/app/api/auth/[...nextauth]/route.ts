import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Mock auth for now, normally you'd check DB here
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Simplified auth check for demo purposes
        if (credentials?.email === "admin@astrosiddhi.com" && credentials?.password === "admin123") {
          return { id: "1", name: "Admin", email: "admin@astrosiddhi.com" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/admin',
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
