import express from "express";
import { person } from "../models/person.js";
const router = express.Router();


router.post("/", async(req, res) => {
    try {
        const data = req.body // getting data from body
        const newPerson = new person(data);
        const response = await newPerson.save()
        console.log("data is save")
        res.status(200).json(response)
    } catch(error) {
        console.log("error", error);
        res.status(500).json({error: "error"})
    }
})

router.get("/", async(req, res) => {
    try{
        const data = await person.find()
        console.log("get data");
        res.status(200).json(data)
    }catch(error){
        console.log("error");
        res.status(500).json({error: "error"})
    }
})


router.put("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const personUpdatedData = req.body;
        const response = await person.findByIdAndUpdate(id, personUpdatedData, {
            new : true, //return the updated document
            runValidators: true // run mongoose validator
        })
        if(!response){
            res.status(404).json({error: "person not found"});
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: "internal server error"});
    }
})

router.delete("/:id", async(req, res) => {
    try {
        const id = req.params.id;
        const response = await person.findByIdAndDelete(id);
        if(!response){
            res.status(404).json({error: "person not found"});    
        }
        res.status(200).json({message:"Person deleted successfully"});
    } catch (error) {
        res.status(500).json({error:"internal server error"})
    }
})

router.get("/:workType", async(req, res) => {
    try {
        const workType = req.params.workType;
        if(workType == "chef" || workType == "waiter" || workType == "manager" ){
            const data = await person.find({work: workType})
            res.status(200).json(data)
        }else{
            res.status(404).json({error: "Invalid work type"})    
        }
    } catch (error) {
        res.status(500).json({error: "Internal server error"})
    }
})

export default router;