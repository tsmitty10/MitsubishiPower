# Mitsubishi Power

Timothy Smith - Front End Assessment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `npm install` then `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Solution Description

- Due to time constraints and wanting to get a solution back in a timely manner, the design is simple. Two-tone light gray design with a title and the Mitsuibishi Power logo with a red border to match the brand colors
- Clicking Employee DB takes the user back home
- The table does not take the full width of the screen due to the content being minimal
- The library AG Grid Angular was used for the table. It offers a lot of nice functionality. Clicking on the column headers will sort the table for each.
- Click on the filter button for each column to filter based on desired conditions
- For the ID column, the functionality requested was implemented. If a user filters for a particular ID and the name begins with a vowel, it is returned. If the ID is found, but the name does not begin with a vowel, an error message is shown. If the ID isn't found at all, Invalid Employee is displayed.
- Clicking on a particular user will navigate you to a detail page. Again, due to lack of more information regarding the user, the card is simple. Some enhancements could include adding in their picture, biography, location, tenure with the company, edit functionality, etc. There is a back button to go back to the main table
- The whole app should be responsive to various device screen sizes

## App Structure

- The app is primarily broken down under src/app with folders for components, services, and utils. 
- For storing the data, I created a basic employee service. It holds all the employees in an Employee object array and provides two functions: `getAllEmployees()` and `getEmployeeById(id)`; This service would be appropriate to use to handle the logic of API communication for performing operations on employees
- There is a Header component that is displayed throughout all pages of the app
- Two routes are defined: the base '' route which displays the table view component, and a '/detail/:id' route which retrieves the employee via the service based on the ID passed in on navigation
- If you try to navigate to the detail route with an invalid ID, an error message component will be displayed. Angular's condtional rendering is used here. If a valid employee is found, the employee details card component will be displayed. If not, the employee not found component will be displayed.
- The main table component has custom logic implemented based on the requirements for filtering based on ID. The invalid employee component will display a message in the table when filtering if either condtion is met; if the name does not begin with a vowel, or if the employee is not found. The appropriate message is passed to the component as appropriate.
- In the utils folder, there is a simple function in there to format employee salaries to standard USD format that is used on two pages, thus the reason for me breaking it out into a separate, reusable util function.
- Angular Material is used a little bit to create some of the UI components

Please let me know if you have any questions regarding the implementation, thank you!
