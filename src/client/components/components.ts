import { ShellViewModel } from "./shell/shell-view-model";
import { NavbarMainViewModel } from "./navbar-main/navbar-main-view-model";
import { ProjectCardViewModel } from "./project-card/project-card-view-model";

export const components: Array<Function> = [
    ShellViewModel,
    NavbarMainViewModel,
    ProjectCardViewModel
];