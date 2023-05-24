import { useState } from "react";
import { Button, TextField } from "../ui/inputs";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getProject, init, setError } from "../../store/slices/projectSlice";
import { Snackbar } from "../ui/feedback";
import { XMarkIcon } from "../ui/data-display";

export const ProjectFinderForm = () => {

    const dispatch = useAppDispatch();

    const { error, isLoading } = useAppSelector(state => state.project);

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
            dispatch(getProject(projectId))
                .unwrap()
                .then(() => {
                    setProjectId("");
                });
        }
    }

    const handleCloseSnackbar = () => {
        dispatch(setError({ isError: false, msg: "" }));
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
                <Button disabled={isLoading} onClick={handleClickAdd}>Fetch</Button>
                <Snackbar
                    isOpen={error.isError}
                    title={(
                        <div className="flex justify-between items-center gap-2">
                            <p>{error.msg}</p>
                            <XMarkIcon
                                disableRipple
                                strokeColor="#a92323"
                                className="cursor-pointer"
                                onClick={handleCloseSnackbar}
                            />
                        </div>
                    )}
                    onClose={handleCloseSnackbar}
                />
            </div>
        </div>
    )
}
