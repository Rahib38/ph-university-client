/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PhFrom from "../components/form/PhFrom";
import PhInput from "../components/form/PhInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";
import { setUser, TUser } from "../redux/features/auth/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "admin1234",
  //   },
  // });
  const [login] = useLoginMutation();
  // console.log('data=>',data)
  // console.log('error=>',error)

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId=  toast.loading("logging in");
      try {
        const userInfo = {
          id: data.userId,
          password: data.password,
        };
        const res = await login(userInfo).unwrap();
        const user = verifyToken(res.data.accessToken) as TUser;
        console.log(user);
        dispatch(setUser({ user: user, token: res.data.accessToken }));
        toast.success('Logged in',{id:toastId, duration:2000})
        console.log(res);
        navigate(`/${user?.role}/dashboard`);
      } catch (err) {
        toast.error("Something want wrong",{id:toastId,duration:2000});
      }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PhFrom onSubmit={onSubmit}>
        <PhInput type="text" name="userId" label="ID: "></PhInput>

        {/* <input type="text" id="password" {...register("password")} /> */}
        <PhInput type="text" name="password" label="Password: "></PhInput>

        <Button htmlType="submit">Log in</Button>
      </PhFrom>
    </Row>
  );
}
