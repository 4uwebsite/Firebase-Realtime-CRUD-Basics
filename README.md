# Firebase-Realtime-CRUD-Basics
 CRUD basics for Realitime Firebase DB using JS.

# Version
 1.0.0

# Steps
 The stepsrequired to CRUD:

## Create a Firebase Project & DB, and push to DB
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
11. Assign the DB to the app:<br>
`const app = initializeApp(appSettings)`
12. Import `getDatabase` function from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js'<br>
`import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"`
13. Get the database:<br>
`const database = getDatabase(app)`
14. Create a reference inside the database:
First import the `ref` function<br>
`import {getDatabase, ref} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"`<br>
Create a `const` for `ref`<br>
`const moviesInDB = ref(database, 'movies')`<br>
'movies' is the reference inside the DB.
15. Import the `push()` function and write values to the DB:<br>
`import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"`<br>
`push(moviesInDB, movieTXT.value)`

## Firebase Realtime DB Rules
Times are shown in Unix Epoch and read/write is limited to 30 days by default.
1. Go to the DB's 'Rules' tab.
2. You will see default rule similar to this:<br>
`{
  "rules": {
    ".read": "now < 1729967400000",  // 2024-10-27
    ".write": "now < 1729967400000",  // 2024-10-27
  }
}`
3. Change it to `true`:<br>
`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`

## Fetching DB Items
Whenever a change happens to the DB (Create/Update/Delete) a snapshot of the updated DB is sent to all connected clients via the `onValue()` function.
Use `Object.values(snapshot.val())` function to convert the `snapshot` object into an array. Doesn't work without the `.val()` function to the `snapshot`.

### Keys & Values
`let moviesArray = Object.values(snapshot.val())`<br>
`let movieKeysArray = Object.keys(snapshot.val())`<br>
`let movieEntriesArray = Object.entries(snapshot.val())`<br>

## Remove Item from DB
Import the `remove()` function and specify the exact location of the item in the DB.<br>
`import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"`<br>
`let movieLocationInDB = ref(database, ``movies/${key}``)`<br>
`remove(movieLocationInDB)`

### snapshot.exists() function
This functioncan be used to detemine if the snapshot is empty.

## set Function
If the DB items aren't objects, as in if they are only key/value pairs, use the `set()` function instead of the `update()` function. Because the `update()` function is only used when the database record is an object.<br>
Import the set function:<br>
`import {getDatabase, ref, push, onValue, remove, set} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"`<br>
`const key = document.getElementById('key').value`<br>
`let movieLocationInDB = ref(database, ``movies/${key}``)`<br>
`const updatedTitle = document.getElementById('updated-title').value`<br>
`set(movieLocationInDB, updatedTitle)`