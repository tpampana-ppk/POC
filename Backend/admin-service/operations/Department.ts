import { IDepartmentDocument } from './../../types/types';
import { LineItem } from '../../types/application_types';
import DepartmentModel from "../../schema/department-schema";
import statusModel from "../../schema/job-schema";


export const department = async (email: string, csvObjects: LineItem[]) => {

  for (let csvObject of csvObjects) {

    const deptData = await deptCheck(csvObject);

    const isPresent = deptData.hasOwnProperty(csvObject.siteName);

    if (!isPresent) {
      let data = new DepartmentModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'sites added' } });
    }
  }
};

export const deptCheck = async ( csvObject:LineItem): Promise<boolean> => {
  const existingDepts = await DepartmentModel.find({});
    
  const deptData = existingDepts.reduce((acc, dept) => {
    if (dept.deptName) {
      (acc as Record<string, IDepartmentDocument>)[dept.deptName] = dept;
    }
    return acc;
  }, {} as Record<string, IDepartmentDocument>);
  
  const data=deptData.hasOwnProperty(csvObject.deptName);
  console.log(csvObject.deptName)
  console.log(data);
  return data;
};

export const deptData =async(element:LineItem)=>{
  return await DepartmentModel.findOne({deptName:element.deptName});
}