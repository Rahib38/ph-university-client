import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhFrom from "../../../components/form/PhFrom";
import PhSelect from "../../../components/form/PhSelect";
const nameOptions = [
  {
    value: "01",
    label: "autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];
const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhFrom onSubmit={onSubmit}>
          <PhSelect label="Name" name="name" options={nameOptions}></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
