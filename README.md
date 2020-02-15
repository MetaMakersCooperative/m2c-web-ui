# Meta Makers Cooperative Website UI (Development)

This is the User Interface for the Meta Makers Cooperative website.  The project uses [Angular](https://angular.io) version 9.0.2 and is deployed using [GitHub Pages](https://pages.github.com/). Since only one site can be hosted per repository, this is the development repository and a separate repository is used for production.

## Local Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Publish to GH-Pages

Run `npm run publish` to deploy the project to gh-pages for development. This will build the project on your local machine and push the output to the "gh-pages" branch.  The content of the gh-pages branch is served at [ecmcoop.ca](http://ecmcoop.ca).  Permission to contribute to the repository is required.

Please be aware that this command will not push your pending changes to master, so please sync with the master branch before publishing. Otherwise, your published changes could be out of date, and uncommitted changes will be replaced by others in the future.

## Development Resources

### Angular

Visit [angular.io](https://angular.io) for tutorials on agular. To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.
