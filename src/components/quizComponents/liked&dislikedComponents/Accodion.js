import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";

function Accodion({ desc, name }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const liked = useSelector((state) => state.liked.liked);
  const disliked = useSelector((state) => state.disliked.disliked);

  console.log(liked);
  console.log(disliked);

  return (
    <div
      style={{
        display: "flex",
        width: "80%",
        padding: "20px",
        justifyContent: "space-between",
        margin: "auto",
      }}
    >
      <div style={{ flex: "0.5" }}>
        <p>Liked comment</p>
        {liked?.map((l) => (
          <>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {l?.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{l?.desc}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </div>
      <div style={{ flex: "0.5" }}>
        <p>Disliked comment</p>
        {disliked?.map((d) => (
          <>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: "33%", flexShrink: 0 }}>
                  {d?.name}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{d?.desc}</Typography>
              </AccordionDetails>
            </Accordion>
          </>
        ))}
      </div>
    </div>
  );
}

export default Accodion;
