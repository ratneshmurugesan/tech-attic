import React from "react";
import { format, getMonth, getYear } from "date-fns";

export const formatLongNumber = (value = 0, metrics = false) => {
  if (value === 0) {
    return "0";
  } else {
    // hundreds
    if (value <= 999) {
      return value;
    }
    // thousands
    else if (value >= 1000 && value <= 999999) {
      return metrics
        ? (value / 1000).toFixed(0) + "K"
        : (value / 1000).toFixed(2) + "K";
    }
    // millions
    else if (value >= 1000000 && value <= 999999999) {
      return (value / 1000000).toFixed(2) + "M";
    }
    // billions
    else if (value >= 1000000000 && value <= 999999999999) {
      return (value / 1000000000).toFixed(2) + "B";
    } else return value;
  }
};

// ===== Default Currency Regions =====
export const { CURRENCY = "USD" } = process.env;

// ===== Get the Regional Curr and Language =====
const getLang = curr => {
  if (curr === "INR") {
    return "en-In";
  } else {
    return "en-Us";
  }
};

/**
 * Currency Formatter with Currency Symbol
 */
export const currencyFormatter = (
  value = 0,
  showDecimals = false,
  toCurrency = CURRENCY
) => {
  return Intl.NumberFormat(getLang(toCurrency), {
    style: "currency",
    currency: toCurrency,
    minimumFractionDigits: showDecimals ? 2 : 0,
  }).format(value);
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const handleTimeFrequency = timeFrequency => {
  switch (timeFrequency) {
    case "WTD":
      return "weekly";

    case "MTD":
      return "monthly";

    case "QTD":
      return "quarterly";

    default:
      return "yearly";
  }
};

export const getAxisKeys = frequency => {
  switch (frequency) {
    case "daily":
      return "date";

    case "weekly":
      return "week";

    case "monthly":
      return "month";

    case "quarterly":
      return "quarter";

    default:
      return "date";
  }
};

export const generateParams = (selectedFilters, dashboard, report) => {
  const params = {};
  selectedFilters &&
    Object.keys(selectedFilters).forEach(sf => {
      switch (sf) {
        case "dates":
          params["start_date"] = format(
            new Date(selectedFilters.dates.start_date),
            "yyyy-MM-dd"
          );
          params["end_date"] = format(
            new Date(selectedFilters.dates.end_date),
            "yyyy-MM-dd"
          );
          break;
        case "time_aggregate":
        case "conversion_source":
        case "campaign_subscription":
          params[sf] = selectedFilters[sf];
          break;
        default:
          params[sf] = selectedFilters[sf].map(sfi => sfi.id);
          break;
      }
    });
  return {
    ...{ dashboard_type: dashboard, report_type: report, total: "true" },
    ...params,
  };
};

export const getOrdinalDate = date => {
  const day = format(date, "dd");
  const monthYear = format(date, "MMM, yyyy");
  switch (day % 10) {
    case 1:
      return `${format(date, "d")}st ${monthYear}`;
    case 2:
      return `${format(date, "d")}nd ${monthYear}`;
    case 3:
      return `${format(date, "d")}rd ${monthYear}`;
    default:
      return `${format(date, "d")}th ${monthYear}`;
  }
};

export const generateTitle = (title, date, classes) => {
  return (
    <div className={classes && classes.titleHolder}>
      {title}{" "}
      <span
        style={{ color: "#515050", fontSize: 14, verticalAlign: "text-top" }}
      >
        [{date && getOrdinalDate(new Date(date.start_date))} -{" "}
        {date && getOrdinalDate(new Date(date.end_date))}]
      </span>
    </div>
  );
};

export const deriveDateFromIndex = (date, timeAgg) => {
  const year = date.toString().split("").splice(0, 4).join("");
  const quarter = date.toString().split("").splice(4, 2).join("");
  const month = date.toString().split("").splice(4, 2).join("");
  const week = date.toString().split("").splice(4, 2).join("");
  const day = date.toString().split("").splice(6, 2).join("");
  return {
    weekindex: `Week - ${week}`,
    monthindex: `${months[month - 1]}-${year}`,
    quarterindex: `Quarter ${quarter}-${year}`,
    dateindex: `${months[month - 1]}-${day}-${year}`,
  }[timeAgg];
};

export const getDateFormat = (value, currentFilters) => {
  switch (currentFilters.time_aggregate) {
    case "dateindex":
    case "weekindex":
    case "quarterindex":
      return `${value}`;
    case "monthindex":
      return `${months[getMonth(new Date(value))]} - ${getYear(
        new Date(value)
      )}`;
    default:
      break;
  }
};

// ===== Number formatter with Decimal Points and Formatter =====
export const numberFormatter = (
  type,
  value,
  showDecimals,
  decimalPoints,
  isFormat,
  currentFilters
) => {
  if (value === null) return 0;

  switch (type) {
    case "TEXT":
      return value ? value.replace(/_/g, " ") : "--";

    case "NUMBER":
      return isFormat
        ? new Intl.NumberFormat("en-US").format(value)
        : showDecimals
        ? `${parseFloat(value, 10).toFixed(decimalPoints)}`
        : value;

    case "CURRENCY":
      return currencyFormatter(value, showDecimals);

    case "PERCENTAGE":
      return showDecimals ? `${(+value).toFixed(decimalPoints)}%` : `${value}%`;

    case "DATE":
      // return getDateFormat(value, currentFilters);
      return deriveDateFromIndex(
        value,
        currentFilters.time_aggregate || "dateindex"
      );

    case "LINK":
      return (
        <a href={value} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      );
    default:
      return value;
  }
};

export const calculateCellColor = (value, min, max, factor) => {
  const avgValue = (min + max) / 2;
  const calculatedHigh = avgValue + (20 * avgValue) / 100;
  const calculatedLow = avgValue - (40 * avgValue) / 100;
  const style = {
    color: "initial",
    fontWeight: "bold",
  };

  if (value <= 0) {
    return { ...style, ...{ fontWeight: "normal" } };
  }

  if (factor === "negative") {
    return value >= calculatedHigh
      ? { ...style, ...{ color: "red" } }
      : value < calculatedLow
      ? { ...style, ...{ color: "green" } }
      : { ...style, ...{ fontWeight: "normal" } };
  } else {
    return value >= calculatedHigh
      ? { ...style, ...{ color: "green" } }
      : value < calculatedLow
      ? { ...style, ...{ color: "red" } }
      : { ...style, ...{ fontWeight: "normal" } };
  }
};

export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const clearLSandReloadPage = _ => {
  window.localStorage.removeItem("filters");
  window.location.reload();
};
