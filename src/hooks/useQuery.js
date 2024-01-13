import { useEffect, useReducer } from "react";

const INITIAL_STATE = {
  loading: true,
  data: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "data": {
      return {
        loading: false,
        data: action.data,
      };
    }
    case "error": {
      return {
        loading: false,
        error: action.error,
      };
    }
    default:
      throw Error("Action should be either data or error");
  }
}

function useQuery({ api }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    (async () => {
      fetch(api)
        .then((res) => {
          if (res.ok) {
            res.json().then((data) => {
              dispatch({ type: "data", data });
            });
          } else throw new Error("Something went wrong!");
        })
        .catch((error) => {
          dispatch({ type: "error", error });
        });
    })();
  }, [api]);

  return state;
}

export default useQuery;
