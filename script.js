function findDuplicates() {
  // Get the input value and split it into an array
  var input = document.getElementById("arrayInput").value;
  var arr = input.split(",");

  // Create an object to store element counts
  var counts = {};

  // Iterate over the array using a for...of loop
  for (var element of arr) {
    // Trim the element to remove any leading/trailing spaces
    element = element.trim();

    // Increment the count for the element in the object
    if (counts[element]) {
      counts[element]++;
    } else {
      counts[element] = 1;
    }
  }

  // Find duplicates and display the result
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<h3>Duplicate Elements:</h3>";

  for (var key in counts) {
    if (counts[key] > 1) {
      resultDiv.innerHTML += key + "<br>";
    }
  }
}
// const array = [1, 2, 3, 2, 5, 1, 6, 7, 6, 8, 9,5, 4, 8, 7, 1, 5];
//   const takror = Takrorlanuvchi(array);

// function Takrorlanuvchi(arr) {
//     const takror = {};
    
//     for (const element of arr) {
//       if (takror[element]) {
//         takror[element]++;
//       } else {
//         takror[element] = 1;
//       }
//     }
    
//     const natija = [];
    
//     for (const key in takror) {
//       if (takror.hasOwnProperty(key) && takror[key] > 1) {
//         natija.push(key);
//       }
//     }
    
//     return natija;
//   }
  

  
  
//   console.log('Takrorlanuvchi elementlar:', takror);
  