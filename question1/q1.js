
function lowerCaseWords (arr){
    return new Promise((resolve, reject) => {
        if (arr.length === 0 )  {
          reject("It is an empty erray");
        } else {
          const filteredArray = arr.filter(item => typeof item === 'string');
          const lowercaseArray = filteredArray.map(word => word.toLowerCase());
          resolve(lowercaseArray);
        }
      });
}

const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"]
const arr = []


lowerCaseWords(mixedArr)
.then(result => {
    console.log(result);})
.catch(error => {
    console.log(error); });


// lowerCaseWords(arr)
// .then(result => {
//     console.log(result);})
// .catch(error => {
//     console.log(error); });