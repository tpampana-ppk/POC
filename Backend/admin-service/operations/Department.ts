import { IDepartmentDocument } from './../../schema/department-schema';
import DepartmentModel from "../../schema/department-schema";
import statusModel from "../../schema/job-schema";
import { CsvData } from "../../types/types";

export const department = async (email: string, csvObjects: CsvData[]) => {

  const existingDept = await DepartmentModel.find({});
  for (let csvObject of csvObjects) {
    
    function isNamePresent(array : IDepartmentDocument[], targetName:string) {
      return array.some(person => person.deptName === targetName);
    }

    const isPresent = isNamePresent(existingDept, csvObject.deptName);

    if (!isPresent) {
      let data = new DepartmentModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'departments added' } });
    }
  }
};
