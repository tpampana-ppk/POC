import statusModel from "../../schema/job-schema";
import SiteModel from "../../schema/site-schema";
import { CsvData } from "../../types/types";

  
  
export const site = async(email:string,csvObjects:CsvData[]) =>{  
    for (const csvObject of csvObjects) {
      const existingSite = await SiteModel.findOne({ siteName: csvObject.siteName });
      if (!existingSite) 
        await SiteModel.create(csvObject);
        await statusModel.updateOne({ email: email }, { $set: { description: 'sites added' } });
    }
}