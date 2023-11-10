# DHIS2 Frontend Task

Application that fetches and renders the list of dashboards available to a DHIS2 user.

## Tech Stack

- React(Custom hook, ContextAPI)
- DHIS2 UI,
- TailwindCSS,
- Jest and RTL

## Deployed Version

To see deployed version please click <a href="https://654cda83b5dcf73c329425b6--shimmering-lollipop-1e5270.netlify.app" target="_blank">Dashboards</a> or copy below url and paste to browser.

```
https://654cda83b5dcf73c329425b6--shimmering-lollipop-1e5270.netlify.app
```

## To run app locally

Step1: Clone the project on your local respository.

Step2: Install dependencies by running following command in your terminal:

```
npm install
```

Step3: Run app locally, by using command:

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Assumptions

I made few assumptions while working on assessment, which are followings:

1. Show list of dashboards with first dashboard content and expanded by default.

2. On Clicking dashboard name fetch its detail by api and display content in expanded accordion.

3. Dashboard whose details already fetched are stored in state and not fetched again, just show content in expanded accordion.

4. Starred state are stored in localStorage as well so on reload of page persist starred state instead of resetting.

5. In terms of design I tried to use DHIS2's own UI library. I couldn't fully grasp and encounter some version issues so ended up using tailwindCSS for layout and styling. However, I used icons from the UI library and tried to make look and feel similar to design.

## Specs

1. Show the dashboards in a list of collapsible accordion.

2. The dashboard list and first card is expanded on load by default
   When the user clicks on another dashboard, expand that dashboard card to show its details and collapse the other dashboards
   When a dashboard is expanded, then show all the dashboard items in that dashboard
3. Show an icon based on the item type (visualization, map, text, etc.)

4. Show the dashboard item name
5. For text types, show the text of the dashboard item in place of its name
6. Ability to “star” a dashboard and persist the starred states on reload.

7. Ability to filter dashboard items of a certain type, so if the user selects “visualization”, only the visualization dashboard items are displayed.
   Keep the filter selected when the user expands and collapses dashboard cards
   Some dashboard items (like visualization and map) are expensive to render, so make sure there are no unnecessary re-renders
