/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PhFrom from "../../../components/form/PhFrom";
import PhInput from "../../../components/form/PhInput";
import { useAddAcademicDepartmentMutation, useGetAllAcademicFacultyQuery } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types";
import PhSelect from "../../../components/form/PhSelect";
export type TDepartment={
  name:string
  facultyName:string
  message?:string
}
const CreateAcademicDepartment = () => {
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
   const {data:sData}=useGetAllAcademicFacultyQuery(undefined)

 const academicFacultyOptions=sData?.data?.map(item=>({
  value:item._id,
  label:`${item.name}`
}))
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    console.log(data);
    const toastId= toast.loading('Creating....')
   

    const semesterData = {
      name:data.name,
      academicFaculty:data.academicFaculty

    };
    try {
      console.log(semesterData);
      const res = await addAcademicDepartment(semesterData)as TResponse<TDepartment>;
      if(res.error){
        toast.error(res.error.data.message,{id:toastId})
      }else{
        toast.success(res?.data?.message,{id:toastId})

      }
      console.log(res)
    } catch (err) {
      toast.error("Something went wrong",{id:toastId});
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhFrom onSubmit={onSubmit}>
          <PhInput type="text" label="Name" name="name" />
          <PhSelect options={academicFacultyOptions} label="Academic Faculty" name="academicFaculty" />

          <Button htmlType="submit">Submit</Button>
        </PhFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
