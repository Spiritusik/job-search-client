import Container from "@/components/Container";
import Login from "@/components/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login — JobSearch",
  description: "Log in to your JobSearch account to access saved jobs and personalized recommendations.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <Container className="flex flex-col grow pt-5">
      <Login/>
    </Container>
  )
}