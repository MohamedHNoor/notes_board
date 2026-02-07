export function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new TypeError("formatDate expects a Date object");
  }
  return date.toLocaleDateString("en-NZ", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
