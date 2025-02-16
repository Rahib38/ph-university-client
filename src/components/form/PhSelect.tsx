import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPHSelectProps = {
  label: string;
  name: string;
  options:{value:string,label:string,disable?:boolean}[] | undefined
  disabled?:boolean
};
const PhSelect = ({ label, name ,options,disabled}: TPHSelectProps) => {
  // const handleChange=(value:string)=>{
  //     console.log(`selected ${value}`)
  // }
  return (
    <Controller
      name={name}
      render={({ field,fieldState:{error} }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            {...field}
            options={options}
            size="large"
            disabled={disabled}
          />
          {error &&<small style={{color:'red'}}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
