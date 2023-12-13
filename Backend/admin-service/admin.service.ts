import statusModel from "../schema/job-schema";
import { CsvData } from "../types/types";
import { employee } from "./operations/Employee";
import { department } from "./operations/Department";
import { site } from "./operations/Site";
export const postdata = async(email:string,selectedFileType:string,csvObjects:CsvData[]) =>{

    const data = new statusModel({ email });
    await data.save();

    switch (selectedFileType) {
      case 'site':
        console.log('site')
        return await site(email, csvObjects);
      case 'department':
        console.log('dep')
        return await department(email, csvObjects);
      case 'employee':
        console.log('emp')
        return await employee(email, csvObjects);
      default:
        return 'Invalid type';
    }
    
}