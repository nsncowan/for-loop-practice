
// Business Logic
function count(countTo, countBy) {
  let countArray = [];
  for (let index = 0; index <= countTo; index += countBy) {
    countArray.push(index);
  }
  return countArray;
}

// UI Logic
function handleFormSubmission(event) {
  event.preventDefault();
  const countTo = parseInt(document.getElementById("countTo").value);
  const countBy = parseInt(document.getElementById("countBy").value);
  let div = document.createElement('div');
  let countOutput = count(countTo, countBy);
  div.append(countOutput.join(', '));
  let form = document.getElementById("form");
  form.after(div);
}

window.addEventListener("submit", handleFormSubmission);