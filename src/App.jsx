import { useForm } from "react-hook-form";
import TheFormInput from "./components/FormInputs/TheFormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

function App() {
  const schemaValidation = z.object({
    amount: z
      .string()
      .min(2, { message: "Amount must be at least 02 characters" }),
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
  const [price, netPrice] = useState(0);
  const [discount, DiscountPrice] = useState(0);

  const showPriceDetails = (data) => {
    const { amount } = data;

    const discountAmount = amount * 0.25;

    const netAmount = amount - discountAmount;

    setUserEnteredPrice(amount);

    netPrice(netAmount);

    DiscountPrice(discountAmount);

    reset();
  };

  return (
    <div className=" font-Sen bg-dark_25 min-h-screen pt-10 sm:pt-20 p-3">
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
          <span>25%</span>
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
}

export default App;
