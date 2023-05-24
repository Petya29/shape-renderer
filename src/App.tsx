import { Fragment } from "react";
import { Divider } from "./components/ui/data-display";
import { ProjectFinderForm } from "./components/partials/ProjectFinderForm";
import { Cloth } from "./components/partials/Cloth";

function App() {
  return (
    <Fragment>
      <nav>
        <div className="flex justify-center p-4 text-3xl w-full">
          <h1>Shape renderer</h1>
        </div>
        <Divider className="mx-10" />
      </nav>
      <main>
        <ProjectFinderForm />
        <Cloth />
      </main>
    </Fragment>
  )
}

export default App
