import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

type FormProps = {
  onSubmit: SubmitHandler<FormData>;
  defaultValue: string;
  breedsArray: string[];
};

export type FormData = {
  breed: string;
};

const capitalize = (s: string) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const Form: React.FC<FormProps> = (props) => {
  const { onSubmit, defaultValue, breedsArray } = props;

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
                    {breedsArray.map((breed) => {
                      return (
                        //capitalize(無名関数？)をoptionタグ内で定義したかったが、仕方なくForm.tsx内で定義している。
                        <option key={breed} value={breed}>
                          {capitalize(breed)}
                        </option>
                      );
                    })}
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
