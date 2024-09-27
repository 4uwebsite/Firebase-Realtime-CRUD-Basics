# Firebase-Realtime-CRUD-Basics
 CRUD basics for Realitime Firebase DB using JS.

# Version
 0.0.0

# Steps
 The stepsrequired to CRUD:

## Create a Firebase Project & DB
1. Go to Firebase Console.
2. Create a new project and name it.
3. Turn off Google Analytics.
4. Go to 'Realtime Database' (left sidebar).
5. Click 'Create Database.'
6. Select 'Realtime Database Location.'
7. In 'Security Rules' select 'Start in test mode.' CRUD is allowed for 30 days in test mode.
8. Copy DB reference URL:
https://crud-basics-e2bb0-default-rtdb.asia-southeast1.firebasedatabase.app/
9. Assign the URL to a const:<br>
`const appSettings = {
    databaseURL: 'https://crud-basics-e2bb0-default-rtdb.asia-southeast1.firebasedatabase.app/'
}`<br>
10. Import `initializeApp` function. In order for the import to work the JS file needs to be specified as a module in the HTML file:<br>
`<script src="main.js" type="module" defer></script>`<br>
`import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"`