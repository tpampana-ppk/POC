import mongoose, { Document, Schema, Model, model } from 'mongoose';


interface IEmployee extends Document {
  empFirstName: string;
  empLastName: string;
  departmentId: string; // Corrected type
  siteId: string;       // Corrected type
}

const employeeSchema: Schema<IEmployee> = new Schema({
  empFirstName: { type: String, required: true },
  empLastName: { type: String, required: true },
  departmentId: { type: String, ref: 'Department', required: true },
  siteId: { type: String, ref: 'Site', required: true },
});

const EmployeeModel =mongoose.model<IEmployee>('Employee', employeeSchema);

export default EmployeeModel;