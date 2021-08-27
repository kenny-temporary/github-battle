import React from "react";
import Card from "@/components/Card/index";
import LanguagePicker from "@/components/LanguagePicker/index";
import useQueryPopularRepositoty from "./useQueryPopularRepositoty";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
const initialParameters = {
  language: "All",
  limit: 10,
  offset: 1,
};

export default function Popular() {
  const { repositoties, parameters, queryRepositoty, ...rest } =
    useQueryPopularRepositoty("", initialParameters);

  console.log(rest);

  return (
    <div>
      <LanguagePicker
        languages={languages}
        selected={parameters?.language}
        onUpdateLanguage={(selectedLanguage) =>
          queryRepositoty({ ...parameters, language: selectedLanguage })
        }
      />

      <button
        onClick={() =>
          queryRepositoty((previous) => ({
            ...previous,
            offset: previous?.offset + 1,
          }))
        }
      >
        上拉
      </button>

      {repositoties?.map((repositoty, index) => (
        <Card
          key={repositoty?.id || index}
          repositoty={repositoty}
          repositoties={repositoties}
        />
      ))}
    </div>
  );
}
