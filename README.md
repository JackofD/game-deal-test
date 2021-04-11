# Game Shop Test

An app created as part of a tech assessment


## How to run

1. Make sure you have Node JS installed.

2. Depending on your package manager run either
```
npm install

or

Yarn
```
to install all the dependencies of the project.

3. Once that is done use your start script
```
npm run start

or

yarn start
```

Vist `localhost:3000` in your browser.


## Assumptions

- That the Api works correctly and will allow all requirements to be completed.
- That the specification and design has been thought through as is feasible with the resources available.
- That the project is feasible.


## Reasoning

- Reasoning behind most of the layout and design is based off the mockup provided.
- Screens and components were split out to help keep things tidy and stop files from getting too large.
- A separate routes file was not used since there were only a few routes in this application.

## Obstacles

- Routing to the same component when moving between store deals and general deals (nav link) did not re-render the component. Watching the location for changes helped fix that.

## Resources and Referecnes

Resources used:

- Figma file provided - [Figma file](https://www.figma.com/file/fEvrkqqb4yzAlwmFEgkRbH/Technical-Assignments?node-id=0%3A1)
- Cheat Shark API - [API](https://apidocs.cheapshark.com/)
- React JS view library and it's ecosystem + Typescript


## Time taken and notes

It has taken roughly two days to get this project where it currently is.

If I had more time, adding loaders would be a nicer experience.