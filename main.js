// Import Firebase functions.
import {initializeApp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js"

// Configure DB connectivity
const appSettings = {
    databaseURL: 'https://crud-basics-e2bb0-default-rtdb.asia-southeast1.firebasedatabase.app/'
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const moviesInDB = ref(database, 'movies')
// console.log(database)

// Button click event
const addMovieBtn = document.getElementById('add-movie')
addMovieBtn.addEventListener('click', function() {
    console.log('clicked')
    pushMovie()
})

// Input:text click event
const movieTXT = document.getElementById('movie')
movieTXT.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        pushMovie()
        movieTXT.value = ''
    }
})

// CRUD: CREATE 'Add movie to DB'
function pushMovie(){
    push(moviesInDB, movieTXT.value)
}

// CRUD: Get updated snapshot of the DB everytime it is updated.
const movieListUL = document.getElementById('movie-list')
onValue(moviesInDB, function(snapshot) {
    // Check if snapshot exists
    if (snapshot.exists()){
        // let moviesArray = Object.values(snapshot.val())
        // let moviesArray = Object.keys(snapshot.val())
        let moviesArray = Object.entries(snapshot.val())
        renderMovieList(moviesArray)
    }
    else {
        movieListUL.innerHTML = `<li>No Movies Yet</li>`
    }
})

// Render Movies llist
function renderMovieList(list) {
    // const movieListUL = document.getElementById('movie-list')
    let html = ``
    for (let i = 0; i < list.length; i++) {
        html = `${html}<li>${list[i]}</li>`
    }
    movieListUL.innerHTML = html
}

// CRUD: Delete movie using key
const deleteBtn = document.getElementById('delete')
deleteBtn.addEventListener('click', function(){
    const key = document.getElementById('key').value
    let movieLocationInDB = ref(database, `movies/${key}`)
    remove(movieLocationInDB)
})