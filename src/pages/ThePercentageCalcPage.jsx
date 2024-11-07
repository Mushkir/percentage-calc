import { useForm } from "react-hook-form";
import TheFormInput from "../components/FormInputs/TheFormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const ThePercentageCalPage = () => {
  const schemaValidation = z.object({
    amount: z
      .string()
      .min(2, { message: "Amount must be at least 02 characters." }),

    percentage: z
      .string()
      .min(1, { message: "Percentage must be at least 01 character." }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaValidation),
  });

  const [userEnteredPrice, setUserEnteredPrice] = useState(0);
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [price, netPrice] = useState(0);
  const [discount, DiscountPrice] = useState(0);

  const showPriceDetails = (data) => {
    const { amount, percentage } = data;

    // console.log(data);

    const floatPercentage = percentage / 100;

    const discountAmount = amount * floatPercentage;

    const netAmount = amount - discountAmount;

    setUserEnteredPrice(amount);

    setDiscountPercentage(percentage);

    netPrice(netAmount);

    DiscountPrice(discountAmount);

    reset();
  };
  return (
    <div>
      <form
        className=" bg-dark_100 w-full sm:w-[500px] mx-auto p-5 rounded-lg"
        onSubmit={handleSubmit(showPriceDetails)}
      >
        <TheFormInput
          label="Amount"
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter the amount"
          register={register("amount")}
          errors={errors.amount}
        />

        <TheFormInput
          label="Percentage"
          type="number"
          id="percentage"
          name="percentage"
          placeholder="Ex: 10 (Don't need to enter '%' symbol.)"
          register={register("percentage")}
          errors={errors.percentage}
        />

        <button className="bg-dark_25 mt-5 px-5 py-2 rounded-md hover:bg-dark_50 hover:transition 500 hover:text-dark_25 w-full sm:w-[150px]">
          Calculate
        </button>

        {/* Output */}
        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">You Entered Amount: </span>
          <span>Rs. {userEnteredPrice}</span>
        </div>

        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">Discount Percentage: </span>
          <span>{discountPercentage}%</span>
        </div>

        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">Discount Price: </span>
          <span>Rs. {discount}</span>
        </div>

        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">Net Amount: </span>
          <span>Rs. {price}</span>
        </div>
      </form>
    </div>
  );
};

export default ThePercentageCalPage;
