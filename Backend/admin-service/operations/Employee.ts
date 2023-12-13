import DepartmentModel from "../../schema/department-schema";
import EmployeeModel from "../../schema/employee-schema";
import statusModel from "../../schema/job-schema";
import SiteModel from "../../schema/site-schema";
import { CsvData } from "../../types/types";
import { Types } from "mongoose";


export const employee =async (email:string,csvObjects:CsvData[]) =>{

    const processData = async (element: CsvData) => {
      try {
        let department = await DepartmentModel.findOne({ deptName: element.deptName });
    
        if (!department) {
          const count = await DepartmentModel.countDocuments({});
          const deptno = new Types.ObjectId();
          department = await DepartmentModel.create({
            deptNo: deptno.toString(),
            deptName: element.deptName,
          });
        }
    
        let site = await SiteModel.findOne({ siteName: element.siteName });
    
        if (!site) {
          const siteno = new Types.ObjectId();
          site = await SiteModel.create({
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
      console.log(element)
      await processData(element);
    }
}