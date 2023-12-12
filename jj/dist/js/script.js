const variableNames = ["123", "12345"];

const variables = {};
variableNames.forEach((name) => {
  const element = document.querySelector(`[name="${name}"]`);

  if (element) {
    variables.name = element.getAttribute("name");
  }
});

for (const name in variables) {
  console.log(name);
  console.log(variables);
}
