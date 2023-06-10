// ARRAY

// const arr = [
//     { firstName: "Ramesh", lastName: "Kumar" },
//     { firstName: "Arun", lastName: "Kumar" },
//     { firstName: "Dinesh", lastName: "Kumar" },
//   ];
  
  
  
//   const fullName = arr.map(function (name) {
//     return name.firstName + " " + name.lastName;
    
//   });

//   console.log()




  
  

// Function


//   const mobilePhone = [
//     { productName: "OnePlus", price: 10000, categoty: "phone" },
//     { productName: "Apple", price: 20000, categoty: "phone" },
//     { productName: "Vivo", price: 12000, categoty: "phone" },
//     { productName: "Oppo", price: 15000, categoty: "phone" },
//     { productName: "Samsung", price: 23000, categoty: "phone" },
//   ];
  
//   const homeAppliances = [
//     { productName: "Fridge", price: 55000, categoty: "appliances" },
//     { productName: "Washing Machine", price: 36000, categoty: "appliances" },
//     { productName: "Mixer", price: 29000, categoty: "appliances" },
//     { productName: "Stove", price: 16000, categoty: "appliances" },
//     { productName: "AC", price: 29000, categoty: "appliances" },
//   ];
  
//   const bookType = [
//     { productName: "Novel", price: 500, categoty: "books" },
//     { productName: "Fiction", price: 580, categoty: "books" },
//     { productName: "Adventure", price: 309, categoty: "books" },
//     { productName: "SCI-FI", price: 410, categoty: "books" },
//     { productName: "Documentary", price: 360, categoty: "books" },
//   ];
  
//   filterByPrice(mobilePhone, 12000);
//   filterByPrice(homeAppliances, 3000);
//   filterByPrice(bookType, 400);
  
//   function filterByPrice(arr, priceRange) {
//     const filteredProd = arr.filter(function (item) {
//       return item.price > priceRange;
//     });
//     filteredProd.map(function (item) {
//       console.log(item.productName, "Greater than", priceRange);
//     });
//   }

// console.log()









// BUBBLE SORT
  


//  function bubblesort(array){
//     for(let i=0; i <= array.length-1; i++){
//     for(let j=0; i < (array.length-i-1); j++){
//       if(array[j] > array[j+1]){
//          let temp = array[j]
//          array[j] = array[j+1] 
//          array[j+1] = temp
//       }

//     }
//  }
//  console.log(array);
//  }
// let array = [12, 27, 31, 49, 56]
// bubblesort(array);




//   FIND A LARGEST NUMBER IN ARRAY


// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
//   function generateRandomArray(size) {
//     const array = [];
//     for (let i = 0; i < size; i++) {
//       array.push(getRandomNumber(1, 100)); 
//     }
//     return array;
//   }
  
  
// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
  
  
//   function generateRandomArray(size) {
//     const array = [];
//     for (let i = 0; i < size; i++) {
//       array.push(getRandomNumber(1, 100)); 
//     }
//     return array;
//   }
  
  
//   function findLargestNumber(array) {
//     let largestNumber = array[0];
//     for (let i = 1; i < array.length; i++) {
//       if (array[i] > largestNumber) {
//         largestNumber = array[i];
//       }
//     }
//     return largestNumber;
//   }
  
//   const arraySize = 15;
//   const randomArray = generateRandomArray(arraySize);
  
  
//   const largestNumber = findLargestNumber(randomArray);
  
  
//   console.log("Random Array:", randomArray);
//   console.log("Largest Number:", largestNumber);
  
















