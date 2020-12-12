import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { savedState } from "./Provider";
import { populationData } from "../data";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "World's Population 2020",
  },
  xAxis: {
    type: "category",
    labels: {
      rotation: -45,
      style: {
        fontSize: "13px",
        fontFamily: "Verdana, sans-serif",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population (millions)",
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat: "Population in 2020: <b>{point.y:.1f} millions</b>",
  },
  series: [
    {
      name: "Population",
      data: [],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: "#FFFFFF",
        align: "right",
        format: "{point.y:.1f}", // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
  ],
};

const Results = ({ visibleColumns }) => {
  const saved = useRecoilValue(savedState);

  useEffect(() => {
    options.series[0].data = (visibleColumns || saved.visibleColumns).map(
      (key) => {
        const { name, population } = populationData[key];
        return [name, population / 1000000000];
      }
    );
  }, [saved, visibleColumns]);

  return (
    <Row>
      <Col>
        <HighchartsReact highcharts={Highcharts} options={{ ...options }} />
      </Col>
    </Row>
  );
};

export default Results;
