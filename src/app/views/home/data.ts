const data = {
  id: "High Priority",
  color: "hsl(89, 70%, 50%)",
  data: [
    {
      x: "jan",
      y: 10,
    },
    {
      x: "february",
      y: 20,
    },
    {
      x: "march",
      y: 40,
    },
    {
      x: "april",
      y: 10,
    },
    {
      x: "may",
      y: 20,
    },
    {
      x: "june",
      y: 40,
    },
    {
      x: "july",
      y: 20,
    },
    {
      x: "aug",
      y: 50,
    },
    {
      x: "september",
      y: 20,
    },
    {
      x: "october",
      y: 30,
    },
    {
      x: "november",
      y: 10,
    },
    {
      x: "december",
      y: 50,
    },
  ],
};

export const chartAnalytics = [
  {
    id: 1,
    title: "Average response Time",
    color: "#F05D23",
    data: [{ ...data, color: "#F05D23" }],
  },
  {
    id: 2,
    title: "Replies per resolution ",
    color: "#3E68FF",
    data: [{ ...data, color: "#3E68FF" }],
  },
  {
    id: 3,
    title: "Average resolution time",
    color: "#FB6491",
    data: [{ ...data, color: "#FB6491" }],
  },
  {
    id: 4,
    title: "First contact resolution rate",
    color: "#07C9E2",
    data: [{ ...data, color: "#07C9E2" }],
  },
];
