// Import necessary modules
import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the document
export interface IDepartmentDocument extends Document {
  deptNo:string;
  deptName: string;
}

// Define the MongoDB schema
const departmentSchema = new Schema<IDepartmentDocument>(
  {
    deptNo: {
      type: String,
      required: true,
      unique: true,
    },
    deptName: {
      type: String,
      required: true,
    },
  },
);

// Create the Mongoose model
const DepartmentModel = mongoose.model<IDepartmentDocument>('Department', departmentSchema);

// Export the model
export default DepartmentModel;
