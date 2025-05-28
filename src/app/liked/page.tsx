import Container from "@/components/Container";
import LikedJobs from "@/components/LikedJobs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Liked Jobs — Your Saved Opportunities',
  description:
    'Review and manage jobs you’ve liked. Return to your favorite listings anytime and find the perfect fit for your career goals.',
  openGraph: {
    title: 'Liked Jobs — Your Saved Opportunities',
    description:
      'Browse your saved job listings. Easily revisit opportunities that match your interests and take the next step in your career.',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/liked`,
    type: 'website',
  },
};

export default function LikedPage() {
  return (
    <Container className="pt-5">
      <LikedJobs />
    </Container>
  );
}
