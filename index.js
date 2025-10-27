const express = require("express");
const app = express();
app.use(express.json());

const {initializeDatabase} = require("./db/db.connect")
const EventModel = require("./models/events.model");
const {eventsData} = require("./data/eventsData")

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

async function startServer() {
    try {
      await initializeDatabase();
      await seedInitialEvents();

      // Default Route.
      app.get("/", (req, res) => {
        res.send("🚀 Meet-up Backend Running...");
      });

      const PORT = 3000;
      app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    } catch (error) {
        console.error("Error starting server:", error);
    }
}

//Function to seed Initial Events Data
async function seedInitialEvents () {
    try {
        for (const eventData of eventsData) {
          const newEvent = new EventModel(eventData);
          await newEvent.save();
          console.log(`Saved Event: ${eventData.title}`);
        }
    } catch (error) {
        console.error("Error seeding initial events:", error);
    }
}

startServer();

//Route to get all Events Details.
app.get("/events", async (req, res)=>{
    try {
        const allEvents = await EventModel.find();
        if(allEvents){
            res.json(allEvents)
        } else {
            res.status(404).json({error: "No Events Found!"})
        }
    } catch (error) {
        res.status(500).json({error: "Failed to fetch all Events data."})
    }
})










