import { Button } from "antd";
import PhFrom from "../../../components/form/PhFrom";
import PhInput from "../../../components/form/PhInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const CreateAcademicSemester = () => {
  
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
      console.log(data);
    };
    return (
      <PhFrom onSubmit={onSubmit}>
        <PhInput type=" text" name="name" />
        <Button htmlType="submit">Submit</Button>
      </PhFrom>
    );
  
};

export default CreateAcademicSemester;
