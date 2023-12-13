export type CsvData = {
    [key: string]: string;
};  

export interface IDepartmentDocument extends Document {
    deptNo:string;
    deptName: string;
  }
  

export interface IEmployee extends Document {
    empFirstName: string;
    empLastName: string;
    departmentId: string; 
    siteId: string;       
}
  

export interface StatusDocument extends Document {
    email: string;
    status: string;
    description:string;
  }

export interface ISiteDocument extends Document {
    siteNo: string;
    siteName: string;
  }