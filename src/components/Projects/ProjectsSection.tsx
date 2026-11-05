import { getFeaturedProjects } from '../../lib/github';
import { ProjectsSectionContent } from './ProjectsSectionContent';

export async function ProjectsSection() {
  const projects = await getFeaturedProjects();

  return <ProjectsSectionContent projects={projects} />;
}
