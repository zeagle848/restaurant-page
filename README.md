# Restaurant Page

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Development Notes](#development-notes)
- [Testing](#testing)

## Introduction 

This restaurant page was created as part of a project assigned within the open-source web development course The Odin Project (TOP). The link to the assignment page can be found [here](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/restaurant-page).

Certain design choices were made as part of the requirements of the assignment, such as creating the HTML elements for the three pages using javascript and the addition of the background image.

## Getting Started

To view the app locally you can begin by installing the dependencies...

`npm install`

...and then start by running:

`npm run serve`.

The application should be live on `http://localhost:8080/` if it doesn't open automatically.

## Development Notes

The HTML skeleton for this application is fairly rudimentary. I hard coded the heading and button elements in the `<header>` tag and created a content `<div>` in the body which acts as the root element for the three pages.

The pages themselves are modules created using javascript and then imported into the `index.js` file. The `index.js` file begins by calling the imported page loading functions with the home page being the only one that does not have the class `.hide-page` which sets the `display` property of the page containers for the menu page and contact page to `none`. The logic for switching tabs is also made within the `index.js`. Each button has its own event listener which adds the `.header-button-clicked` class to the clicked button and removes it from the other tab buttons. The event handler also adds and removes the class `.hide-page` to the page containers of the three pages, displaying the relevent page. 

I chose to simply show and hide the pages after initially loading them all rather than building the pages every time the user changes pages due to the extra computation required when doing so.

## Testing

To run the testing environment we need to deploy the application first. The process is the same as what was outlined in the Getting Started section. We begin by making sure all the dependencies are installed by running `nmp install` in the console and then run the dev server by running `npm run serve`. 

Once the dev server is up and running we simply run `npm run e2e` and cypress should open a window where you run the tests by clicking the `sample_spec.js` file in the same window.
