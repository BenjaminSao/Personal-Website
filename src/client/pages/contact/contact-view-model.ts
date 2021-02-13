import { PageViewModel, route, template } from "@nivinjoseph/n-app";
import * as Routes from "../routes";
import "./contact-view.scss";

@template(require("./contact-view.html"))
@route(Routes.contact)
export class ContactViewModel extends PageViewModel
{
    
}