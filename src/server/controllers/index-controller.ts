import { Controller, route, httpGet, view, CallContext } from "@nivinjoseph/n-web";
import { ConfigurationManager } from "@nivinjoseph/n-config";
import { inject } from "@nivinjoseph/n-ject";
import { given } from "@nivinjoseph/n-defensive";
import { Logger } from "@nivinjoseph/n-log";


@route("/*")
@httpGet
@view("~/src/client/dist/index-view.html")
@inject("CallContext", "Logger")
export class IndexController extends Controller
{
    private readonly _callContext: CallContext;
    // @ts-ignore
    private readonly _logger: Logger;


    public constructor(callContext: CallContext, logger: Logger)
    {
        super();

        given(callContext, "callContext").ensureHasValue().ensureIsObject();
        this._callContext = callContext;

        given(logger, "logger").ensureHasValue().ensureIsObject();
        this._logger = logger;
    }


    public async execute(): Promise<object>
    {
        const env = ConfigurationManager.getConfig<string>("env");

        if (env !== "dev")
        {
            const protocol = this._callContext.getRequestHeader("X-Forwarded-Proto");
            if (protocol !== "https")
                this.redirect("https" + this._callContext.href.substr(4));
        }

        return {
            config: {
                apiUrl: ConfigurationManager.getConfig<string>("apiUrl")
            }
        };
    }
}