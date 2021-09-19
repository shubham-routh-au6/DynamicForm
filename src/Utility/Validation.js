import parse from "html-react-parser";

export const improvize = function (v, output) {
  if (typeof v.props.children === "object") {
    improvize(v.props.children, output);
  } else {
    output.push(v.props.children);
  }
};

export const validation = (data, state) => {
  const validation = [];
  let requiredFields = [];
  data
    .filter((d) => d.required)
    .map((d) => {
      if (d.name === "Address") {
        requiredFields.push(...d.value);
      } else {
        requiredFields.push(d.name);
      }
      return requiredFields;
    });

  requiredFields.forEach((field) => {
    if (!state[field]) {
      validation.push(`${field.split("_").join(" ")} is required`);
    }
  });

  if (state.First_Name && !/^[A-Za-z]+$/.test(state.First_Name)) {
    validation.push("Please enter a valid Name");
  }
  if (state.City && !/^[A-Za-z]+$/.test(state.City)) {
    validation.push("Please enter a valid City");
  }
  if (state.State && !/^[A-Za-z]+$/.test(state.State)) {
    validation.push("Please enter a valid State");
  }
  if (state.Role && state.Role === "Select") {
    validation.push("Please enter Role");
  }

  if (state.Overall_Experience) {
    try {
      const parser = parse(state.Overall_Experience);
      if (typeof parser !== "string") {
        const check = parser.props.children.map((v) => {
          let output = [];
          if (typeof v === "string") {
            output.push(v);
          } else if (typeof v === "object") {
            improvize(v, output);
          }
          return output;
        });
        state.Overall_Experience = check.join("");
      }
    } catch (err) {
      validation.push("Only limited features of Editor are Implemented, Please choose only Bold, Italic, or Text type.");
    }
  }

  return validation;
};
