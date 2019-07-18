import * as React from "react";
import { addPropertyControls, ControlType } from "framer";
import * as d3 from "react-d3-components";

interface Props {
  file: any;
  height: number;
  width: number;
}
export function Waveform(props: Props) {
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
      <d3.Waveform
        data={data}
        width={400}
        height={400}
        margin={{ top: 10, bottom: 50, left: 50, right: 10 }}
      />
    </div>
  );
}

Waveform.defaultProps = {
  height: 400,
  width: 400
};

addPropertyControls(Waveform, {
  file: { type: ControlType.File, title: "Data", allowedFileTypes: ["json"] }
});
