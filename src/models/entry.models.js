import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema(
    {
        pup_name: {
            type: String,
            trim: true,
            required: true,
            index: true,
            maxlength: 50
        },
        your_name: {
            type: String,
            trim: true,
            index: true,
            required: true,
            maxlength: 50
        },
        dog_age: {
            type: String,
            required: true,
            trim: true,
        },
        dog_eats: {
            type: String,
            required: true,
            trim: true,
            enum: ["fresh_food", "kibble", "mixture_of_everything"]
        },
        email_address: {
            type: String,
            required: true,
            trim: true
        }
    },{
        timestamps: true
    }
)

export const Entry = mongoose.model("Entry", entrySchema)
