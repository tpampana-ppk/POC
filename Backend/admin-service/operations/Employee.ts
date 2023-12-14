import DepartmentModel from "../../schema/department-schema";
import EmployeeModel from "../../schema/employee-schema";
import statusModel from "../../schema/job-schema";
import SiteModel from "../../schema/site-schema";
import { Types } from "mongoose";
import { LineItem } from '../../types/application_types';
import { siteData } from "./Site";
import { deptData } from "./Department";
import { deptCheck, empCheck, siteCheck } from "../Existing-Data/DataCheck";

export const employee =async (email:string,csvObjects:LineItem[]) =>{

    const processData = async (element: LineItem) => {
      try {

        const deptPresent = await deptCheck(element);
        
        let department=await deptData(element); ;

        if (!deptPresent) {
          const deptno = new Types.ObjectId();
          await DepartmentModel.create({
            deptNo: deptno.toString(),
            deptName: element.deptName,
          });
          department =await deptData(element); //department.ts
        }
        //checking site exists or not
        const sitePresent = await siteCheck(element);

        let site =await siteData(element);
        if (!sitePresent) {
          const siteno = new Types.ObjectId();
            await SiteModel.create({
            siteNo: siteno.toString(),
            siteName: element.siteName,
          });
          
          site =await siteData(element) //site.ts
        }

        const empPresent = await empCheck(element);

        if (!empPresent) {
          const employeeData = {
            empId:element.empId,
            empFirstName: element.empFirstName,
            empLastName: element.empLastName,
            departmentId: department!.deptNo,
            siteId: site!.siteNo,
          };
            
          const newEmployee = new EmployeeModel(employeeData);
          await newEmployee.save();
        }
    
        await statusModel.updateOne({ email: email }, { $set: { status: 'success', description: 'employees added' } });
        return "success";
      } catch (error) {
        console.error('Error processing employee data:', error);
        return error;
      }
    };
    
    for (const element of csvObjects) {
      await processData(element);
    }
}