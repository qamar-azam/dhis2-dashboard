# DHIS2 Frontend Task

Application that fetches and renders the list of dashboards available to a DHIS2 user.

## Tech Stack

- React(custom hook, ContextAPI)
- DHIS2 UI,
- TailwindCSS,
- Jest and RTL

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
