import React from "react";
import { useState } from "react";

type FormProps = {
  handleSelectBreed: (breed: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  defaultValue: string;
};

export const Form: React.FC<FormProps> = (props) => {
  const { handleSelectBreed, handleSubmit, defaultValue } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field has addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select
                name="breed"
                defaultValue={defaultValue}
                onChange={(event) => handleSelectBreed(event.target.value)}
              >
                <option value="shiba">Shiba</option>
                <option value="akita">Akita</option>
              </select>
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
