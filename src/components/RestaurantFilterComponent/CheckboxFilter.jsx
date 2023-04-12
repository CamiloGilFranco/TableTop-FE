import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CheckboxFilter = ({
  index,
  element,
  handleCategoriesChange,
  objectParams,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (objectParams[element]) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [objectParams]);

  const handleCheck = (event) => {
    handleCategoriesChange(element, !isChecked);
  };
  return (
    <label key={index}>
      <input
        type="checkbox"
        className="filterCheckbox"
        id={element}
        name={element}
        checked={isChecked}
        onChange={handleCheck}
      />
      {element}
    </label>
  );
};

export default CheckboxFilter;
