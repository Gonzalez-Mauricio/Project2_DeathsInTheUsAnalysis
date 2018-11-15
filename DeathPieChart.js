// var trace1 = {
//   labels: ["Heart Disease", "Malignant Neoplasms", "Unintentional Injury", "Chronic Low. Respiratory Disease",
//       "Cerebrovascular", "Alzheimer's Disease", "Diabetes Mellitus", "Influenza & Pneumonia"
//       "Nephritis", "Suicide", "Septicemia", "Liver Disease"
//       "Hypertension", "Parkinson's Disease", "Pneumonitis", "All Others"],
//   values: [635260, 598038, 161374, 154596, 142142, 116103, 80058, 51537,
//           50046, 44965, 40613, 40545, 33246, 29697, 19715, 546313],
//   type: 'pie'
// };
//
// var data = [trace1];
//
// var layout = {
//   title: "15 Leading Causes of Deaths, United States, 2016",
// };
//
// Plotly.newPlot("plot", data, layout);

console.log("in js");

var data = [{
  values: [635260, 598038, 161374, 154596, 142142, 116103, 80058, 51537,
          50046, 44965, 40613, 40545, 33246, 29697, 19715, 546313],
  labels: ["Heart Disease", "Malignant Neoplasms", "Unintentional Injury", "Chronic Low. Respiratory Disease",
            "Cerebrovascular", "Alzheimer's Disease", "Diabetes Mellitus", "Influenza & Pneumonia",
            "Nephritis", "Suicide", "Septicemia", "Liver Disease",
            "Hypertension", "Parkinson's Disease", "Pneumonitis", "All Others"],
  text: ["Heart Disease", "Malignant Neoplasms", "Unintentional Injury", "Chronic Low. Respiratory Disease",
            "Cerebrovascular", "Alzheimer's Disease", "Diabetes Mellitus", "Influenza & Pneumonia",
            "Nephritis", "Suicide", "Septicemia", "Liver Disease",
            "Hypertension", "Parkinson's Disease", "Pneumonitis", "All Others"],
  type: 'pie'
}];

var layout = {showlegend: false,
  title: "15 Leading Causes of Deaths, United States, 2016",
  height: 800,
  width: 1200
};

Plotly.newPlot('plot', data, layout);
