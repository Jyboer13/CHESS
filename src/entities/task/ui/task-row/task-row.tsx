import { Box, Paper } from "@mui/material";
import cn from "classnames";
import { Link } from "react-router-dom";

export const TaskRow = ({ data, titleHref }: any) => {
  return (
    <Paper>
      {titleHref ? <Link to={titleHref}>{data.title}</Link> : data.title}
    </Paper>
  );
};
