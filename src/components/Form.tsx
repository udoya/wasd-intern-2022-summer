import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormProps = {
  onSubmit: SubmitHandler<FormData>;
  defaultValue: string;
};

export type FormData = {
  breed: string;
};

export const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, defaultValue } = props;

  const { handleSubmit, control } = useForm<FormData>();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field has addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <Controller
                name="breed"
                control={control}
                defaultValue={defaultValue}
                render={({ field: { value, onChange } }) => (
                  <select name="breed" value={value} onChange={onChange}>
                    <option value="shiba">Shiba</option>
                    <option value="akita">Akita</option>
                  </select>
                )}
              />
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-dark">
              Reload
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
