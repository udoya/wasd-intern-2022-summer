import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <div className="field has addons">
          <div className="control is-expanded">
            <div className="select is-fullwidth">
              <select name="breed" defaultValue="shiba">
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
