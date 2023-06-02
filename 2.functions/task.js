let getArrayParams = (...arr) => {
  let min = arr[0];
  let max= arr[0];
  let sum = 0;
  let avg = 0;

  for (i=0; i < arr.length; i++){
    if((arr[i])>max){
      max=arr[i]
    } 
    if (arr[i]<min){
      min = arr[i]
    }
    sum += arr[i];
    avg = Number((sum/arr.length).toFixed(2));
  }
  
  return {max: max, min: min, avg: avg}
}




function summElementsWorker(...arr){
  let sum = 0;
  if (arr.length === 0) {
    return sum = 0;
  }
for (i=0; i < arr.length; i++){
    sum += arr[i];

}
return sum;
}

           
function differenceMaxMinWorker(...arr){
  let min = arr[0];
  let max= arr[0];
  let deference = 0;
  if (arr.length === 0) {
    return deference = 0;
  }
  for (i=0; i < arr.length; i++){
    if((arr[i])>max){
      max=arr[i]
      } 
    if(arr[i]<min) {
        min=arr[i]
    }
    deference = max - min;
  }
  return deference;  
}

  
function differenceEvenOddWorker(...arr){
  let sumEvenElement = 0; 
  let sumOddElement = 0;
  let difference = 0;
  if (arr.length === 0) {
    return difference;
  }
  for (i=0; i < arr.length; i++){
    if (Math.floor(arr[i] / 2) === arr[i] / 2) {
         sumEvenElement+= arr[i]
    } else {
      sumOddElement+= arr[i]
    }
  }
  return difference = sumEvenElement - sumOddElement;
}
  
function averageEvenElementsWorker(...arr){
  let sumEvenElement = 0;
  let countEvenElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (i=0; i < arr.length; i++){
    if(Math.floor(arr[i] / 2) == arr[i] / 2) {
        sumEvenElement+= arr[i]
        countEvenElement+=1
    }  
  } 
  return avg = sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func){
  let maxWorkerResult = func(...arrOfArr[0]);
  for(let i = 0 ; i < arrOfArr.length ; i++) {
    const result = func(...arrOfArr[i]);
    if(result>maxWorkerResult){
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}