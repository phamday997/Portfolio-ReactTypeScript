export const getPlainText = (value: string | TrustedHTML): string => {
  const div = document.createElement("div");
  div.innerHTML = typeof value === "string" ? value : value.toString();
  return div.innerText.replace(/\n/g, " ").trim();
};
