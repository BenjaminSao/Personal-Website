import { PageViewModel, template, route, NavigationService } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./about-me-view.scss"; // importing css for the template
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";

@template(require("./about-me-view.html")) // path to the template
@route(Routes.about) // route that the page is going to be shown at
@inject("NavigationService")
export class AboutMeViewModel extends PageViewModel //
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
    }
}