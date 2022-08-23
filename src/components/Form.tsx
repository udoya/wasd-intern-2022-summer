import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormProps = {
  onSubmit: SubmitHandler<FormData>;
  defaultValue: string;
  breeds: string[];
};

export type FormData = {
  breed: string;
};

export const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, defaultValue, breeds } = props;

  const { handleSubmit, control } = useForm<FormData>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth is-rounded is-medium">
              <Controller
                name="breed"
                control={control}
                defaultValue={defaultValue}
                render={({ field: { value, onChange } }) => (
                  <select name="breed" value={value} onChange={onChange}>
                    {breeds.map((breed) => {
                      return (
                        //文字列の先頭を大文字にする
                        <option key={breed} value={breed}>
                          {breed.charAt(0).toUpperCase() + breed.slice(1)}
                        </option>
                      );
                    })}
                  </select>
                )}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark is-medium">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
