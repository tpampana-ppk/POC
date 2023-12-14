// // // import { TextField, Button, Select, MenuItem, FormControl, InputLabel, Container, Grid, SelectChangeEvent } from '@mui/material';

// // // import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
// // // import axios from 'axios';

// // // const url=`http://localhost:5000`;

// // // interface CsvData {
// // //   [key: string]: string;
// // // }

// // // const EmailAndFileForm= () => {
// // //   const [email, setEmail] = useState<string>('');
// // //   const [file, setFile] = useState<File | null>(null);
// // //   const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
// // //   const [selectedFileType, setSelectedFileType] =useState<string>(''); 

// // //   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
// // //     setEmail(e.target.value);
// // //   };

// // //   const handleFileTypeChange = (event: SelectChangeEvent<string>) => {
// // //     setSelectedFileType(event.target.value);
// // //   };

// // //   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
// // //     const selectedFile = e.target.files && e.target.files[0];
// // //     setFile(selectedFile);
// //   // };
// //   // useEffect(() => {
// //   //   if (file) {
// //   //     const reader = new FileReader();

// //   //     reader.onload = (event) => {
// //   //       if (event.target?.result) {
// //   //         const csvData = event.target.result as string;

// //   //         const lines = csvData.split('\n');
// //   //         const header = lines[0].trim().split(',');

// //   //         const newArray = lines.slice(1).map((line) => {
// //   //           const values = line.trim().split(',');

// //   //           const obj: Record<string, string> = {};
// //   //           header.forEach((key, index) => {
// //   //             obj[key] = values[index];
// //   //           });

// //   //           return obj;
// //   //         });

// //   //         setCsvObjects(newArray);
// //   //       }
// //   //     };

// //   //     reader.readAsText(file);
// //   //   }

// //   // }, [file]);


// // //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await axios.post(url+'/admin/post',{email,selectedFileType,csvObjects});

// // //       console.log('Backend Response:', response.data);

// // //       setEmail('');
// // //       setFile(null);
// // //       setCsvObjects([]);
// // //       setSelectedFileType('');

// // //     } catch (error) {
// // //       console.error('Error sending data to backend:', error);
// // //     }
// // //   };

// // //   return (
// // //     <Container>
// // //     <form onSubmit={handleSubmit}>
// // //       <Grid container spacing={2}>
// // //         <Grid item xs={12}>
// // //           <TextField
// // //             label="Email"
// // //             type="email"
// // //             value={email}
// // //             onChange={handleEmailChange}
// // //             fullWidth
// // //             required
// // //           />
// // //         </Grid>
// // //         <Grid item xs={12}>
// // //             <FormControl fullWidth>
// // //               <InputLabel>Select File Type</InputLabel>
// // //               <Select
// // //                 name="filetype"
// // //                 value={selectedFileType}
// // //                 onChange={handleFileTypeChange}
// // //                 required
// // //               >
// // //                 <MenuItem value="">Select Type</MenuItem>
// // //                 <MenuItem value="employee">Employee</MenuItem>
// // //                 <MenuItem value="department">Department</MenuItem>
// // //                 <MenuItem value="site">Site</MenuItem>
// // //               </Select>
// // //             </FormControl>
// // //           </Grid>

// // //         <Grid item xs={12}>
// // //           <input
// // //             id="file"
// // //             type="file"
// // //             onChange={handleFileChange}
// // //             accept=".csv"
// // //             style={{ display: 'none' }}
// // //           />
// // //           <label htmlFor="file">
// // //             <Button component="span">
// // //               Upload File
// // //             </Button>
// // //           </label>
// // //         </Grid>
// // //         <Grid item xs={12}>
// // //           <Button type="submit" variant="contained" color="primary">
// // //             Submit
// // //           </Button>
// // //         </Grid>
// // //       </Grid>
// // //     </form>
// // //   </Container>
// // //   );
// // // };

// // // export default EmailAndFileForm;

















































