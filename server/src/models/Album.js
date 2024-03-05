import { Schema } from "mongoose";



export const AlbumSchema = new Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 50 },
  coverImg: { type: String, required: true, minlength: 1, maxlength: 500 },
  category: { type: String, enum: ['cats', 'dogs', 'games', 'aesthetics', 'misc', 'gachamon', 'animals'], required: true, default: 'misc' },
  creatorId: { type: Schema.ObjectId, ref: 'Account', required: true },
  archived: { type: Boolean, required: true, default: false }
}, { timestamps: true, toJSON: { virtuals: true } })

AlbumSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: "_id",
  justOne: true
})
