export const getPlainText = (value: string | TrustedHTML): string => {
  if (typeof value === "string") return value;

  // Convert TrustedHTML to string safely
  const div = document.createElement("div");
  div.innerHTML = value.toString(); // unwrap TrustedHTML
  return div.textContent || "";
};
