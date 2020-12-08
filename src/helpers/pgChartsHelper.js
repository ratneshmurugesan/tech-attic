import { numberFormatter } from "helpers/utils";

export const buildChartData = (
  data,
  dimensionKey,
  dimensions,
  metricsConfig,
  graphType,
  isStack
) => {
  return Object.values(dimensions)
    .map(item =>
      item.map(dimension =>
        metricsConfig.map(metric => ({
          name: `${dimension.replace(/_/g, " ")} - ${metric.title}`,
          type: graphType,
          stack: graphType === "line" ? false : isStack ? metric.key : isStack,
          label: {
            show: true,
            position: "top",
            formatter: param => param.data.formattedValue,
          },
          yAxisIndex: ["roas", "cpm", "ctr", "cpt", "cpv", "cps"].includes(
            metric.key
          )
            ? 1
            : 0,
          data: data && data
            .filter(f => f[dimensionKey] === dimension)
            .map(d => ({
              name: metric.title,
              value: d[metric.key],
              formattedValue: numberFormatter(
                metric.type,
                d[metric.key],
                metric.isDecimal,
                metric.decimalPoints,
                metric.formatting
              ),
            })),
        }))
      )
    )
    .flat()
    .flat();
};
