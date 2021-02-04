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
        
        const textWrapperName = document.querySelector(".ml2");
        if (textWrapperName && textWrapperName.textContent)
        {
            textWrapperName.innerHTML = textWrapperName.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        const textWrapperDescription = document.querySelector(".ml7 .letters");
        if (textWrapperDescription && textWrapperDescription.textContent)
        {
            textWrapperDescription.innerHTML = textWrapperDescription.textContent
                .replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        anime.timeline({loop: false})
        .add({
            targets: ".ml2 .letter",
            scale: [4, 1],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            // @ts-ignore
            delay: (el, i) => 70 * i
        }).add({
            targets: ".ml2",
            easing: "easeOutExpo",
        });
        
        anime.timeline({})
        .add({
            targets: ".ml7 .letter",
            translateY: ["1.1em", 0],
            translateX: ["0.55em", 0],
            translateZ: 0,
            rotateZ: [180, 0],
            duration: 750,
            easing: "easeOutExpo",
            // @ts-ignore
            delay: (el, i) => 50 * i
        }, 1000).add({
            targets: ".ml7",
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
    }
}