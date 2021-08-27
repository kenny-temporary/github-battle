import { useState, useCallback, useEffect } from "react";

const initialState = {
  repositoties: [],
  parameters: {},
  errors: [],
  loading: false,
};

function useQueryPopularRepositoty(url = "", initialParameters) {
  const [state, setState] = useState({
    ...initialState,
    parameters: initialParameters,
  });

  const queryRepositoty = useCallback(
    (receiptParameter) => {
      const params =
        typeof receiptParameter === "function"
          ? receiptParameter(state?.parameters)
          : receiptParameter;

      // 走上拉逻辑
      if (
        params?.language === state?.parameters?.language &&
        params?.offset > state?.parameters?.offset
      ) {
        console.log("上拉加载 --->", state?.parameters, params, url);
      }

      // TODO: request repositoties data
      const repositoties = [];
      setState((previous) => ({
        ...previous,
        repositoties: repositoties,
        parameters: params,
        errors: [],
      }));
    },
    [state?.parameters, url]
  );

  const clearRepositoties = () => {
    setState((previous) => ({ ...previous, ...initialState }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => queryRepositoty(initialParameters), []);
  return { ...state, queryRepositoty, clearRepositoties };
}

export default useQueryPopularRepositoty;
