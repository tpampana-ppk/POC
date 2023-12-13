import mongoose, { Document, Schema } from 'mongoose';
import { StatusDocument } from '../types/types';
const statusSchema = new Schema({
  email: { type: String, required: true },
  status: { type: String, default: 'inprogress' },
  description: { type: String, default: 'not added' },
},{
  timestamps:true
});



const statusModel = mongoose.model<StatusDocument>('jobstatuses', statusSchema);

export default statusModel;
