import React, { Fragment } from "react";

export default function Search({ value, onHandleSearch }) {
  return (
    <Fragment>
      <input type="text" value={value} onChange={onHandleSearch} />
    </Fragment>
  );
}
