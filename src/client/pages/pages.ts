import { StartViewModel } from "./start/start-view-model";
import { AboutMeViewModel } from "./about-me/about-me-view-model";
import { ProjectsViewModel } from "./projects/projects-view-model";

export const pages: Array<Function> = [
    StartViewModel,
    AboutMeViewModel,
    ProjectsViewModel
];