// // // // import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
// // // // import axios from 'axios';

// // // // interface CsvData {
// // // //   [key: string]: string;
// // // // }

// // // // const EmailAndFileForm: React.FC = () => {
// // // //   const [email, setEmail] = useState<string>('');
// // // //   const [file, setFile] = useState<File | null>(null);
// // // //   const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
// // // //   const [selectedFileType, setSelectedFileType] =useState<string>(''); // Initialize with an empty string or default value

// // // //   const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
// // // //     setEmail(e.target.value);
// // // //   };

// // // //   const handleFileTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
// // // //     setSelectedFileType(event.target.value);
// // // //   };

// // // //   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
// // // //     const selectedFile = e.target.files && e.target.files[0];
// // // //     setFile(selectedFile);
// // // //   };
// //   // useEffect(()=>{
// //   //   if (file) {
// //   //     const reader = new FileReader();
// //   //     reader.onload = (event) => {
// //   //       if (event.target?.result) {
// //   //         const csvData = event.target.result as string;
// //   //         console.log('CSV Data:', csvData);

// //   //         const lines = csvData.split('\n');
// //   //         const header = lines[0].trim().split(','); // Extract header
// //   //         const newCsvObjects: CsvData[] = lines.slice(1).map((line) => {
// //   //           const values = line.trim().split(',');
// //   //           const csvObject: CsvData = {};
// //   //           header.forEach((key, index) => {
// //   //             csvObject[key] = values[index];
// //   //           });
// //   //           return csvObject;
// //   //         });
// //   //         setCsvObjects(newCsvObjects);
// //   //       }
// //   //     };
// //   //     reader.readAsText(file);
// //   //   }
// //   // },[file])

// // // //   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
// // // //     e.preventDefault();

// // // //     try {
// // // //       const response = await axios.post('http://localhost:5000/admin/post',{email,selectedFileType,csvObjects});

// // // //       console.log('Backend Response:', response.data);

// // // //     setEmail('');
// // // //     setFile(null);
// // // //     setCsvObjects([]);
// // // //     setSelectedFileType('');

// // // //     } catch (error) {
// // // //       console.error('Error sending data to backend:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <div>
// // // //           <label>Email:</label>
// // // //           <input
// // // //             type="email"
// // // //             value={email}
// // // //             onChange={handleEmailChange}
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //         <div>
// // // //       <label>Select File Type:</label>
// // // //       <select name='filetype' value={selectedFileType} onChange={handleFileTypeChange}>
// // // //         <option>select type</option>
// // // //         <option value='employee'>employee</option>
// // // //         <option value='department'>department</option>
// // // //         <option value='site'>site</option>
// // // //       </select>
// // // //     </div>
// // // //           <label>File:</label>
// // // //           <input
// // // //             type="file"
// // // //             onChange={handleFileChange}
// // // //             accept=".csv"
// // // //             required
// // // //           />
// // // //         </div>
// // // //         <div>
// // // //           <button type="submit">Submit</button>
// // // //         </div>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default EmailAndFileForm;









// // import React from 'react';
// // import { Input, Button, Select, Upload, Form, message, Space, Row, Col } from 'antd';
// // import { UploadOutlined } from '@ant-design/icons';
// // import { useState, useEffect } from 'react';
// // import axios from 'axios';

// // const { Option } = Select;

// // const url = 'http://localhost:5000';

// // interface CsvData {
// //   [key: string]: string;
// // }

// // const EmailAndFileForm = () => {
// //   const [form] = Form.useForm();
// //   const [email, setEmail] = useState<string>('');
// //   const [file, setFile] = useState<File | null>(null);
// //   const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
// //   const [selectedFileType, setSelectedFileType] = useState<string>('');

// //   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setEmail(e.target.value);
// //   };

// //   const handleFileTypeChange = (value: string) => {
// //     setSelectedFileType(value);
// //   };

