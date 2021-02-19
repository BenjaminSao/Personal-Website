import { PageViewModel, template, route } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./projects-view.scss"; // importing css for the template

@template(require("./projects-view.html")) // path to the template
@route(Routes.projects) // route that the page is going to be shown at
export class ProjectsViewModel extends PageViewModel //
{
    public get imagePersonalSite(): string { return require("./image/personal-website.png"); }
    public get imageRestaurantTodo(): string { return require("./image/restaurant-todo.png"); }
    public get imageGrimsbyThai(): string { return require("./image/grimsby-thai.png"); }
    public get imageThailandia(): string { return require("./image/thailandia.png"); }
    public get imageYoungThai(): string { return require("./image/young-thai.png"); }
    
    
    public constructor()
    {
        super();
    }
    
    
}