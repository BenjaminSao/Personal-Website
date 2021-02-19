import { PageViewModel, template, route } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./about-me-view.scss"; // importing css for the template
import { inject } from "@nivinjoseph/n-ject";

@template(require("./about-me-view.html")) // path to the template
@route(Routes.about) // route that the page is going to be shown at
@inject("NavigationService")
export class AboutMeViewModel extends PageViewModel //
{
    
}