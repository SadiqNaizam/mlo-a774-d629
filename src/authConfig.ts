/**
 * IMPORTANT: To use MSAL, you must install the necessary packages. Run:
 * 
 * npm install @azure/msal-browser @azure/msal-react
 * 
 * or the equivalent for your package manager.
 */
import { Configuration, LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig: Configuration = {
    auth: {
        // --- REQUIRED ---
        // 'Application (client) ID' of app registration in Azure portal - this is a GUID.
        // You MUST replace this with your own client ID.
        clientId: "YOUR_CLIENT_ID_HERE",

        // --- REQUIRED ---
        // Full Azure AD tenant info, e.g. "https://login.microsoftonline.com/common"
        // You MUST replace this with your own authority.
        authority: "https://login.microsoftonline.com/YOUR_TENANT_ID_HERE",

        // --- REQUIRED ---
        // The redirect URI of your app. This should be the URL where authentication responses are sent.
        // It MUST be registered in your Azure app registration.
        redirectUri: "http://localhost:5173"
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache is stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: ["User.Read"]
};