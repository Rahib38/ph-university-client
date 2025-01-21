import { Button, Col, Divider, Form, Input, Row } from "antd";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PhDatePicker from "../../../components/form/PhDatePicker";
import PhFrom from "../../../components/form/PhFrom";
import PhInput from "../../../components/form/PhInput";
import PhSelect from "../../../components/form/PhSelect";
import { bloodGroupOptions, gendersOptions } from "../../../constants/global";
import {
  useGetAllAcademicDepartmentQuery,
  useGetAllSemestersQuery,
} from "../../../redux/features/admin/academicManagement.api";
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api";

// const studentDummyData = {
//   password: "kst9ew0pwaswri0pe",
//   student: {
//     id: "S67892",
//     name: {
//       firstName: "Nadimul",
//       middleName: "",
//       lastName: "Rahib",
//     },
//     gender: "male",
//     dateOfBirth: "2003-12-05",
//     email: "nadimulrahib38@gmail.com",
//     contactNo: "98765432102",
//     emergencyContactNo: "1234567890",
//     bloodGroup: "A-",
//     presentAddress: "789 Pine Street, Greenfield",
//     permanentAddress: "123 Cedar Lane, Greenfield",
//     guardian: {
//       fatherName: "Michael Smith",
//       fatherContactNo: "9876543211",
//       fatherOccuption: "Architect",
//       motherName: "Linda Smith",
//       motherContactNo: "9876543212",
//       motherOccuption: "Teacher",
//     },
//     localGuardian: {
//       name: "Sophia Johnson",
//       contactNo: "9876543213",
//       occupation: "Nurse",
//       address: "456 Willow Road, Greenfield",
//     },
//     admissionSemester: "675932fc34e382a2909c62bd",
//     academicDepartment: "675fafc43dfa8c99719ee3d9",
//     profileImage: "https://example.com/images/emily_smith.jpg",
//     isActive: "block",
//   },
// };

const studentDefaultValues = {
  name: {
    firstName: "Nadimul",
    middleName: "",
    lastName: "Rahib",
  },
  gender: "male",

  email: "nadimulrahib43@gmail.com",
  contactNo: "98765432102",
  emergencyContactNo: "1234567890",
  bloogGroup: "A-",
  presentAddress: "789 Pine Street, Greenfield",
  permanentAddress: "123 Cedar Lane, Greenfield",
  guardian: {
    fatherName: "Michael Smith",
    fatherContactNo: "9876543211",
    fatherOccupation: "Architect",
    motherName: "Linda Smith",
    motherContactNo: "9876543212",
    motherOccupation: "Teacher",
  },
  localGuardian: {
    name: "Sophia Johnson",
    contactNo: "9876543213",
    occupation: "Nurse",
    address: "456 Willow Road, Greenfield",
  },
  // admissionSemester: "675932fc34e382a2909c62bd",
  // academicDepartment: "675fafc43dfa8c99719ee3d9",
};
export default function CreateStudent() {
  const [addStudent, { data, error }] = useAddStudentMutation();
  console.log({ data, error });
  const { data: sData, isLoading: sIsLoading } =
    useGetAllSemestersQuery(undefined);
  const { data: dData, isLoading: dIsLoading } =
    useGetAllAcademicDepartmentQuery(undefined);
  const semesterOptions = sData?.data?.map((item) => ({
    value: item._id,
    label: `${item.name} ${item.year}`,
  }));

  const academicDepartmentOptions = dData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const studentData = {
      password: "student123",
      student: data,
    };
    console.log(studentData);
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    // formData.append("file", data.image);

    addStudent(formData);
    console.log(Object.fromEntries(formData));
  };
  return (
    <Row>
      <Col span={24}>
        <PhFrom onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Row gutter={8}>
            <Divider>Personal Information</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="name.firstName" label="First Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="name.middleName" label="Middle Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="name.lastName" label="Last Name" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect options={gendersOptions} name="gender" label="Gender" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhDatePicker name="dateOfBirth" label="Date of Birth" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                options={bloodGroupOptions}
                name="bloogGroup"
                label="Blood Group"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Pictures">
                    {" "}
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
            <Divider>Contact Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="email" label="Email" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput type="text" name="contactNo" label="Contact No" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact No"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="presentAddress"
                label="Present Address"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              />
            </Col>
            <Divider>Guardian Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.fatherOccupation"
                label="Father Occuption"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occuption"
              />
            </Col>
            <Divider>Local Guardian Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="localGuardian.name"
                label="Local Guradian Name"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="localGuardian.contactNo"
                label="Local Guradian Contact No"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="localGuardian.occupation"
                label="Local Guradian Occuption"
              />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhInput
                type="text"
                name="localGuardian.address"
                label="Local Guradian Address"
              />
            </Col>
            <Divider>Academic Info</Divider>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                options={semesterOptions}
                disabled={sIsLoading}
                name="admissionSemester"
                label="Admission Semester"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PhSelect
                options={academicDepartmentOptions}
                disabled={dIsLoading}
                name="academicDepartment"
                label="Admission Department"
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </PhFrom>
      </Col>
    </Row>
  );
}
