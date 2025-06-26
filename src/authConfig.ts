// This is a placeholder for MSAL configuration.
// In a real application, you would get these values from your Azure App Registration.
export const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID_HERE", // e.g., "12345678-1234-1234-1234-1234567890ab"
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID_HERE", // e.g., "https://login.microsoftonline.com/common"
    redirectUri: "http://localhost:5173", // Your app's redirect URI
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set to true if you are having issues on IE11 or Edge
  },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"],
};