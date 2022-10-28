import express from "express"
import mongoose from "mongoose";
import Messages from "./dbMessages.js"



const app = express();
const port = process.env.PORT || 8080

mongoose.connect("mongodb+srv://vaibhav:Vaibhav123@cluster0.d9fb8bc.mongodb.net/?retryWrites=true&w=majority", {
})

app.get("/", (req, res) => {
   res.status(200).send("heyy")
})

app.post("/messages/new", (req, res) => {
   const dbMessage = req.body;

   Messages.create(dbMessage, (err, data) => {
      if (err) {
         res.status(500).send(err)
      }
      else {
         res.status(201).send(data)
      }
   })
})



app.listen(port, () => {
   console.log(`http://localhost:${port}`)
})
