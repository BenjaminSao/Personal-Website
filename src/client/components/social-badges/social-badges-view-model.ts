import { ComponentViewModel, element, template, NavigationService } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import "./social-badges-view.scss";
import * as Routes from "../../pages/routes";

@template(require("./social-badges-view.html"))
@element("social-badges")
@inject("NavigationService")
export class SocialBadgesViewModel extends ComponentViewModel
{
    private readonly _navigationService: NavigationService;
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "NavigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public gotoLinkedin(): void
    {
        this._navigationService.navigateSiteNewTab("https://www.linkedin.com/in/benjamin-saobuppha-01024a1a8/");
    }
    
    public gotoInstagram(): void
    {
        this._navigationService.navigateSiteNewTab("https://www.instagram.com/saobupphaben/");
    }
    
    public gotoContactMe(): void
    {
        this._navigationService.navigate(Routes.contact);
    }
}