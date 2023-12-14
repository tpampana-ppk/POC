
export type IDepartmentDocument = {
    deptNo:string;
    deptName: string;
  }
  

export type IEmployee =  {
    empFirstName: string;
    empLastName: string;
    departmentId: string; 
    siteId: string;       
}
  
export type StatusDocument  = {
    email: string;
    status: string;
    description:string;
  }

export type ISiteDocument  = {
    siteNo: string;
    siteName: string;
  }