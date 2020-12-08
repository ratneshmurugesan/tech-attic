import React from "react";

import ExecutiveContext from "context/ExecutiveContext";
import Executive from "components/6micro-apps/dashboard-app/Executive";


const DashboardContainer = () => {
  return (
    <ExecutiveContext.Wrapper>
      <Executive />
    </ExecutiveContext.Wrapper>
  );
};

export default DashboardContainer;
