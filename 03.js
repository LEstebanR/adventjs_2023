// In Santa's workshop, a mischievous elf has been playing around with the gift production line, adding or removing an unplanned step.

// You have the original sequence of original manufacturing steps and the modified modified sequence that may include an extra step or be missing a step.

// Your task is to write a function that identifies and returns the first extra step that was added or removed in the manufacturing chain. If there is no difference between the sequences, return an empty string.

function findNaughtyStep(original, modified) {
  if (original.lenght > modified.lenght) {
    modified.forEach(function (element) {
      if (!original.includes(element)) {
        return element;
      }
    });
  } else {
    Array(original).forEach(function (element) {
      if (!modified.includes(element)) {
        return element;
      }
    });
  }
  return "";
}
console.log(findNaughtyStep("abcd", "abcde")); // 'e'
console.log(findNaughtyStep("stepfor", "stepor")); // 'f'
console.log(findNaughtyStep("abcde", "abcde")); // ''
