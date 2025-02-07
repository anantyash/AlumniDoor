import { Card, CardContent } from "@mui/material";
import React from "react";

function InfoCard({ data, title, className = "" }) {
  return (
    <Card
      className={`w-fit font-sans  drop-shadow-lg rounded-lg ${className}`}
      variant=""
    >
      <CardContent>
        <h3 className="py-2"> {data}</h3>
        <p>{title}</p>
      </CardContent>
    </Card>
  );
}

export default InfoCard;
