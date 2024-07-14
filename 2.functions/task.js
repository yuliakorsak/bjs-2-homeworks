// Задача 1

function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg = 0;

  for (let item of arr) {
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
    avg += item;
  }

  avg = +(avg / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

// Задача 2

function summElementsWorker(...arr) {
  if (arr.length === 0)
    return 0;

  return arr.reduce((acc, item) => acc + item, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0)
    return 0;

  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0)
    return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let item of arr) {
    if (item % 2 === 0) {
      sumEvenElement += item;
    }
    else {
      sumOddElement += item;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0)
    return 0;

  let sumEvenElement = 0;
  let countEvenElement = 0;

  arr.forEach(item => {
    if (item % 2 === 0) {
      sumEvenElement += item;
      countEvenElement++;
    }
  });

  return +(sumEvenElement / countEvenElement).toFixed(2);
}

// Задача 3

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const currentMax = func(...arrOfArr[i]);
    if (currentMax > maxWorkerResult) {
      maxWorkerResult = currentMax;
    }
  }
  return maxWorkerResult;
}
