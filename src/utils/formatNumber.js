export function formatNumber(value) {
  if (value === null || value === undefined) {
    return "Loading data";
  } else {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }
}

export function formatNumberSeparatedWithComma(value) {
  if (value === null || value === undefined) {
    return "Loading data";
  } else if (value >= 1) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else if (value >= 0.1) {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    });
  } else {
    return value.toLocaleString("en-US", {
      minimumFractionDigits: 8,
      maximumFractionDigits: 8,
    });
  }
}

export function formatNumberToString(value) {
  if (value === null || value === undefined) {
    return "Loading data";
  } else if (value >= 1e12) {
    return `${(value / 1e12).toFixed(0)}T`; // Triliun
  } else if (value >= 1e9) {
    return `${(value / 1e9).toFixed(0)}B`; // Miliar
  } else if (value >= 1e6) {
    return `${(value / 1e6).toFixed(0)}M`; // Juta
  } else {
    return value.toLocaleString();
  }
}
