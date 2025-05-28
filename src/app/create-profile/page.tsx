import Container from "@/components/Container";
import CreateProfile from "@/components/CreateProfile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Create Your Profile — Personalize Your Job Search',
  description:
    'Set up your profile to get job recommendations tailored to your skills and preferences. Make your job search smarter and more efficient.',
  openGraph: {
    title: 'Create Your Profile — Start Your Personalized Job Journey',
    description:
      'Build your profile to receive curated job listings. Save time, stay organized, and land the job that fits you best.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/profile/create`,
    type: 'website',
  },
};


export default function Home() {
  return (
    <Container className="flex flex-col grow pt-5">
      <CreateProfile/>
    </Container>
  )
}
