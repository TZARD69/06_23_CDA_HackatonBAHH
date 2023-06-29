import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@mui/material";

export default function DataBase() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/smartphones/")
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <ul>
        {data.map((smartphone) => (
          <Card key={smartphone.id} title={smartphone.model}>
            {smartphone.model}
          </Card>
        ))}
      </ul>
    </div>
  );
}
