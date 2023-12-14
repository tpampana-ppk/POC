import { ISiteDocument } from './../../types/types';
import SiteModel from './../../schema/site-schema';
import statusModel from "../../schema/job-schema";
import { LineItem } from '../../types/application_types';
import { siteCheck } from '../Existing-Data/DataCheck';


export const site = async (email: string, csvObjects: LineItem[]) => {
  

  for (let csvObject of csvObjects) {

    const isPresent=await siteCheck(csvObject);
    if (!isPresent) {
      let data = new SiteModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'sites added' } });
    }
  }
  return "success";
};



export const siteData =async(element:LineItem)=>{
  return await SiteModel.findOne({siteName:element.siteName});
}