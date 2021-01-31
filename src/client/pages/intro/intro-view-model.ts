import { PageViewModel, template, route } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./intro-view.scss"; // importing css for the template

@template(require("./intro-view.html")) // path to the template
@route(Routes.intro) // route that the page is going to be shown at
export class IntroViewModel extends PageViewModel //
{
    
}