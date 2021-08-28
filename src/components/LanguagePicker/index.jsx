import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Container from "react-bootstrap/Container";
import style from "./index.less";

function LanguagePicker(props) {
  const {
    selected,
    languages,
    onUpdateLanguage,
    unselectedColor = "black",
    selectedColor,
  } = props;

  return (
    <Container>
      <ul className="d-flex justify-content-center flex-wrap">
        {languages?.map((language) => (
          <li
            key={language}
            className={classnames("p-3", style.languageItemText)}
            onClick={() => onUpdateLanguage(language)}
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
    </Container>
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
