import axios from "axios";
import { CsvData } from "../components/CsvReader";

const url = 'http://localhost:5000';

export const postdata =async (email:string,selectedFileType:string,csvObjects:CsvData[])=>{
    const response = await axios.post(url + '/admin/post', {
        email,
        selectedFileType,
        csvObjects,
    });
      return response.data.message
}