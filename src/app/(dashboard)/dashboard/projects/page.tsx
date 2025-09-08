import { Suspense } from "react";
import { ProjectsList } from "./_components/ProjectList";
import ProjectHeader from "./_components/ProjectHeader";

function ProjectsPage() {
  return (
    <div>
      <ProjectHeader>
        <Suspense fallback={<div>Loading...</div>}>
          <ProjectsList />
        </Suspense>
      </ProjectHeader>
    </div>
  );
}
export default ProjectsPage;
