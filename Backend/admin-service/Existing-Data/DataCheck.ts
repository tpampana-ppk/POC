import DepartmentModel from '../../schema/department-schema';
import EmployeeModel from '../../schema/employee-schema';
import SiteModel from '../../schema/site-schema';
import { LineItem } from '../../types/application_types';
import { IDepartmentDocument, IEmployee, ISiteDocument } from '../../types/types';



export const deptCheck = async ( csvObject:LineItem): Promise<boolean> => {
    const existingDepts = await DepartmentModel.find({});
      
    const deptData = existingDepts.reduce((acc, dept) => {
      if (dept.deptName) {
        (acc as Record<string, IDepartmentDocument>)[dept.deptName] = dept;
      }
      return acc;
    }, {} as Record<string, IDepartmentDocument>);
    
    const data=deptData.hasOwnProperty(csvObject.deptName);
    return data;
  };
  

  export const siteCheck = async ( csvObject:LineItem): Promise<boolean> => {
    const existingDepts = await SiteModel.find({});
      
    const deptData = existingDepts.reduce((acc, dept) => {
      if (dept.siteName) {
        (acc as Record<string, ISiteDocument>)[dept.siteName] = dept;
      }
      return acc;
    }, {} as Record<string, ISiteDocument>);
    
    const data=deptData.hasOwnProperty(csvObject.siteName);
    return data;
  };
  

  export const empCheck = async ( csvObject:LineItem): Promise<boolean> => {
    const existingDepts = await EmployeeModel.find({});
      
    const deptData = existingDepts.reduce((acc, emp) => {
      if (emp.empId) {
        (acc as Record<string, IEmployee>)[emp.empId] = emp;
      }
      return acc;
    }, {} as Record<string, IEmployee>);
    const data=deptData.hasOwnProperty(csvObject.empId);
    return data;
  };
  