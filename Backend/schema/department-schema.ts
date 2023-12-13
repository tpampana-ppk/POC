import mongoose, { Document, Schema } from 'mongoose';
import { IDepartmentDocument } from '../types/types';

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
