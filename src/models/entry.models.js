import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema(
    {
        email_address: {
            type: String,
            required: true,
            trim: true
        },
        dog_name: {
            type: String,
            trim: true,
            required: true,
            index: true,
            maxlength: 50
        },
        dog_breed: {
            type: String,
            trim: true,
            required: true,
        },
        dog_age: {
            type: String,
            required: true,
            trim: true,
        },
        what_dog_eats: {
            type: String,
            required: true,
            trim: true,
            enum: ["fresh_food", "kibble", "mixture_of_everything"]
        }
    },{
        timestamps: true
    }
)

export const Entry = mongoose.model("Entry", entrySchema)
