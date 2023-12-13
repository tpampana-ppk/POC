import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Container, Grid, SelectChangeEvent } from '@mui/material';

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';

const url=`http://localhost:5000`;

interface CsvData {
  [key: string]: string;
}

const EmailAndFileForm= () => {
  const [email, setEmail] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
  const [selectedFileType, setSelectedFileType] =useState<string>(''); 

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFileTypeChange = (event: SelectChangeEvent<string>) => {
    setSelectedFileType(event.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    setFile(selectedFile);
  };
  useEffect(() => {
    if (file) {
      const reader = new FileReader();
    
      reader.onload = (event) => {
        if (event.target?.result) {
          const csvData = event.target.result as string;
    
          const lines = csvData.split('\n');
          const header = lines[0].trim().split(',');
    
          const newArray = lines.slice(1).map((line) => {
            const values = line.trim().split(',');
    
            // Create an object dynamically based on the header
            const obj: Record<string, string> = {};
            header.forEach((key, index) => {
              obj[key] = values[index];
            });
    
            return obj;
          });
    
          setCsvObjects(newArray);
        }
      };
    
      reader.readAsText(file);
    }
    
  }, [file]);
  

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(url+'/admin/post',{email,selectedFileType,csvObjects});

      console.log('Backend Response:', response.data);

      setEmail('');
      setFile(null);
      setCsvObjects([]);
      setSelectedFileType('');

    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Select File Type</InputLabel>
              <Select
                name="filetype"
                value={selectedFileType}
                onChange={handleFileTypeChange}
                required
              >
                <MenuItem value="">Select Type</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
                <MenuItem value="department">Department</MenuItem>
                <MenuItem value="site">Site</MenuItem>
              </Select>
            </FormControl>
          </Grid>

        <Grid item xs={12}>
          <input
            id="file"
            type="file"
            onChange={handleFileChange}
            accept=".csv"
            style={{ display: 'none' }}
          />
          <label htmlFor="file">
            <Button component="span">
              Upload File
            </Button>
          </label>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
  );
};

export default EmailAndFileForm;

















































// import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
// import axios from 'axios';

// interface CsvData {
//   [key: string]: string;
// }

// const EmailAndFileForm: React.FC = () => {
//   const [email, setEmail] = useState<string>('');
//   const [file, setFile] = useState<File | null>(null);
//   const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
//   const [selectedFileType, setSelectedFileType] =useState<string>(''); // Initialize with an empty string or default value

//   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleFileTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedFileType(event.target.value);
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const selectedFile = e.target.files && e.target.files[0];
//     setFile(selectedFile);
//   };
//   useEffect(()=>{
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         if (event.target?.result) {
//           const csvData = event.target.result as string;
//           console.log('CSV Data:', csvData);

//           const lines = csvData.split('\n');
//           const header = lines[0].trim().split(','); // Extract header
//           const newCsvObjects: CsvData[] = lines.slice(1).map((line) => {
//             const values = line.trim().split(',');
//             const csvObject: CsvData = {};
//             header.forEach((key, index) => {
//               csvObject[key] = values[index];
//             });
//             return csvObject;
//           });
//           setCsvObjects(newCsvObjects);
//         }
//       };
//       reader.readAsText(file);
//     }
//   },[file])

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/admin/post',{email,selectedFileType,csvObjects});

//       console.log('Backend Response:', response.data);

//     setEmail('');
//     setFile(null);
//     setCsvObjects([]);
//     setSelectedFileType('');

//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//             required
//           />
//         </div>
//         <div>
//         <div>
//       <label>Select File Type:</label>
//       <select name='filetype' value={selectedFileType} onChange={handleFileTypeChange}>
//         <option>select type</option>
//         <option value='employee'>employee</option>
//         <option value='department'>department</option>
//         <option value='site'>site</option>
//       </select>
//     </div>
//           <label>File:</label>
//           <input
//             type="file"
//             onChange={handleFileChange}
//             accept=".csv"
//             required
//           />
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EmailAndFileForm;
