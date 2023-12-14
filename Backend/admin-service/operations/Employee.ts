import DepartmentModel from "../../schema/department-schema";
import EmployeeModel from "../../schema/employee-schema";
import statusModel from "../../schema/job-schema";
import SiteModel from "../../schema/site-schema";
import { Types } from "mongoose";
import { LineItem } from '../../types/application_types';
import { siteCheck, siteData } from "./Site";
import { deptCheck, deptData } from "./Department";

export const employee =async (email:string,csvObjects:LineItem[]) =>{

    const processData = async (element: LineItem) => {
      try {

        const deptPresent = await deptCheck(element);
        
        let department ;

        if (!deptPresent) {
          const deptno = new Types.ObjectId();
          await DepartmentModel.create({
            deptNo: deptno.toString(),
            deptName: element.deptName,
          });
          department = deptData(element); //department.ts
        }
        //checking site exists or not
        const sitePresent = await siteCheck(element);

        let site;
        if (!sitePresent) {
          const siteno = new Types.ObjectId();
            await SiteModel.create({
            siteNo: siteno.toString(),
            siteName: element.siteName,
          });
          
          site = siteData(element) //site.ts
        }
    
        const employeeData = {
          empFirstName: element.empFirstName,
          empLastName: element.empLastName,
          departmentId: department!.deptNo,
          siteId: site!.siteNo,
        };
          
        const newEmployee = new EmployeeModel(employeeData);
        await newEmployee.save();
        await statusModel.updateOne({ email: email }, { $set: { status: 'success', description: 'employees added' } });
      } catch (error) {
        console.error('Error processing employee data:', error);
      }
    };
    
    for (const element of csvObjects) {
      await processData(element);
    }
}