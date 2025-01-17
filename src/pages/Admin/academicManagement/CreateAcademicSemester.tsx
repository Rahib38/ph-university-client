import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhFrom from "../../../components/form/PhFrom";
import PhInput from "../../../components/form/PhInput";
import PhSelect from "../../../components/form/PhSelect";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhFrom onSubmit={onSubmit}>
          <PhInput type=" text" name="name" label="name" />
          <PhInput type=" text" name="name" label="year"/>
          <PhSelect label="name"></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
