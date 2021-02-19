import { ComponentViewModel, element, template } from "@nivinjoseph/n-app";
import "./animation-view.scss";
// @ts-ignore
import anime from "animejs";
// @ts-ignore
import ScrollReveal from "scrollreveal";

@template(require("./animation-view.html"))
@element("animation")
export class AnimationViewModel extends ComponentViewModel
{
    
    
    public constructor()
    {
        super();
    }
    
    
    protected onMount(element: HTMLElement): void
    {
        super.onMount(element);
        
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
        
        anime({
            targets: ".jump",
            translateY: -10,
            loop: true,
            direction: "alternate"
        });
        
        const slideUp = {
            distance: "100%",
            origin: "bottom",
        };
        
        ScrollReveal().reveal(".reveal", slideUp);
    }
}