// //   const handleFileChange = (info: any) => {
// //     if (info.fileList.length === 0) {
// //       setFile(null);
// //     } else {
// //       setFile(info.file.originFileObj);
// //     }
// //   };

// // useEffect(() => {
// //   console.log('File:', file);

// //   if (file) {
// //     const reader = new FileReader();

// //     reader.onload = (event) => {
// //       console.log('OnLoad Event:', event);

// //       if (event.target?.result) {
// //         const csvData = event.target.result as string;

// //         console.log('CSV Data:', csvData);

// //         const lines = csvData.split('\n');
// //         const header = lines[0].trim().split(',');

// //         const newArray = lines.slice(1).map((line) => {
// //           const values = line.trim().split(',');

// //           const obj: Record<string, string> = {};
// //           header.forEach((key, index) => {
// //             obj[key] = values[index];
// //           });

// //           return obj;
// //         });

// //         console.log('New Array:', newArray);

// //         setCsvObjects(newArray);
// //       }
// //     };

// //     reader.readAsText(file);
// //   }
// // }, [file]);


// //   console.log(csvObjects)

// //   const handleSubmit = async () => {
// //     try {
// //       const response = await axios.post(url + '/admin/post', {
// //         email,
// //         selectedFileType,
// //         csvObjects,
// //       });

// //       message.success('Backend Response: ' + response.data);

// //       form.resetFields();
// //       setEmail('');
// //       setFile(null);
// //       setCsvObjects([]);
// //       setSelectedFileType('');
// //     } catch (error) {
// //       console.error('Error sending data to backend:', error);
// //     }
// //   };
// //   return(
// //   <Space direction="vertical" size="large">
// //   <Row gutter={[16, 16]}>
// //     <Col xs={24} sm={12} md={8}>
// //       <Form form={form} onFinish={handleSubmit}>
// //         <Form.Item
// //           label="Email"
// //           name="email"
// //           rules={[{ required: true, type: 'email' }]}
// //           style={{ width: '20rem' }} // Increase the width as needed
// //         >
// //           <Input value={email} onChange={handleEmailChange} />
// //         </Form.Item>

// //         <Form.Item
// //           label="Select File Type"
// //           name="filetype"
// //           rules={[{ required: true }]}
// //           style={{ width: '20rem' }} // Increase the width as needed
// //         >
// //           <Select onChange={handleFileTypeChange} placeholder="Select Type">
// //             <Option value="employee">Employee</Option>
// //             <Option value="department">Department</Option>
// //             <Option value="site">Site</Option>
// //           </Select>
// //         </Form.Item>

// //         <Form.Item
// //   label="Upload File"
// //   name="file"
// //   rules={[{ required: true }]}
// //   style={{ width: '80%' }} // Increase the width as needed
// // >
// //   <Upload
// //     onChange={handleFileChange}
// //     accept=".csv"
// //     showUploadList={false}
// //   >
// //     <Button icon={<UploadOutlined />}>Upload File</Button>
// //   </Upload>
// // </Form.Item>


// //         <Form.Item>
// //           <Button type="primary" htmlType="submit">
// //             Submit
// //           </Button>
// //         </Form.Item>
// //       </Form>
// //     </Col>
// //   </Row>
// // </Space>
// // );
// // };


// // export default EmailAndFileForm;










// import React from 'react';
// import { Input, Button, Select, Upload, Form, message, Row, Col } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const { Option } = Select;

// const url = 'http://localhost:5000';

// interface CsvData {
//   [key: string]: string;
// }

