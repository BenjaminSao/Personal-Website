import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./new-start-view.scss";

@template(require("./new-start-view.html"))
@route(Routes.newStart)
export class NewStartViewModel extends PageViewModel
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

    public onMount(element: HTMLElement)
    {
        super.onMount(element);

        // @ts-ignore
        new fullpage("#fullpage", {
            verticalCentered: true,
            controlArrows: false,
            navigation: true,
            scrollBar: true,
            offsetSections:true,
            navigationPosition: "right",
            navigationTooltips: ["Intro", "About Me", "Projects"],
            // parallax: true,
            // parallaxOptions: {
            //     type: "cover",
            //     percentage: 100,
            // },
            slidesNavigation: true,
            licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        });
    }
}