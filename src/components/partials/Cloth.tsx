import { useAppSelector } from "../../hooks/redux";
import { Spinner } from "../ui/feedback";
import { TextField } from "../ui/inputs";

export const Cloth = () => {

  const { project, isFetched, isLoading } = useAppSelector(state => state.project);

  return (
    <div>
      {isFetched &&
        <div className="my-4 flex flex-col items-center md:block md:mx-10">
          <div>Name: {project.name}</div>
          <TextField
            className="mt-4"
            readOnly
            value={project.id}
            label="ID"
          />
        </div>
      }
      <div className="flex justify-center">
        {!isFetched && isLoading
          ?
          <Spinner />
          :
          ""
        }
      </div>
    </div>
  )
}
