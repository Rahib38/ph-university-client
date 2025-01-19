import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";
type TDatePickerProps = {
  name: string;
  label?: string;
};
export default function PhDatePicker({ name, label }: TDatePickerProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* {label ? label : null} */}

      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{width:'100%'}}/>
          </Form.Item>
        )}
      />
    </div>
  );
}
