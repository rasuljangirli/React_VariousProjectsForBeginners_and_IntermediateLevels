import React, { useState } from "react";

function SearchPhotos({ search }) {
  const [value, setValue] = useState("");

  const requestProps = (e) => {
    e.preventDefault();
    search(value);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="formDiv">
      <form onSubmit={requestProps}>
        <input
          type="text"
          placeholder="Enter image name"
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default SearchPhotos;
