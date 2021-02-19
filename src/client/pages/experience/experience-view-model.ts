import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./experience-view.scss";

@template(require("./experience-view.html"))
@route(Routes.experience)
export class ExperienceViewModel extends PageViewModel
{
    
    
    public constructor()
    {
        super();
    }
    
    
}