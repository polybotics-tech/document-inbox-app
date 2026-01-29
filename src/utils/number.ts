export function roundNumToDecimal(num: number, places: number = 1): string {
  if (typeof num !== "number" || typeof places !== "number") return "0.00";

  return Number(num).toFixed(places);
}

export function convertSizeToReadable(size: number): string {
  const sizeRefs = ["B", "KB", "MB", "GB"];

  if (typeof size !== "number") return "0B";

  const kb = 1024;
  const mb = kb * 1024;
  const gb = mb * 1024;

  if (size >= kb && size < mb)
    return `${roundNumToDecimal(size / kb)}${sizeRefs[1]}`;
  if (size >= mb && size < gb)
    return `${roundNumToDecimal(size / mb)}${sizeRefs[2]}`;
  if (size > gb) return `${roundNumToDecimal(size / gb)}${sizeRefs[3]}`;

  return `${size}${sizeRefs[0]}`;
}
