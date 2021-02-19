import { ComponentViewModel, template, element, NavigationService } from "@nivinjoseph/n-app";
import "./navbar-main-view.scss";
import * as route from "../../pages/routes";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";

@template(require("./navbar-main-view.html"))
@element("navbar-main")
@inject("NavigationService")
export class NavbarMainViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;
    
    private _navbarIsActive: boolean;
    
    public get navbarIsActive(): boolean { return this._navbarIsActive; }
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "navigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
        
        this._navbarIsActive = false;
    }
    
    
    public toggleNavbar(): void
    {
        this._navbarIsActive = this._navbarIsActive ? false : true;
    }
    
    public gotoHomepage(): void
    {
        this._navigationService.navigate(route.start);
    }
    
    public gotoAboutMe(): void
    {
        this._navigationService.navigate(route.about);
    }
    
    public gotoProjects(): void
    {
        this._navigationService.navigate(route.projects);
    }
    
    public gotoExperiences(): void
    {
        this._navigationService.navigate(route.experience);
    }
    
    public gotoContactMe(): void
    {
        this._navigationService.navigate(route.contact);    
    }
}