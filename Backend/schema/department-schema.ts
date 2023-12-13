import mongoose, { Document, Schema } from 'mongoose';

export interface IDepartmentDocument extends Document {
  deptNo:string;
  deptName: string;
}

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

const DepartmentModel = mongoose.model<IDepartmentDocument>('Department', departmentSchema);

export default DepartmentModel;
