import Input from "@components/ui/input";
import PasswordInput from "@components/ui/password-input";
import Button from "@components/ui/button";
import { useForm } from "react-hook-form";
import Logo from "@components/ui/logo";
import { useTranslation } from "next-i18next";
import { ShopifyData } from "@lib/shopify";
import Router, { useRouter } from "next/router";

export interface LoginInputType {
  email: string;
  password: string;
  remember_me: boolean;
}


function onSubmit({ email, password, remember_me }: LoginInputType) {
  console.log(email, password, remember_me, "data");

  async function createCustomer() {
    const query = `

	mutation customerCreate {
	  customerCreate(input: {email: "${email}", password: "${password}"}) {
		customer {
		  email
		  phone
		  firstName
		  lastName
		}
		customerUserErrors {
	message    }
	  }
	}`;

    const response = await ShopifyData(query);

    console.log(response, "res");
    console.log(query);

    // const slugs = response.data.products.edges
    //   ? response.data.products.edges
    //   : [];

    // return slugs;
  }

  createCustomer();

}

const LoginForm: React.FC = () => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputType>();

  return (
    <div className="overflow-hidden bg-white mx-auto rounded-lg w-full sm:w-96 md:w-450px border border-gray-300 py-5 px-5 sm:px-8">
      <div className="text-center mb-6 pt-2.5">
        <div>
          <Logo />
        </div>
        <p className="text-sm md:text-base text-body mt-2 mb-8 sm:mb-10">
          {t("common:login-helper")}
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center"
        noValidate
      >
        <div className="flex flex-col space-y-3.5">
          <Input
            labelKey={t("forms:label-email")}
            type="email"
            variant="solid"
            {...register("email", {
              required: `${t("forms:email-required")}`,
              pattern: {
                value:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: t("forms:email-error"),
              },
            })}
            errorKey={errors.email?.message}
          />
          <PasswordInput
            labelKey={t("forms:label-password")}
            errorKey={errors.password?.message}
            {...register("password", {
              required: `${t("forms:password-required")}`,
            })}
          />
          <div className="flex items-center justify-center">
            <div className="flex items-center flex-shrink-0">
              <label className="switch relative inline-block w-10 cursor-pointer">
                <input
                  id="remember"
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  {...register("remember_me")}
                />
                <span className="bg-gray-500 absolute inset-0 transition-all duration-300 ease-in slider round"></span>
              </label>
              <label
                htmlFor="remember"
                className="flex-shrink-0 text-sm text-[#262626] ps-3 cursor-pointer"
              >
                {t("forms:label-remember-me")}
              </label>
            </div>
          </div>
          <div className="relative">
            <Button
              type="submit"
              // loading={isLoading}
              // disabled={isLoading}
              className="h-11 md:h-12 w-full mt-1.5 bg-[#262626]"
            >
              {t("common:text-login")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
