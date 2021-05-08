import React from "react";
import "./App.scss";
import styles from "./glass.module.scss";
import ReactEcharts from "echarts-for-react";

const pieOption = {
  backgroundColor: "transparent",

  title: {
    text: "Customized Pie",
    left: "center",
    top: 20,
    textStyle: {
      color: "#ccc",
    },
  },

  tooltip: {
    trigger: "item",
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1],
    },
  },
  series: [
    {
      name: "访问来源",
      type: "pie",
      radius: "55%",
      center: ["50%", "50%"],
      data: [
        { value: 335, name: "直接访问" },
        { value: 310, name: "邮件营销" },
        { value: 274, name: "联盟广告" },
        { value: 235, name: "视频广告" },
        { value: 400, name: "搜索引擎" },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: "radius",
      label: {
        color: "rgba(255, 255, 255, 0.3)",
      },
      labelLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.3)",
        },
        smooth: 0.2,
        length: 10,
        length2: 20,
      },
      itemStyle: {
        color: "#c23531",
        shadowBlur: 200,
        shadowColor: "rgba(0, 0, 0, 0.5)",
      },

      animationType: "scale",
      animationEasing: "elasticOut",
      animationDelay: function (idx) {
        return Math.random() * 200;
      },
    },
  ],
};

const barOption = {
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};

const radarOption = {
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: "#fff",
        backgroundColor: "#999",
        borderRadius: 3,
        padding: [3, 5],
      },
    },
    indicator: [
      { name: "销售（sales）", max: 6500 },
      { name: "管理（Administration）", max: 16000 },
      { name: "信息技术（Information Techology）", max: 30000 },
      { name: "客服（Customer Support）", max: 38000 },
      { name: "研发（Development）", max: 52000 },
      { name: "市场（Marketing）", max: 25000 },
    ],
  },
  series: [
    {
      name: "预算 vs 开销（Budget vs spending）",
      type: "radar",
      // areaStyle: {normal: {}},
      data: [
        {
          value: [4300, 10000, 28000, 35000, 50000, 19000],
          name: "预算分配（Allocated Budget）",
        },
        {
          value: [5000, 14000, 28000, 31000, 42000, 21000],
          name: "实际开销（Actual Spending）",
        },
      ],
    },
  ],
};

const gaugeOption = {
  tooltip: {
    formatter: "{a} <br/>{b} : {c}%",
  },
  series: [
    {
      name: "Pressure",
      type: "gauge",
      detail: {
        formatter: "{value}",
      },
      data: [
        {
          value: 50,
          name: "SCORE",
        },
      ],
    },
  ],
};

const PieChart = () => (
  <ReactEcharts
    option={pieOption}
    style={{ height: "212px", width: "100%" }}
    className={"react_for_echarts"}
  />
);

const BarChart = () => (
  <ReactEcharts
    option={barOption}
    // style={{ height: "212px", width: "100%" }}
    className={"react_for_echarts"}
  />
);

const RadarChart = () => (
  <ReactEcharts
    option={radarOption}
    style={{ height: "212px", width: "100%" }}
    className={"react_for_echarts"}
  />
);
const GaugeChart = () => {
  return (
    <ReactEcharts
      option={gaugeOption}
      style={{ height: "212px", width: "100%" }}
      className={"react_for_echarts"}
    />
  );
};

function App() {
  return (
    <div className={styles.layer0}>
      <div className={styles.emptyGlass}></div>
      <div className={styles.glass1}>
        <PieChart />
      </div>
      <div className={styles.glass2}>
        {/* <div className={styles.loader}>Glass 2 loader</div> */}
        <BarChart />
      </div>
      <div className={styles.glass3}>
        <RadarChart />
      </div>
      <div className={styles.glass4}>
        <div className={styles.ldsRipple}>
          <div></div>
        </div>
      </div>
      <div className={styles.glass5}>
        <GaugeChart />
      </div>
    </div>
  );
}

export default App;
