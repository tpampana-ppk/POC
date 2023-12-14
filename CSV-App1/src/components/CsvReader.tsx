import React from 'react';
import { Input, Button, Select, Upload, Form, message, Row, Col } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { postdata } from '../API-Calls/apiCalls';

const { Option } = Select;


export type CsvData ={
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
      const response=await postdata(email,selectedFileType,csvObjects);

      message.success('Backend Response: ' + response);

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
