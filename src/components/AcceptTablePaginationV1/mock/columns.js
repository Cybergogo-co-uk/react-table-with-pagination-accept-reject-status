export const columns = [
  { title: "Name", key: "name", index: 0, type: "text" },
  { title: "Reported By", key: "reportedby", index: 1, type: "text" },
  { title: "Contract type", key: "contracttype", index: 2, type: "text" },
  {
    title: "Incident Type",
    key: "incidentstype",
    index: 3,
    type: "text",
    reference: "incident",
  },
  { title: "Description", key: "description", index: 4, type: "description" },
  {
    title: "Severity",
    key: "severity",
    index: 5,
    type: "badge",
    reference: "severity",

  },
  { title: "Reported Date", key: "reporteddate", index: 6, type: "text" },
  {
    title: "Status",
    key: "status",
    index: 7,
    type: "colored-select",
    reference: "status",
    options: [
      {
        type: "Rejected",
      },
      {
        type: "Accepted"
      }
    ]
  },
  {
    title: "Trade",
    key: "trade",
    index: 8,
    type: "text",
    reference: "trade",
  },
];
