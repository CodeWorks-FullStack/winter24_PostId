import { Schema } from "mongoose";

export const PictureSchema = new Schema(
  {
    imgUrl: { type: String, required: true, minLength: 5, maxLength: 1000 },
    albumId: { type: Schema.Types.ObjectId, required: true, ref: 'Album' },
    creatorId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)