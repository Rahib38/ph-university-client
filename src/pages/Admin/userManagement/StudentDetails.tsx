import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const {studentId}=useParams()
  // console.log(param)
  return <div>this is bal {studentId}</div>;
};

export default StudentDetails;
