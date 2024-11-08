import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TheFormInput from "../components/FormInputs/TheFormInput";
import { useState } from "react";
import currencyFormat from "../utils/currencyFormat";

const TheFindTotalPage = () => {
  const [netAmount, setNetAmount] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const schema = z.object({
    price: z
      .string()
      .min(2, { message: "Amount must be at least 02 characters." }),
    percentage: z
      .string()
      .min(1, { message: "Percentage must be at least 01 character." }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const calcTotal = (data) => {
    const { percentage, price } = data;
    const percentageAmount = parseFloat(percentage) / 100;
    const priceAmount = parseFloat(price);

    if (!isNaN(percentageAmount) && !isNaN(priceAmount)) {
      const discountPrice = priceAmount * percentageAmount;
      const netPrice = priceAmount - discountPrice;
      const updatedNetAmount = [...netAmount, netPrice];
      setNetAmount(updatedNetAmount);

      // Calculate total immediately after adding the new net price
      const updatedTotalPrice = updatedNetAmount.reduce(
        (acc, amount) => acc + amount,
        0
      );
      setTotalPrice(updatedTotalPrice);
    }
  };

  const onSubmit = (data) => {
    calcTotal(data);
  };

  const handleReset = () => {
    setNetAmount([]);
    setTotalPrice(0);
  };

  return (
    <div className=" px-2 sm:p-0">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-dark_100 w-full sm:w-[500px] mx-auto p-5 rounded-lg"
      >
        <TheFormInput
          label="Amount"
          type="number"
          name="price"
          id="price"
          placeholder="Enter the amount"
          register={register("price")}
          errors={errors.price}
        />

        {/* Percentage input */}
        <TheFormInput
          label="Percentage"
          type="number"
          id="percentage"
          name="percentage"
          placeholder="Ex: 10 (Don't need to enter '%' symbol.)"
          register={register("percentage")}
          errors={errors.percentage}
        />

        <div className="sm:flex justify-between items-center">
          <button
            type="submit"
            className="bg-dark_25 mt-5 px-5 py-2 rounded-md hover:bg-dark_50 hover:transition 500 hover:text-dark_25 w-full sm:w-[160px]"
          >
            Calculate total
          </button>

          {/* Display the total net price */}
          <div className="mt-5">
            <h3 className="text-dark_25 text-center">
              Total Net Price:{" "}
              <span className="font-semibold">
                {totalPrice === 0 ? "0" : currencyFormat(totalPrice)}
              </span>
            </h3>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="mt-5 py-2 rounded-md w-full sm:w-[120px] border-dark_25 border-2 text-dark_25 hover:bg-dark_50 hover:border-0 hover:text-dark_25 transition-all"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default TheFindTotalPage;
