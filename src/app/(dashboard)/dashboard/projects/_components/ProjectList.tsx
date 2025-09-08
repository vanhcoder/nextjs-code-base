import Link from "next/link";

export async function ProjectsList() {
  const projects = await getProjects();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div>
      {projects.map((project) => (
        <Link href={`/dashboard/projects/${project.id}`} key={project.id}>
          {project.name}
        </Link>
      ))}
    </div>
  );
}

async function getProjects() {
  const projects = [
    { id: 1, name: "Project 1", description: "Description of project 1" },
    { id: 2, name: "Project 2", description: "Description of project 2" },
    { id: 3, name: "Project 3", description: "Description of project 3" },
  ];
  return projects;
}

export default ProjectsList;
