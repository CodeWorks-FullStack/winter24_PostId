import { Schema } from "mongoose";

export const CollaboratorSchema = new Schema(
  {
    albumId: { type: Schema.ObjectId, required: true, ref: 'Album' },
    accountId: { type: Schema.ObjectId, required: true, ref: 'Account' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)