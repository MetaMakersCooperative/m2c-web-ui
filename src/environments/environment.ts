// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  disclaimer: {
    show: true,
    message: "This is a fake website for testing purposes.  The content on this page does not represent the views of Meta Makers Cooperative or its members.",
    dismiss: "Got it!",
    linkText: "Go to https://metamakers.org",
    linkAddress: "https://metamakers.org"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
