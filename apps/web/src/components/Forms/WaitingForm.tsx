"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { WaitingFormProps } from "@/types/forms";
import { waitingFormSchema } from "@/config/formSchemas";
import { joinWaitingList } from "@/serverActions/waitingFormAction";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const WaitingForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<WaitingFormProps>({
    resolver: zodResolver(waitingFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const [isApiLoading, setIsApiLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const submitHandler: SubmitHandler<WaitingFormProps> = async (data) => {
    try {
      setIsApiLoading(true);
      await joinWaitingList(data.email);
      setIsSuccess(true);
      setIsApiLoading(false);
      setApiError(null);
      reset();
    } catch (error) {
      setIsApiLoading(false);
      setApiError(
        "An error occurred while submitting the form. Please try again."
      );
      console.error(error);
    }
  };

  return (
    <div>
      {!isSuccess && (
        <form
          className="flex justify-center items-center gap-1.5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <Input
            {...register("email")}
            color="primary"
            placeholder="name@example.com"
          />
          <Button className="w-[256px] p-3" type="submit" variant="default">
            Join Our Waitlist!
          </Button>
        </form>
      )}
      {/* {isSuccess && (
        <Alert status="success" className="rounded-lg">
          <AlertIcon />
          You successfully joined to the waiting list!
        </Alert>
      )} */}
    </div>
  );
};
