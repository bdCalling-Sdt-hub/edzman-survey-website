import React, { useState, useEffect, useMemo } from "react";
import { Flex, Progress } from "antd";

function ProgressBarCustom({ data }) {
  const processedData = useMemo(() => data || [], [data]);

  const initialProgress = useMemo(
    () =>
      processedData.reduce((acc, item) => {
        acc[item._id] = 0;
        return acc;
      }, {}),
    [processedData]
  );

  const [progressValues, setProgressValues] = useState(initialProgress);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValues((prevValues) => {
        let allCompleted = true;

        const nextValues = Object.keys(prevValues).reduce((acc, key) => {
          const targetValue =
            processedData.find((item) => item._id === key)?.percentage || 0;
          if (prevValues[key] < targetValue) {
            acc[key] = Math.min(prevValues[key] + 1, targetValue);
            allCompleted = false;
          } else {
            acc[key] = prevValues[key];
          }
          return acc;
        }, {});

        if (allCompleted) {
          clearInterval(interval);
        }
        return nextValues;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [processedData]);

  return (
    <div className="mr-12 my-12">
      <Flex vertical gap="small">
        {processedData.map((item) => (
          <div key={item._id}>
            <p>{item.label}:</p>
            <Progress
              percent={progressValues[item._id]}
              strokeColor="#62c6ff"
            />
          </div>
        ))}
      </Flex>
    </div>
  );
}

export default ProgressBarCustom;
