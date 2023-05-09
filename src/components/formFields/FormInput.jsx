import React from "react";
import { useForm } from "react-hook-form";

export const FormInput = (props) => {
  const { label, name, placeholder, type, register, errors, className } = props;

  return (
    <div>
      <div className="errmsg"></div>
      <div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="inputPassword6" className="col-form-label">
              {label}
            </label>
          </div>
          <div className="col-auto">
            <input
              type={type?.type}
              name={name?.name}
              className={className?.className}
              placeholder={placeholder?.placeholder}
              {...register(name)}
            />
          </div>
          <div className="col-auto">
            <span id="passwordHelpInline" className="form-text">
              {errors && name !== "confirm"
                ? errors[name] && <p>{errors[name].message}</p>
                : errors["confirm"] && (
                    <p>Password and Confirm Password not match</p>
                  )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
