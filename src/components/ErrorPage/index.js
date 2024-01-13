import StyleWrapper from "./style";

function ErrorPage({ error }) {
  const msg = error.message || "Something went wrong!";
  return <StyleWrapper>{msg}</StyleWrapper>;
}

export default ErrorPage;