// const EmailAndFileForm = () => {
//   const [form] = Form.useForm();
//   const [email, setEmail] = useState<string>('');
//   const [file, setFile] = useState<File | null>(null);
//   const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
//   const [selectedFileType, setSelectedFileType] = useState<string>('');

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleFileTypeChange = (value: string) => {
//     setSelectedFileType(value);
//   };

//   const handleFileChange = (info: any) => {
//     if (info.fileList.length === 0) {
//       setFile(null);
//     } else {
//       setFile(info.file.originFileObj);
//     }
//   };

//   useEffect(() => {
//     console.log('File:', file);

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         if (event.target?.result) {
//           const csvData = event.target.result as string;

//           const lines = csvData.split('\n');
//           const header = lines[0].trim().split(',');

//           const newArray = lines.slice(1).map((line) => {
//             const values = line.trim().split(',');

//             const obj: Record<string, string> = {};
//             header.forEach((key, index) => {
//               obj[key] = values[index];
//             });
//             return obj;
//           });
//           setCsvObjects(newArray);
//         }
//       };

//       reader.readAsText(file);
//     }
//   }, [file]);

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(url + '/admin/post', {
//         email,
//         selectedFileType,
//         csvObjects,
//       });

//       message.success('Backend Response: ' + response.data);

//       form.resetFields();
//       setEmail('');
//       setFile(null);
//       setCsvObjects([]);
//       setSelectedFileType('');
//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//     }
//   };

//   return (
//     <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
//       <Col xs={24} sm={18} md={12} lg={8}>
//         <div style={{ border: '1px solid #d9d9d9', borderRadius: '8px', padding: '20px', width: '20rem' }}>
//           <Form form={form} onFinish={handleSubmit}>
//             <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
//               <Input value={email} onChange={handleEmailChange} />
//             </Form.Item>

//             <Form.Item label="Select File Type" name="filetype" rules={[{ required: true }]}>
//               <Select onChange={handleFileTypeChange} placeholder="Select Type">
//                 <Option value="employee">Employee</Option>
//                 <Option value="department">Department</Option>
//                 <Option value="site">Site</Option>
//               </Select>
//             </Form.Item>
//             <Form.Item>
//               <Upload
//                 onChange={handleFileChange}
//                 accept=".csv"
//                 showUploadList={false}
//               >
//                 <Button icon={<UploadOutlined />}>Upload File</Button>
//               </Upload>
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default EmailAndFileForm;














// import React from 'react';
// import { Input, Button, Select, Upload, Form, message, Row, Col } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const { Option } = Select;

// const url = 'http://localhost:5000';

// interface CsvData {
//   [key: string]: string;
// }
// const EmailAndFileForm = () => {
//   const [form] = Form.useForm();
//   const [email, setEmail] = useState<string>('');
//   const [file, setFile] = useState<File | null>(null);
//   const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
//   const [selectedFileType, setSelectedFileType] = useState<string>('');

//   const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(e.target.value);
//   };

//   const handleFileTypeChange = (value: string) => {
//     setSelectedFileType(value);
//   };

//   const handleFileChange = (info: any) => {
//     if (info.fileList.length === 0) {
//       setFile(null);
//     } else {
//       setFile(info.file.originFileObj);
//     }
//   };

//   useEffect(() => {
//     if (file) {
//       const reader = new FileReader();

//       reader.onload = (event) => {
//         if (event.target?.result) {
//           const csvData = event.target.result as string;

//           const lines = csvData.split('\n');
//           const header = lines[0].trim().split(',');

//           const newArray = lines.slice(1).map((line) => {
//             const values = line.trim().split(',');

//             const obj: Record<string, string> = {};
//             header.forEach((key, index) => {
//               obj[key] = values[index];
//             });

//             return obj;
//           });

//           setCsvObjects(newArray);
//         }
//       };

//       reader.readAsText(file);
//     }
//   }, [file]);

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(url + '/admin/post', {
//         email,
//         selectedFileType,
//         csvObjects,
//       });

//       message.success('Backend Response: ' + response.data);

//       form.resetFields();
//       setEmail('');
//       setFile(null);
//       setCsvObjects([]);
//       setSelectedFileType('');
//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//     }
//   };

//   return (
//     <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
//       <Col xs={24} sm={18} md={12} lg={8}>
//         <div style={{ border: '1px solid #d9d9d9', borderRadius: '8px', padding: '20px', width:'20rem' }}>
//           <Form form={form} onFinish={handleSubmit}>
//             <Form.Item
//               label="Email"
//               name="email"
//               rules={[
//                 { required: true, message: 'Please enter your email address' },
//                 { type: 'email', message: 'Please enter a valid email address' },
//               ]}
//             >
//               <Input value={email} onChange={handleEmailChange} />
//             </Form.Item>

//             <Form.Item
//               label="Select File Type"
//               name="filetype"
//               rules={[{ required: true, message: 'Please select a file type' }]}
//             >
//               <Select onChange={handleFileTypeChange} placeholder="Select Type">
//                 <Option value="employee">Employee</Option>
//                 <Option value="department">Department</Option>
//                 <Option value="site">Site</Option>
//               </Select>
//             </Form.Item>

//             <Form.Item
//               label="Upload File"
//               name="file"
//               rules={[
//                 { required: true, message: 'Please upload a CSV file' },
//                 {
//                   validator: (_, value) => {
//                     if (value && value.type !== 'text/csv') {
//                       return Promise.reject(new Error('Only CSV files are allowed'));
//                     }
//                     return Promise.resolve();
//                   },
//                 },
//               ]}
//             >
//               <Upload beforeUpload={() => false} onChange={handleFileChange} accept=".csv" showUploadList={false}>
//                 <Button icon={<UploadOutlined />}>Upload File</Button>
//               </Upload>
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Submit
//               </Button>
//             </Form.Item>
//           </Form>
//         </div>
//       </Col>
//     </Row>
//   );
// };

// export default EmailAndFileForm;












import React from 'react';
import { Input, Button, Select, Upload, Form, message, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import axios from 'axios';

const { Option } = Select;

const url = 'http://localhost:5000';

interface CsvData {
  [key: string]: string;
}

const EmailAndFileForm = () => {
  const [form] = Form.useForm();
  const [email, setEmail] = useState<string>('');
  const [file, setFile] = useState<File | null>(null);
  const [csvObjects, setCsvObjects] = useState<CsvData[]>([]);
  const [selectedFileType, setSelectedFileType] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleFileTypeChange = (value: string) => {
    setSelectedFileType(value);
  };

  const handleFileChange = (info: any) => {
    if (info.fileList.length === 0) {
      setFile(null);
    } else {
      setFile(info.file.originFileObj);
    }
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

  const beforeUpload = (file: File) => {
    const isCSV = file.type === 'text/csv';
    if (!isCSV) {
      message.error('You can only upload CSV files!');
    }
    return isCSV;
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(url + '/admin/post', {
        email,
        selectedFileType,
        csvObjects,
      });

      message.success('Backend Response: ' + response.data.message);

      form.resetFields();
      setEmail('');
      setFile(null);
      setCsvObjects([]);
      setSelectedFileType('');
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  const fileCheck = () =>{

  }
  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={24} sm={18} md={12} lg={8}>
        <div style={{ border: '1px solid #d9d9d9', borderRadius: '8px', padding: '20px', width: '20rem' }}>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
              <Input value={email} onChange={handleEmailChange} />
            </Form.Item>

            <Form.Item label="Select File Type" name="filetype" rules={[{ required: true }]}>
              <Select onChange={handleFileTypeChange} placeholder="Select Type">
                <Option value="employee">Employee</Option>
                <Option value="department">Department</Option>
                <Option value="site">Site</Option>
              </Select>
            </Form.Item>

           <Form.Item name='file' rules={[{ required: true }]}>
              <Upload beforeUpload={beforeUpload} onChange={handleFileChange} accept=".csv" showUploadList={false}>
                <Button onClick={fileCheck} icon={<UploadOutlined />}>
                  Upload CSV File
                </Button>
              </Upload>
          </Form.Item>



            


            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default EmailAndFileForm;
