"use client";

import { useState } from "react";

function ProjectHeader({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Projects</h1>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <h4>hello</h4>}
      {children}
    </div>
  );
}

export default ProjectHeader;
