import { ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TFormProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TFromConfig
type TFromConfig={
    defaultValues?:Record<string,any>
}
export default function PhFrom({ onSubmit, children,defaultValues }: TFormProps) {
    
const formConfig:TFromConfig={}
if(defaultValues){
    formConfig['defaultValues']=defaultValues
}


  const methods = useForm(formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
