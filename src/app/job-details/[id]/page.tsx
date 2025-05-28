import Container from "@/components/Container";
import JobCard from "@/components/JobCard";
import { cashJobDetails } from "@/lib/api/jsearch/jobDetails";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const job = await cashJobDetails(params.id);

  return {
    title: `${job.job_title} at ${job.employer_name} — Job Details`,
    description: job.job_description.slice(0, 150),
    openGraph: {
      title: `${job.job_title} at ${job.employer_name}`,
      description: job.job_description.slice(0, 150),
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/job-details/${params.id}`,
      type: 'article',
    },
  };
}

export default async function Home({ params }: { params: { id: string } }) {
  const job = await cashJobDetails(params.id);

  return (
    <Container className="pt-5">
      <JobCard variant="full" data={job}/>
    </Container>
  )
}
