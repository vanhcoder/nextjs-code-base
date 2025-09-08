import ButtonLike from "./_components/ButtonLike";

async function getProject(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    id,
    name: `Project ${id}`,
    description: `Description of project ${id}`,
  };
}

async function ProjectPage({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  return (
    <div>
      Project {project.name} {project.description}
      <ButtonLike />
    </div>
  );
}

export default ProjectPage;
