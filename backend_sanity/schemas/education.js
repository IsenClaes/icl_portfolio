export default {
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "institutions",
      title: "Institutions",
      type: "array",
      of: [{ type: "institutions" }],
    },
  ],
};
