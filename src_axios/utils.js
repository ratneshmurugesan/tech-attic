import React from "react";

export default function showOutput(res) {
  // const simpleData = res && res.data ? res.data[0] : {};
  return (
    <>
      <div key="status" className="card card-body mb-4">
        <h5>Status: {res.status}</h5>
      </div>
      <div key="headers" className="card mt-3">
        <div className="card-header">Headers</div>
        <div className="card-body">
          <pre>{JSON.stringify(res.headers, null, 2)}</pre>
        </div>
      </div>
      <div key="data" className="card mt-3">
        <div className="card-header">Data</div>
        <div className="card-body">
          <pre>{JSON.stringify(res.data, null, 2)}</pre>
        </div>
      </div>
      <div key="config" className="card mt-3">
        <div className="card-header">Config</div>
        <div className="card-body">
          <pre>{JSON.stringify(res.config, null, 2)}</pre>
        </div>
      </div>
      <div key="error" className="card mt-3">
        <div className="card-header">Error</div>
        <div className="card-body">
          <pre>{JSON.stringify(res.error, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
