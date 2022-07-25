import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";
import voxlens from "../voxlens";

const Canvas = (props) => {
  const canvasRefBar = useRef(null);
  const canvasRefLine = useRef(null);
  const datas = [
    {
      color: "red",
      votes: 12,
    },
    {
      color: "blue",
      votes: 19,
    },
    {
      color: "yellow",
      votes: 3,
    },
    {
      color: "green",
      votes: 5,
    },
    {
      color: "purple",
      votes: 2,
    },
    {
      color: "orange",
      votes: 3,
    },
  ];

  useEffect(() => {
    const canvas = canvasRefBar.current;
    const ctx = document.getElementById("myChartBar");
    const context = canvas.getContext("2d");

    const myChart = new Chart(canvas, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 2,
          },
        ],
      },

      options: {
        maintainAspectRatio: true,
        title: {
          display: true,
          text: "testing",
        },
        legend: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },

      // options: {
      //   scales: {
      //     y: {
      //       beginAtZero: true,
      //     },
      //   },
      // },
    });
    //Our draw come here
    // draw(context);
    // myChart;
    const voxlensOptions = {
      x: "color",
      y: "votes",
      title: "testing",
    };

    voxlens("chartjs", ctx, datas, voxlensOptions);

    return () => {
      myChart.destroy();
    };
  }, []);

  //   useEffect(() => {
  //     const canvas = canvasRefLine.current;
  //     const ctx = document.getElementById("myChartLine");
  //     const context = canvas.getContext("2d");

  //     const myChart = new Chart(canvas, {
  //       type: "line",
  //       data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         datasets: [
  //           {
  //             label: "# of Votes",
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //               "rgba(255, 99, 132, 0.2)",
  //               "rgba(54, 162, 235, 0.2)",
  //               "rgba(255, 206, 86, 0.2)",
  //               "rgba(75, 192, 192, 0.2)",
  //               "rgba(153, 102, 255, 0.2)",
  //               "rgba(255, 159, 64, 0.2)",
  //             ],
  //             borderColor: [
  //               "rgba(255, 99, 132, 1)",
  //               "rgba(54, 162, 235, 1)",
  //               "rgba(255, 206, 86, 1)",
  //               "rgba(75, 192, 192, 1)",
  //               "rgba(153, 102, 255, 1)",
  //               "rgba(255, 159, 64, 1)",
  //             ],
  //             borderWidth: 2,
  //           },
  //         ],
  //       },

  //       options: {
  //         maintainAspectRatio: true,
  //         title: {
  //           display: true,
  //           text: "testing",
  //         },
  //         legend: false,
  //         scales: {
  //           y: {
  //             beginAtZero: true,
  //           },
  //         },
  //       },

  //       // options: {
  //       //   scales: {
  //       //     y: {
  //       //       beginAtZero: true,
  //       //     },
  //       //   },
  //       // },
  //     });
  //     //Our draw come here
  //     // draw(context);
  //     // myChart;
  //     const voxlensOptions = {
  //       x: "color",
  //       y: "votes",
  //       title: "testing",
  //     };

  //     voxlens("chartjs", ctx, datas, voxlensOptions);

  //     return () => {
  //       myChart.destroy();
  //     };
  //   }, []);

  const ctx = document.getElementById("myChart");
  console.log("This is ctx:" + datas);
  //   const voxlensOptions = {
  //     x: "color",
  //     y: "votes",
  //     title: "testing",
  //   };

  //   voxlens("chartjs", ctx, datas, voxlensOptions);

  return (
    <>
      <canvas
        id="myChartBar"
        width="400"
        height="400"
        ref={canvasRefBar}
        {...props}
      />
      {/* <canvas
        id="myChartLine"
        width="400"
        height="400"
        ref={canvasRefLine}
        {...props}
      /> */}
    </>
  );
};

export default Canvas;
