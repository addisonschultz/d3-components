import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import * as d3 from "react-d3-components";

interface Props {
  file: any;
  height: number;
  width: number;
}

export function PieChart(props: Props) {
  const [data, setData] = React.useState({
    values: [
      { x: "SomethingA", y: 10 },
      { x: "SomethingB", y: 4 },
      { x: "SomethingC", y: 3 }
    ]
  });

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
      <d3.PieChart
        data={data}
        width={400}
        height={400}
        margin={{ top: 10, bottom: 50, left: 100, right: 100 }}
      />
    </div>
  );
}

PieChart.defaultProps = {
  height: 400,
  width: 400
};

addPropertyControls(PieChart, {
  file: { type: ControlType.File, title: "Data", allowedFileTypes: ["json"] }
});
