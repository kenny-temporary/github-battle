import React from "react";
import PropTypes from "prop-types";

function LanguagePicker(props) {
  const {
    selected,
    languages,
    onUpdateLanguage,
    unselectedColor,
    selectedColor,
  } = props;

  return (
    <ul>
      {languages?.map((language) => (
        <li
          key={language}
          onClick={() => onUpdateLanguage && onUpdateLanguage(language)}
          style={
            language === selected
              ? { color: selectedColor }
              : { color: unselectedColor }
          }
        >
          {language}
        </li>
      ))}
    </ul>
  );
}

LanguagePicker.propTypes = {
  selected: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
  selectedColor: PropTypes.string,
  unselectedColor: PropTypes.string,
};

export default LanguagePicker;
