import { Button } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhFrom from "../../../components/form/PhFrom";
import PhInput from "../../../components/form/PhInput";

const studentDummyData = {
  password: "kst9ew0pwaswri0pe",
  student: {
    id: "S67892",
    name: {
      firstName: "Nadimul",
      middleName: "",
      lastName: "Rahib",
    },
    gender: "male",
    dateOfBirth: "2003-12-05",
    email: "nadimulrahib38@gmail.com",
    contactNo: "98765432102",
    emergencyContactNo: "1234567890",
    bloodGroup: "A-",
    presentAddress: "789 Pine Street, Greenfield",
    permanentAddress: "123 Cedar Lane, Greenfield",
    guardian: {
      fatherName: "Michael Smith",
      fatherContactNo: "9876543211",
      fatherOccuption: "Architect",
      motherName: "Linda Smith",
      motherContactNo: "9876543212",
      motherOccuption: "Teacher",
    },
    localGuardian: {
      name: "Sophia Johnson",
      contactNo: "9876543213",
      occupation: "Nurse",
      address: "456 Willow Road, Greenfield",
    },
    admissionSemester: "675932fc34e382a2909c62bd",
    academicDepartment: "675fafc43dfa8c99719ee3d9",
    profileImage: "https://example.com/images/emily_smith.jpg",
    isActive: "block",
  },
};
export default function CreateStudent() {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const formData=new FormData()
    formData.append('data',JSON.stringify(data))
    console.log([...formData.entries()])
  };
  return (
    <PhFrom onSubmit={onSubmit}>
      <PhInput type="text" name="name" label="Name" />
      <Button htmlType="submit">Submit</Button>
    </PhFrom>
  );
}
