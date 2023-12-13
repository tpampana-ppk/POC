import DepartmentModel from "../../schema/department-schema";
import EmployeeModel from "../../schema/employee-schema";
import statusModel from "../../schema/job-schema";
import SiteModel from "../../schema/site-schema";
import { Types } from "mongoose";
import { CsvData } from "../../types/types";
import { siteCheck } from "./Site";

export const employee =async (email:string,csvObjects:CsvData[]) =>{

    const processData = async (element: CsvData) => {
      try {
        //checking dept exists or not
        const deptData = await siteCheck(element);

        const isDeptPresent = deptData.hasOwnProperty(element.siteName);

        let department;
        if (!isDeptPresent) {
          const deptno = new Types.ObjectId();
          department = await DepartmentModel.create({
            deptNo: deptno.toString(),
            deptName: element.deptName,
          });
        }
        //checking site exists or not
        const siteData = await siteCheck(element);

        let isPresent = siteData.hasOwnProperty(element.siteName);

        let site;
        if (!isPresent) {
          const siteno = new Types.ObjectId();
            site=await SiteModel.create({
            siteNo: siteno.toString(),
            siteName: element.siteName,
          });
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