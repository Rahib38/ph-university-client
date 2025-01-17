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

const currentYear = new Date().getFullYear();
const yearOptions = [0, 1, 2, 3, 4].map((number) => ({
  value: String(currentYear + number),
  label: String(currentYear + number),
}));

console.log(yearOptions);

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const name = nameOptions[Number(data?.name) - 1]?.label;
 
    const semesterData = {
      name,
      code: data.name,
      year: data.year,
    };

    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhFrom onSubmit={onSubmit}>
          <PhSelect label="Name" name="name" options={nameOptions}/>
          <PhSelect label="Year" name="year" options={yearOptions}/>
          {/* <PhSelect label="Start Month" name="startMonth" options={nameOptions}></PhSelect>
          <PhSelect label="End Month" name="endMonth" options={nameOptions}></PhSelect> */}
          <Button htmlType="submit">Submit</Button>
        </PhFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
