import { ISiteDocument, CsvData } from './../../types/types';
import SiteModel from './../../schema/site-schema';
import statusModel from "../../schema/job-schema";


export const site = async (email: string, csvObjects: CsvData[]) => {
  

  for (let csvObject of csvObjects) {

    const isPresent=await siteCheck(csvObject);
    if (!isPresent) {
      let data = new SiteModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'sites added' } });
    }
  }
};
export const siteCheck = async ( csvObject:CsvData): Promise<boolean> => {
  const existingSites = await SiteModel.find({});

  const siteData =existingSites.reduce((acc, site) => {
    if (site.siteName) {
      (acc as Record<string, ISiteDocument>)[site.siteName] = site;
    }
    return acc;
  }, {} as Record<string, ISiteDocument>);

  const data=siteData.hasOwnProperty(csvObject.siteName);
  return data;
};

