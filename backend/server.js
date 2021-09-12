const express = require('express')
const app = express();
const dotenv = require('dotenv');
const notes = require('./data-local/notes');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes')
const resourcesRoutes = require('./routes/resourceRoutes')
const {notFound,errorHandler } = require('./middlewares/errorMiddleware')

const PORT = process.env.PORT || 5000;

// ENV Config
dotenv.config();

// JSON
app.use(express.json())

// DB Import and Call Function
const { dbConnect } = require('./data-local/dbConnect');
dbConnect();

// Handling Errors
// app.use(notFound)
// app.use(errorHandler)

app.use(cors({
    origin: '*'
}));


app.get('/api/notes', (req, res) => {
    res.json(notes)
})


app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((note) => note._id === req.params.id)
    console.log(note)
    res.json(note)

})


// User Routes
app.use('/api/users', userRoutes)
app.use('/api/resources', resourcesRoutes)








app.listen(PORT, function() {
    console.log('Server Started on 5000')
})