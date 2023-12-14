import statusModel from "../schema/job-schema";
import { LineItem } from "../types/application_types";
import { employee } from "./operations/Employee";
import { department } from "./operations/Department";
import { site } from "./operations/Site";
export const postdata = async(email:string,selectedFileType:string,csvObjects:LineItem[]) =>{

    const data = new statusModel({ email });
    await data.save();

    switch (selectedFileType) {
      case 'site':
        return await site(email, csvObjects);
      case 'department':
        return await department(email, csvObjects);
      case 'employee':
        return await employee(email, csvObjects);
      default:
        return 'Invalid type';
    }
    
}