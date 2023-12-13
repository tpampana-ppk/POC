import { IDepartmentDocument } from './../../schema/department-schema';
import DepartmentModel from "../../schema/department-schema";
import statusModel from "../../schema/job-schema";
import { CsvData } from "../../types/types";

export const department = async (email: string, csvObjects: CsvData[]) => {
  console.log(true);

  const existingDept = await DepartmentModel.find({});
  console.log(existingDept)
  for (let csvObject of csvObjects) {
    console.log(csvObject)

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
