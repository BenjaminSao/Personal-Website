import { StartViewModel } from "./start/start-view-model";
import { AboutMeViewModel } from "./about-me/about-me-view-model";
import { ProjectsViewModel } from "./projects/projects-view-model";
import { ContactViewModel } from "./contact/contact-view-model";
import { ExperienceViewModel } from "./experience/experience-view-model";
import { NewStartViewModel } from "./new-start/new-start-view-model";

export const pages: Array<Function> = [
    StartViewModel,
    AboutMeViewModel,
    ProjectsViewModel,
    ContactViewModel,
    ExperienceViewModel,
    NewStartViewModel
];