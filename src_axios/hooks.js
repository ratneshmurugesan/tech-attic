import { useState } from "react";
import axios from "axios";

// Axios Instances
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const todoUrl = "https://jsonplaceholder.typicode.com/todos";
const photoUrl = "https://jsonplaceholder.typicode.com/photos";

axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

export default function CustomHook() {
  const [result, setResult] = useState([]);

  const handleGetRequest = () => {
    axiosInstance
      .get("/comments", {
        params: {
          _limit: 2,
        },
        // timeout: 5,
      })
      // axios
      //   .get(todoUrl, {
      //     params: {
      //       _limit: 2,
      //     },
      //   })
      .then(res => setResult(res))
      .catch(err => console.log(err))
      .finally(() => console.log("handleGetRequest"));
  };

  // To create a resource
  const handlePostRequest = () => {
    const data = {
      title: `New Todo ${new Date().getMilliseconds()}`,
      completed: false,
    };
    axios
      .post(todoUrl, data)
      .then(res => setResult(res))
      .catch(err => console.log(err));
    console.log("handlePostRequest");
  };

  // To update a resource completely
  const handlePutRequest = () => {
    axios
      .put(todoUrl + "/2", {
        // title: `Updated Todo ${new Date().getMilliseconds()}`,
        completed: true,
        // userId: 1,
      })
      .then(res => setResult(res))
      .catch(err => console.log(err));
    console.log("handlePutRequest");
  };

  // To update a resource specifically whatever is mentioned
  const handlePatchRequest = () => {
    axios
      .patch(todoUrl + "/2", {
        completed: "patch",
      })
      .then(res => setResult(res))
      .catch(err => console.log(err));
    console.log("handlePatchRequest");
  };

  const handleDeleteRequest = () => {
    axios
      .delete(todoUrl + "/200")
      .then(res => setResult(res))
      .catch(err => console.log(err));
    console.log("handleDeleteRequest");
  };

  const handlesSimultaneousRequest = () => {
    axios
      .all([
        axios.get(todoUrl, {
          params: { _limit: 1 },
        }),
        axios.get(photoUrl, {
          params: { _limit: 1 },
        }),
      ])
      .then(axios.spread((todos, photos) => setResult(photos)));
    console.log("handlesSimultaneousRequest");
  };

  const handleCustomHeadersRequest = () => {
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "sometoken:-)",
      },
    };
    const data = {
      title: `New Todo with custom header ${new Date().getMilliseconds()}`,
    };
    axios
      .post(todoUrl, data, customConfig)
      .then(res => setResult(res))
      .catch(err => console.log(err));
    console.log("handleCustomHeadersRequest");
  };

  const handleTransformRequest = () => {
    const options = {
      method: "post",
      url: todoUrl,
      data: {
        title: `New Todo ${new Date().getMilliseconds()}`,
        completed: false,
      },
      transformResponse: axios.defaults.transformResponse.concat(data => {
        data.title = data.title.toUpperCase();
        return data;
      }),
    };

    axios(options)
      .then(res => setResult(res))
      .catch(err => console.log(err));
    console.log("handleTransformRequest");
  };

  const handleErrorHandleRequest = () => {
    axios
      .get(todoUrl + "error", {
        params: {
          _limit: 2,
        },
        // validateStatus: status => status < 500, // Reject only if status is greater than or equal to 50
      })
      .then(res => setResult(res))
      .catch(err => {
        console.log(err.response);
      })
      .finally(() => console.log("handleGetRequest"));
    console.log("handleErrorHandleRequest");
  };

  const handleCancelRequest = () => {
    const source = axios.CancelToken.source();
    axios
      .get(todoUrl, {
        cancelToken: source.token,
      })
      .then(res => setResult(res))
      .catch(thrown => {
        if (axios.isCancel(thrown)) {
          console.log("Request cancelled by condition", thrown.message);
        }
      });

    if (true) {
      source.cancel("Cancelling the request");
    }
    console.log("handleCancelRequest");
  };

  // Interceptors - request
  axios.interceptors.request.use(
    config => {
      console.log(
        `${config.method.toUpperCase()} method sent to ${
          config.url
        } at ${new Date().getTime()}`
      );
      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return [
    result,
    handleGetRequest,
    handlePostRequest,
    handlePutRequest,
    handlePatchRequest,
    handleDeleteRequest,
    handlesSimultaneousRequest,
    handleCustomHeadersRequest,
    handleTransformRequest,
    handleErrorHandleRequest,
    handleCancelRequest,
  ];
}
