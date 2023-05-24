import axios, { AxiosResponse } from "axios";
import { InitResponse, ProjectResponse } from "../store/slices/responses";

const API_URL = import.meta.env.VITE_APP_API_URL;

export const initAPI = async (): Promise<AxiosResponse<InitResponse>> => {
    return await axios.get<InitResponse>(`${API_URL}/init`);
}

export const projectAPI = async (id: string): Promise<AxiosResponse<ProjectResponse>> => {
    return await axios.get<ProjectResponse>(`${API_URL}/project/${id}`);
}