import { useState, useCallback, useEffect } from "react";
import { queryRepositoty as queryRepositotyServer } from "@/services/popular";

function useQueryPopularRepositoty(initialParameters) {
  const [state, setState] = useState({
    repositoties: [],
    language: initialParameters?.language,
    limit: initialParameters?.limit,
    offset: initialParameters?.offset,
    ...initialParameters,
  });

  const queryRepositoty = useCallback((receiptParameter) => {
    const params =
      typeof receiptParameter === "function"
        ? receiptParameter(state)
        : receiptParameter;

    console.log("params -->", params);
    console.log([setState, queryRepositotyServer]);
    setState({
      language: params?.language,
      limit: params?.limit,
      offset: params,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    queryRepositoty(initialParameters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ...state,
    queryRepositoty,
  };
}

export default useQueryPopularRepositoty;
