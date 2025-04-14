"use client";

import type { FieldValues } from "react-hook-form";
import { Controller, FormProvider, useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { contactUsSchema } from "../../common/schemas/contactUsSchema";
import { axiosInstance } from "../../common/services/toast/axios.service";
import showNotification, { ToastVersions } from "../../common/services/toast/showNotifications";
import { servicesConstants } from "../../shared/constants/services.constants";
import countriesConstants from "../../shared/data/countries.json";
import Button from "../../shared/ui/Button";
import AutoComplete from "../../shared/ui/forms/AutoComplete";
import FileInput from "../../shared/ui/forms/FileInput";
import Input from "../../shared/ui/forms/Input";
import PhoneInput from "../../shared/ui/forms/PhoneInput";
import TextArea from "../../shared/ui/forms/TextArea";
import { filesSizeValidation } from "../../utils/validation.utils";

interface IContactUsFormPayload extends FieldValues {
  fullname: string;
  email: string;
  country: string;
  phone?: string;
  service: string;
  description?: string;
  file?: File;
}

const ContactUs = () => {
  const methods = useForm<IContactUsFormPayload>({
    mode: "onChange",
    resolver: yupResolver(contactUsSchema),
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = methods;

  const onFormSubmit = async (data: IContactUsFormPayload) => {
    try {
      const formData = new FormData();
      const body = {
        interestedServices: data.service,
        fullName: data.fullname,
        email: data.email,
        message: data.description || "",
        country: data.country,
        phone: data.phone || "",
      };

      formData.append("data", JSON.stringify(body));

      if (data.file) {
        formData.append("file", data.file);
      }

      await axiosInstance.post("/auth/contact-us", formData);

      showNotification({
        type: ToastVersions.success,
        title: "Thank you!",
        description: "Your message has been successfully submitted.",
      });
    } catch (error) {
      showNotification({
        type: ToastVersions.error,
        title: "Submission Failed",
        description: "There was an error submitting your message. Please try again later.",
      });
      console.error("Error submitting form:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="h-full lg:w-4/5 w-full flex flex-col desktop:items-start items-center space-y-6 bg-white shadow-base-300 rounded-lg desktop:p-6 p-4"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <div className="w-full grid desktop:grid-cols-2 grid-cols-1 desktop:gap-5 gap-4">
          <Input
            required
            label="Full Name"
            error={errors.fullname?.message}
            placeholder="Enter Your Full Name"
            {...register("fullname")}
          />
          <Input
            required
            label="Email"
            error={errors.email?.message}
            placeholder="Enter Your Email Address"
            {...register("email")}
          />
          <AutoComplete
            required
            label="Country"
            placeholder="Please select Country"
            error={errors.country?.message}
            items={countriesConstants.countries}
            {...register("country")}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field: { ref, ...field } }) => (
              <PhoneInput
                ref={ref}
                label="Phone Number"
                extraProps={field}
                error={errors.phone?.message}
                placeholder="Enter Your Phone Number"
              />
            )}
          />
          <AutoComplete
            required
            label="Interested Services"
            className="desktop:col-span-2"
            placeholder="Please select service"
            error={errors.service?.message}
            items={[...servicesConstants, { id: "other", title: "Other" }]}
            {...register("service")}
          />
          <TextArea
            maxLength={2000}
            label="How Can We Help?"
            className="desktop:col-span-2"
            placeholder="Describe your idea/project briefly"
            {...register("description")}
          />
          <FileInput
            error={errors.file?.message}
            {...register("file", {
              validate: {
                fileSize: (value) => filesSizeValidation(value),
              },
            })}
          />
        </div>
        <Button type="submit" className="w-fit">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

export default ContactUs;
