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
        
        const textWrapperDescription = document.querySelector(".ml7 .letters");
        if (textWrapperDescription && textWrapperDescription.textContent)
        {
            textWrapperDescription.innerHTML = textWrapperDescription.textContent
                .replace(/\S/g, "<span class='letter'>$&</span>");
        }
        
        anime({
            targets: ".floating-image",
            translateY: 10,
            direction: "alternate",
            loop: true,
            easing: "easeInOutSine",
            duration: 2000
            
        });
        
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
        }, 500).add({
            targets: ".ml7",
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });
        
        const slideUp = {
            distance: "100%",
            origin: "bottom",
        };
        
        ScrollReveal().reveal(".reveal", slideUp);
    }
}