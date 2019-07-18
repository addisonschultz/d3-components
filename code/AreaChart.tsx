import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import * as d3 from "react-d3-components";

interface Props {
  file: any;
  xLabel: string;
  yLabel: string;
  height: number;
  width: number;
}

export function AreaChart(props: Props) {
  const [data, setData] = React.useState(null);

  async function fetchUrl() {
    const response = await fetch(props.file);
    const json = await response.json();
    setData(json);
  }

  React.useEffect(() => {
    fetchUrl();
  }, [props]);

  return (
    <div>
      <d3.AreaChart
        data={data}
        width={400}
        height={400}
        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
        xAxis={{ label: props.xLabel }}
        yAxis={{ label: props.yLabel }}
      />
    </div>
  );
}

AreaChart.defaultProps = {
  height: 400,
  width: 400
};

addPropertyControls(AreaChart, {
  file: { type: ControlType.File, title: "Data", allowedFileTypes: ["json"] },
  xLabel: {
    type: ControlType.String,
    title: "X Axis Label",
    defaultValue: "X"
  },
  yLabel: { type: ControlType.String, title: "Y Axis Label", defaultValue: "Y" }
});
