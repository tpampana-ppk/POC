import { IDepartmentDocument } from './../../types/types';
import { LineItem } from '../../types/application_types';
import DepartmentModel from "../../schema/department-schema";
import statusModel from "../../schema/job-schema";
import { deptCheck } from '../Existing-Data/DataCheck';


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
  return "success";
};


export const deptData =async(element:LineItem)=>{
  return await DepartmentModel.findOne({deptName:element.deptName});
}