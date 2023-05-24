import { Project } from "../../models/entities";

export interface InitResponse {
    id: string,
    name: string,
    modified: number
}

export interface ProjectResponse {
    id: string,
    project: Project
}