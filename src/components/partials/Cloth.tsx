import { useAppSelector } from "../../hooks/redux";
import { Spinner } from "../ui/feedback";
import { TextField } from "../ui/inputs";

export const Cloth = () => {

  const { project, isFetched, isLoading } = useAppSelector(state => state.project);

  return (
    <div className="w-full h-[70%]">
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
      <div className="flex justify-center w-full h-full">
        {!isFetched && isLoading &&
          <Spinner />
        }
        {isFetched && !isLoading &&
          <div className="flex flex-col items-stretch w-full h-full">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="cloth-wrapper" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox={`0 0 ${project.width} ${project.height}`}>
                <rect fill="#efefef" width="100%" height="100%"></rect>
              </svg>
            </svg>
          </div>
        }
      </div>
    </div>
  )
}
