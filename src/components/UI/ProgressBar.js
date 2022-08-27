import React from "react";
import { Box } from "@material-ui/core";
import {LinearProgress} from "@material-ui/core";

const ProgressBar = ({progress}) => {
  

  return (
    <Box sx={{ width: "100%", height: '10px' }}>
      <LinearProgress style={{height: '8px'}} variant="determinate" value={progress} />
    </Box>
  );
};

export default ProgressBar;
