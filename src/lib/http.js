import axios from "axios";

const JSON_MIME_TYPE = "application/json";

/**
 * Makes an request. Has the below capabilities
 * - adds Auth token to the header`
 */
function makeRequest(url, options = {}) {
  const newHeaders = options.headers || {};
  options.headers = newHeaders;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: "GET",
      ...options,
    })
      .then(response => {
        if (response.ok) {
          if (response.headers.get("Content-Type").includes(JSON_MIME_TYPE)) {
            return response.json();
          } else {
            return response.text();
          }
        } else {
          reject(
            `Request ${url} failed. Server responded with status ${response.status}`
          );
        }
      })
      .then(async data => {
        let shouldReturn = true;
        if (shouldReturn) {
          resolve(data);
        }
      })
      .catch(async ex => {
        let shouldReturn = true;

        if (shouldReturn) {
          reject(ex);
        }
      });
  });
}

/**
 * Build the url with passed in object as query param
 * This is useful for GET query.
 */
function buildUrlWithQuery(url, params) {
  const queryParts = [];
  Object.keys(params).forEach(p => {
    queryParts.push(`${p}=${params[p]}`);
  });

  return `${url}${queryParts.length ? `?${queryParts.join("&")}` : ""}`;
}

/**
 * Make a GET call to the url and passed in param as object.
 */
export function get(url, params = {}) {
  return makeRequest(buildUrlWithQuery(url, params));
}

/**
 * Make a GET JSON call to the url and passed in param as object.
 */
export function getJSON(url, params = {}) {
  return makeRequest(buildUrlWithQuery(url, params), {
    headers: {
      "Content-Type": JSON_MIME_TYPE,
    },
  });
}

/**
 * Make a POST JSON call to the url.
 */
export function postJSON(url, body = {}) {
  return makeRequest(url, {
    method: "POST",
    headers: {
      "Content-Type": JSON_MIME_TYPE,
    },
    body: JSON.stringify(body),
  });
}

export function downloadFile(url, params = {}) {
  let config = {
    responseType: "blob",
  };
  return axios.get(buildUrlWithQuery(url, params), config);
}
