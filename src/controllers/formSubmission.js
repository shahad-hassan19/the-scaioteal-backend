import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { Entry } from "../models/entry.models.js";

const formSubmission = asyncHandler( async(req, res) => {
    try {
        const {  userId, firstName, lastName, dog_name, dog_age, dog_breed, dog_weight, dog_allergies, dog_fav_treat } = req.body;

        const newEntry = await Entry.create({
            userId,
            firstName,
            lastName,
            dog_name,
            dog_age,
            dog_breed,
            dog_weight,
            dog_allergies,
            dog_fav_treat
        })
        await newEntry.save();
        if(!newEntry){
            throw new ApiError(500, "Something went wrong, while adding entry.")
        }

        return res
        .status(201)
        .json( new ApiResponse(200, newEntry, "Entry added successfully!"))

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error'})
    }
})

export {
    formSubmission
}














