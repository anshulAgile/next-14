"use client";

import Button from "@/_components/Button";
import {
  CommonDateField,
  CommonInputField,
  CommonSelectField,
} from "@/_components/FormField";
import { COLOR_OPTION } from "@/_utils/constants";
import useClientSession from "@/_utils/getClientSession";
import { ROUTES } from "@/_utils/routes";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { signInValidation } from "../schema";
import { ISignInForm } from "../schema/type";

const Login = () => {
  const router = useRouter();
  const { session } = useClientSession();

  const methods = useForm<ISignInForm>({
    resolver: yupResolver(signInValidation),
  });

  const handleSubmit: SubmitHandler<ISignInForm> = async (data) => {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (result?.ok) {
        router.push(ROUTES.home);
      }
    } catch (error: any) {
      console.log("error: ", error);
    }
  };

  if (session) {
    return router.replace(ROUTES.home);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CommonInputField labelName="Username" name="email" />
          <CommonInputField
            labelName="Password"
            name="password"
            type="password"
          />
          <CommonSelectField
            labelName="Favorite Single Color"
            name="singleColor"
            options={COLOR_OPTION}
          />
          <CommonSelectField
            labelName="Favorite Multiple Colors"
            name="favoriteColors"
            isMulti={true}
            options={COLOR_OPTION}
          />
          <CommonDateField labelName="Birthdate" name="birthDate" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="primary" type="submit">
            Login test
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Login;
