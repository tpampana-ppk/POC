import { ISiteDocument } from './../../types/types';
import SiteModel from './../../schema/site-schema';
import statusModel from "../../schema/job-schema";
import { LineItem } from '../../types/application_types';


export const site = async (email: string, csvObjects: LineItem[]) => {
  

  for (let csvObject of csvObjects) {

    const isPresent=await siteCheck(csvObject);
    if (!isPresent) {
      let data = new SiteModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'sites added' } });
    }
  }
};


export const siteCheck = async ( csvObject:LineItem): Promise<boolean> => {
  const existingDepts = await SiteModel.find({});
    
  const deptData = existingDepts.reduce((acc, dept) => {
    if (dept.siteName) {
      (acc as Record<string, ISiteDocument>)[dept.siteName] = dept;
    }
    return acc;
  }, {} as Record<string, ISiteDocument>);
  
  const data=deptData.hasOwnProperty(csvObject.siteName);
  console.log(csvObject.siteName)
  return data;
};