import Container from "@/components/Container";
import JobSearch from "@/components/JobSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Job Search — Find Your Dream Job',
  description:
    'Search for jobs by title. Browse opportunities, compare offers, and find the position that fits you best.',
  openGraph: {
    title: 'Job Search — Find Your Dream Job',
    description:
      'Explore open job positions tailored to your interests. Simple search, detailed job listings, and favorites.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/jobs`,
    type: 'website',
  },
};

export default function Home() {
  return (
    <Container className="pt-5">
      <JobSearch/>
    </Container>
  )
}
