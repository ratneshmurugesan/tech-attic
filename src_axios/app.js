import React from "react";

import useCustomHook from "./hooks";
import showOutput from "./utils";

export default function AxiosComponent() {
  const [
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
  ] = useCustomHook();

  const GetButton = (
    <button key="Get" onClick={handleGetRequest}>
      Get
    </button>
  );
  const PostButton = (
    <button key="Post" onClick={handlePostRequest}>
      Post
    </button>
  );
  const PutButton = (
    <button key="Put" onClick={handlePutRequest}>
      Put
    </button>
  );
  const PatchButton = (
    <button key="Patch" onClick={handlePatchRequest}>
      Patch
    </button>
  );
  const DeleteButton = (
    <button key="Delete" onClick={handleDeleteRequest}>
      Delete
    </button>
  );
  const SimultaneousReqButton = (
    <button key="Simultaneous" onClick={handlesSimultaneousRequest}>
      Simultaneous
    </button>
  );
  const CustomHeadersButton = (
    <button key="CustomHeaders" onClick={handleCustomHeadersRequest}>
      Custom Headers
    </button>
  );
  const TransformButton = (
    <button key="Transform" onClick={handleTransformRequest}>
      Transform
    </button>
  );
  const ErrorHandleButton = (
    <button key="ErrorHandle" onClick={handleErrorHandleRequest}>
      ErrorHandle
    </button>
  );
  const CancelButton = (
    <button key="Cancel" onClick={handleCancelRequest}>
      Cancel
    </button>
  );

  console.log("AxiosComponent");

  return [
    GetButton,
    PostButton,
    PutButton,
    PatchButton,
    DeleteButton,
    SimultaneousReqButton,
    CustomHeadersButton,
    TransformButton,
    ErrorHandleButton,
    CancelButton,
    <hr />,
    showOutput(result),
  ];
}
