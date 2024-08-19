import { Schema, model, Document } from "mongoose";

interface IPage extends Document {
  clientId: string;
  title: string;
  content: string;
  featuredImage?: string;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

const PageSchema = new Schema<IPage>({
  clientId: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  published: {
    type: Boolean,
    default: false,
  },
});

export default model<IPage>("Page", PageSchema);
