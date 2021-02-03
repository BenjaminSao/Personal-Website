import { PageViewModel, template, route } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./intro-view.scss"; // importing css for the template
// @ts-ignore
import anime from "animejs";

@template(require("./intro-view.html")) // path to the template
@route(Routes.intro) // route that the page is going to be shown at
export class IntroViewModel extends PageViewModel //
{
    public constructor()
    {
        super();
    }
    
    protected onMount(element: HTMLElement)
    {
        super.onMount(element);
        
        anime({
            targets: ".square",
            rotate: 90,
            duration: 5000,
            loop: true
        });
    }
}