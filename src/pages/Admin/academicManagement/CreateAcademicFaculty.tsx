/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import PhFrom from "../../../components/form/PhFrom";
import PhInput from "../../../components/form/PhInput";
import { useAddAcademicFacultyMutation } from "../../../redux/features/admin/academicManagement.api";
import { TResponse } from "../../../types";
export type TAcademicFaculty = {
  // _id: string;
  message?: string;
  name: string;
  // createdAt: string;
  // updatedAt: string;
  // __v: number;
};
const CreateAcademicFaculty = () => {
  const [addFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    const toastId = toast.loading("Creating....");

    const semesterData = {
      name: data.facultyName,
    };
    try {
      console.log(data);
      const res = (await addFaculty(
        semesterData
      )) as TResponse<TAcademicFaculty>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
      console.log(res);
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  const academicSemesterSchema = z.object({
    facultyName: z.string({ required_error: "Please Enter Faculty Name." }),
  });
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PhFrom
          onSubmit={onSubmit}
          resolver={zodResolver(academicSemesterSchema)}
        >
          <PhInput type="text" label="Faculty Name" name="facultyName" />

          <Button htmlType="submit">Submit</Button>
        </PhFrom>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
