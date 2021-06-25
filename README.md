# Punch-Card / Timesheet-App

## Problems this app aim to solve?

My current employer has a very dated method for employees to do their timesheets:

- It takes very long, especially if done remotely
- If you've missed a day, it's hard to spot when that day was
- Employees don't see how this information is used, therefore unknowingly accumulating hours on projects that wasn't quoted for.

## What this app does?

- New users / employees create an account.
- They upload the amount of time they spend on each project
- Reports are automatically generated to show how much of the allowed / quoted time has already been used
- Some users / employees have Admin-privileges (typically the Office Manager), which allows them to:
  - Add new projects to the database
  - Edit user details and award them admin-rights
  - Enter timesheet entries for other users who might not be able to do it

## Features

- Users can see if they missed an entry from a glance, with a Github-Style Calender
- Reports show the following:
  - how much time was spent per User per Month or Week - it's a quick way to assess if everyone completed their timesheets
  - how much timof the allowed / quoted time has already been used - this will help with commercial awareness of a project.
  - how much time was spent per project per month - this will show employers which months were busier than others and help them to plan resources in future.

## Technologies used

- React with packages like:
  - `React Router Dom`
  - `React Hook Forms`
  - `React Calender Heatmap`
  - `React Tooltip`
- AWS Amplify with
  - `Cognito` for Authentication
  - `DynamoDB` for Database
- Javascript
- CSS

## Known Issues / Bugs

- User reports does not work if a new user doesn't have any timesheet entries

## What to work on next

- Data Visualisation in Reports
- Develop app so that it can be used on a mobile device, currently works best on a desktop
- Refactoring
- Testing
