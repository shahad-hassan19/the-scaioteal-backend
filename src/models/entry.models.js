import mongoose, { Schema } from "mongoose";

const entrySchema = new Schema(
    {
        firstName: {
            type: String,
            trim: true,
            index: true,
            maxlength: 50
        },
        lastName: {
            type: String,
            trim: true,
            index: true,
            maxlength: 50
        },
        dog_name: {
            type: String,
            required: true,
            trim: true,
            index: true,
            maxlength: 50
        },
        dog_age: {
            type: String,
            required: true,
            trim: true,
        },
        dog_breed: {
            type: String,
            required: true,
            trim: true,
            maxlength: 50
        },
        dog_weight: {
            type: String,
            required: true,
        },
        dog_allergies: {
            type: String,
            required: true,
            trim: true,
            enum: ["Allergies", "preferences", "sensitive stomach", "none"]
        },
        dog_fav_treat: {
            type: String,
            required: true,
            trim: true
        }
    },{
        timestamps: true
    }
)

export const Entry = mongoose.model("Entry", entrySchema)
