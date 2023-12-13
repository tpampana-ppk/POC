import { ISiteDocument } from './../../types/types';
import SiteModel from './../../schema/site-schema';
import statusModel from "../../schema/job-schema";
import { CsvData } from "../../types/types";


export const site = async (email: string, csvObjects: CsvData[]) => {
  const siteData = await siteCheck();

  for (let csvObject of csvObjects) {
    const isPresent = siteData.hasOwnProperty(csvObject.siteName);

    if (!isPresent) {
      let data = new SiteModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'sites added' } });
    }
  }
};

export const siteCheck = async (): Promise<Record<string, ISiteDocument>> => {
  const existingSites = await SiteModel.find({});

  return existingSites.reduce((acc, site) => {
    if (site.siteName) {
      (acc as Record<string, ISiteDocument>)[site.siteName] = site;
    }
    return acc;
  }, {} as Record<string, ISiteDocument>);
};
