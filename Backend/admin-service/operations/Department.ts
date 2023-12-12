import DepartmentModel from "../../schema/department-schema";
import statusModel from "../../schema/job-schema";
import { CsvData } from "../../types/types";

export const department =async (email:string,csvObjects:CsvData[]) =>{
    for (const csvObject of csvObjects) {
      const existingDept = await DepartmentModel.findOne({ deptName: csvObject.deptName });
      if (!existingDept) 
        await DepartmentModel.create(csvObject);
        await statusModel.updateOne({ email: email }, { $set: { description: 'departments added' } });
    }
}