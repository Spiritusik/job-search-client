import Container from "@/components/Container";
import Register from "@/components/Register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create an Account — JobSearch",
  description: "Register to JobSearch and start saving your favorite jobs, getting tailored recommendations, and more.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Home() {
  return (
    <Container className="flex flex-col grow pt-5">
      <Register/>
    </Container>
  )
}