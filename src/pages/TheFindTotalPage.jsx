import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import TheFormInput from "../components/FormInputs/TheFormInput";
import { useState } from "react";
import currencyFormat from "../utils/currencyFormat";

const TheFindTotalPage = () => {
  // const [priceList, setPriceList] = useState([]);
  const [netAmount, setNetAmount] = useState([]);

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
    const discountPrice = priceAmount * percentageAmount;
    const netPrice = priceAmount - discountPrice;
    setNetAmount([...netAmount, netPrice]);
  };

  // console.log(netAmount);
  const totalPrice = netAmount.reduce((accumulator, amount) => {
    return (accumulator += amount);
  }, 0);

  const onSubmit = (data) => {
    calcTotal(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-dark_100 w-full sm:w-[500px] mx-auto p-5 rounded-lg"
      >
        <TheFormInput
          label={"Amount:"}
          type="number"
          name="price"
          id="price"
          placeholder={"Enter the amount"}
          register={register("price")}
          errors={errors.price}
        />

        {/* Percentage input */}
        <TheFormInput
          label={"Percentage:"}
          type="number"
          id="percentage"
          name="percentage"
          placeholder="Ex: 10 (Don't need to enter '%' symbol.)"
          register={register("percentage")}
          errors={errors.percentage}
        />

        <div className="sm:flex justify-between items-center">
          <button className="bg-dark_25 mt-5 px-5 py-2 rounded-md hover:bg-dark_50 hover:transition 500 hover:text-dark_25 w-full sm:w-[160px]">
            Calculate total
          </button>

          {/* Display the total net price */}
          <div className="mt-5">
            <h3 className=" text-dark_25 text-center">
              Total Net Price:{" "}
              <span className=" font-semibold">
                {currencyFormat(totalPrice)}
              </span>
            </h3>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TheFindTotalPage;
