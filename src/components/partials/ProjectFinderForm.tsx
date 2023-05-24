import { useState } from "react";
import { Button, TextField } from "../ui/inputs";
import { useAppDispatch } from "../../hooks/redux";
import { getProject, init } from "../../store/slices/projectSlice";

export const ProjectFinderForm = () => {

    const dispatch = useAppDispatch();

    const [projectId, setProjectId] = useState<string>("");

    const handleChangeProjectId = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProjectId(e.target.value);
    }

    const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleClickAdd();
    }

    const handleClickAdd = () => {
        if (projectId.trim() === "") {
            dispatch(init())
                .unwrap()
                .then(originalPromiseResponse => {
                    dispatch(getProject(originalPromiseResponse.id));
                });
        } else {
            dispatch(getProject(projectId));
        }
    }

    return (
        <div className="flex justify-center md:block">
            <div className="flex justify-between gap-2 w-min my-4 md:mx-10">
                <TextField
                    autoFocus
                    label="project ID"
                    placeholder="For random value leave empty"
                    value={projectId}
                    onChange={handleChangeProjectId}
                    onKeyUp={handleEnterPress}
                />
                <Button onClick={handleClickAdd}>Fetch</Button>
            </div>
        </div>
    )
}
