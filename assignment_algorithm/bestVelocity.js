function bestVelocity(input) {
  const result = {
    sequence: [],
    sum: 0,
  };

  if(input.length < 3) {
    throw new Error('Not enough sprints, sprints are less than 3.');
  }

  for(i = 0; i < input.length - 2; i++) {
    let currentSum = 0;
    let currentNums = [];
    for(j = 0; j < 3; j++) {
      currentSum += input[i + j];
      currentNums.push(input[i + j]);
    }
    if(i > 0 && currentSum >= result.sum) {
      result.sum = currentSum;
      result.sequence = [...currentNums];
    }
    if (i === 0) {
      result.sum = currentSum;
      result.sequence = [...currentNums];
    }
  }
  return result;
}
