
import { ISiteDocument } from './../../schema/site-schema';
import SiteModel from './../../schema/site-schema';
import statusModel from "../../schema/job-schema";
import { CsvData } from "../../types/types";

export const site = async (email: string, csvObjects: CsvData[]) => {
  console.log(true);

  const existingDept = await SiteModel.find({});
  console.log(existingDept)
  for (let csvObject of csvObjects) {

    function isNamePresent(array : ISiteDocument[], targetName:string) {
      return array.some(person => person.siteName === targetName);
    }

    const isPresent = isNamePresent(existingDept, csvObject.deptName);

    if (!isPresent) {
      let data = new SiteModel(csvObject);
      await data.save();
      await statusModel.updateOne({ email: email }, { $set: { description: 'departments added' } });
    }
  }
};

