import { PageViewModel, template, route, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./projects-view.scss"; // importing css for the template
import { given } from "@nivinjoseph/n-defensive";
// @ts-ignore
import anime from "animejs";
// @ts-ignore
import ScrollReveal from "scrollreveal";
import { inject } from "@nivinjoseph/n-ject";

@template(require("./projects-view.html")) // path to the template
@route(Routes.projects) // route that the page is going to be shown at
@inject("NavigationService")
export class ProjectsViewModel extends PageViewModel //
{
    public _navigationService: NavigationService;
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public gotoHomepage(): void
    {
        this._navigationService.navigate(Routes.start);
    }
    
    protected onMount(element: HTMLElement): void
    {
        super.onMount(element);
        
        const slideUp = {
            distance: "100%",
            origin: "bottom",
        };
        
        ScrollReveal().reveal(".reveal", slideUp);
        
        const textWrapperName = document.querySelector(".ml2");
        if (textWrapperName && textWrapperName.textContent)
        {
            textWrapperName.innerHTML = textWrapperName.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        anime.timeline({})
        .add({
            targets: ".ml2 .letter",
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            // @ts-ignore
            delay: (el, i) => 20 * i
        }).add({
            targets: ".ml2",
            easing: "easeOutExpo",
        });
    }
}