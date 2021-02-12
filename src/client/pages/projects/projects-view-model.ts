import { PageViewModel, template, route } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./projects-view.scss"; // importing css for the template
// @ts-ignore
import anime from "animejs";
// @ts-ignore
import ScrollReveal from "scrollreveal";

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