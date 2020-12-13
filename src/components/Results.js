import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { savedState, modalToggle } from "./Provider";
import { populationData } from "../data";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "World's Population 2020",
  },
  subtitle: {
    text:
      'Source: <a href="https://www.worldometers.info/world-population/population-by-country/">worldometer</a>',
  },
  xAxis: {
    type: "category",
    labels: {
      rotation: -45,
      style: {
        fontSize: ".80rem",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: "Population",
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    useHTML: true,
    headerFormat: "",
    pointFormat: "Population in 2020: <b>{point.y:,.0f}</b>",
  },
  series: [
    {
      name: "Population",
      data: [],
    },
  ],
};

const Results = () => {
  const saved = useRecoilValue(savedState);

  const [show, setShow] = useRecoilState(modalToggle);

  useEffect(() => {
    options.series[0].data = saved.visibleColumns.map((key) => {
      const { name, population } = populationData[key];
      return [name, population];
    });
  }, [saved]);

  if (saved.visibleColumns.length > 0) {
    return (
      <Row>
        <Col>
          <div className="text-right">
            <a
              href="edit"
              onClick={(e) => {
                e.preventDefault();
                setShow(!show);
              }}
            >
              Edit
            </a>
          </div>
          <HighchartsReact highcharts={Highcharts} options={{ ...options }} />
        </Col>
      </Row>
    );
  }

  return null;
};

export default Results;
