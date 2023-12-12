import mongoose, { Document, Schema } from 'mongoose';

// Define the schema
const statusSchema = new Schema({
  email: { type: String, required: true },
  status: { type: String, default: 'inprogress' },
  description: { type: String, default: 'not added' },
},{
  timestamps:true
});

// Create the model
interface StatusDocument extends Document {
  email: string;
  status: string;
  description:string;
}

const statusModel = mongoose.model<StatusDocument>('jobstatuses', statusSchema);

export default statusModel;
