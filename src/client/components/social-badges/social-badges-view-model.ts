import { ComponentViewModel, element, template, NavigationService } from "@nivinjoseph/n-app";
import { given } from "@nivinjoseph/n-defensive";
import { inject } from "@nivinjoseph/n-ject";
import "./social-badges-view.scss";

@template(require("./social-badges-view.html"))
@element("social-badges")
@inject("NavigationService")
export class SocialBadgesViewModel extends ComponentViewModel
{
    private _navigationService: NavigationService;
    
    
    public constructor(navigationService: NavigationService)
    {
        super();
        
        given(navigationService, "NavigationService").ensureHasValue().ensureIsObject();
        this._navigationService = navigationService;
    }
    
    
    public gotoLinkedin()
    {
        this._navigationService.navigateSiteNewTab("https://www.linkedin.com/in/benjamin-saobuppha-01024a1a8/");
    }
    
    public gotoInstagram()
    {
        this._navigationService.navigateSiteNewTab("https://www.instagram.com/saobupphaben/");
    }
}