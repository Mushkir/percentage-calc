import PropTypes from "prop-types";

const TheFormInput = ({
  label,
  type = "text",
  id,
  name,
  placeholder,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={id} className="mb-1 text-dark_25">
        {label}
        <span className="text-red-500">*</span>:
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="p-2 rounded-md outline-none"
        autoComplete="off"
        {...register}
      />
      {errors && <small className=" text-red-500 mt-2">{errors.message}</small>}
    </div>
  );
};

TheFormInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  register: PropTypes.object,
  errors: PropTypes.object,
};

export default TheFormInput;
