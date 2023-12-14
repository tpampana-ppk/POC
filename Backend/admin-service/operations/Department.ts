import { IDepartmentDocument } from './../../types/types';
import { LineItem } from '../../types/application_types';
import DepartmentModel from "../../schema/department-schema";
import statusModel from "../../schema/job-schema";


export const department = async (email: string, csvObjects: LineItem[]) => {
  const deptData = await siteCheck();

  for (let csvObject of csvObjects) {
    const isPresent = deptData.hasOwnProperty(csvObject.siteName);

    if (!isPresent) {
      let data = new DepartmentModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'sites added' } });
    }
  }
};

export const siteCheck = async (): Promise<Record<string, IDepartmentDocument>> => {
  const existingSites = await DepartmentModel.find({});

  return existingSites.reduce((acc, site) => {
    if (site.deptName) {
      (acc as Record<string, IDepartmentDocument>)[site.deptName] = site;
    }
    return acc;
  }, {} as Record<string, IDepartmentDocument>);
};
