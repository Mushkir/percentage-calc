function App() {
  return (
    <div className=" font-Sen bg-dark_25 min-h-screen pt-20">
      <form action="" className=" bg-dark_100 w-[500px] mx-auto p-5 rounded-lg">
        <div className="flex flex-col">
          <label htmlFor="amount" className="mb-1 text-dark_25">
            Amout
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            placeholder="Enter the amount"
            className="p-2 rounded-md outline-none"
          />
        </div>

        <button className="bg-dark_25 mt-5 px-5 py-2 rounded-md hover:bg-dark_50 hover:transition 500 hover:text-dark_25">
          Calculate
        </button>

        {/* Output */}
        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">You Entered Amount: </span>
          <span>Rs. 3000</span>
        </div>

        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">Discount Percentage: </span>
          <span>25%</span>
        </div>

        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">Discount Price: </span>
          <span>Rs. 250</span>
        </div>

        <div className=" text-dark_25 mt-5">
          <span className=" text-dark_27">Net Amount: </span>
          <span>Rs. 3000</span>
        </div>
      </form>
    </div>
  );
}

export default App;
