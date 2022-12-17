let finances = [
['Jan-2010', 867884],
['Feb-2010', 984655],
['Mar-2010', 322013],
['Apr-2010', -69417],
['May-2010', 310503],
['Jun-2010', 522857],
['Jul-2010', 1033096],
['Aug-2010', 604885],
['Sep-2010', -216386],
['Oct-2010', 477532],
['Nov-2010', 893810],
['Dec-2010', -80353],
['Jan-2011', 779806],
['Feb-2011', -335203],
['Mar-2011', 697845],
['Apr-2011', 793163],
['May-2011', 485070],
['Jun-2011', 584122],
['Jul-2011', 62729],
['Aug-2011', 668179],
['Sep-2011', 899906],
['Oct-2011', 834719],
['Nov-2011', 132003],
['Dec-2011', 309978],
['Jan-2012', -755566],
['Feb-2012', 1170593],
['Mar-2012', 252788],
['Apr-2012', 1151518],
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702],
['Aug-2012', -1022534],
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942],
['Sep-2013', -1196225],
['Oct-2013', 268997],
['Nov-2013', -687986],
['Dec-2013', 1150461],
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533],
['Apr-2015', -524626],
['May-2015', 158620],
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000],
['Feb-2016', -1100387],
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961],
['Jul-2016', -1163797],
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685],
['Nov-2016', 795914],
['Dec-2016', 60988],
['Jan-2017', 138230],
['Feb-2017', 671099]
];

//How do I find the total number of months?
  //Find the length of the array
    //totalMonths = length of the array
    

  //Create an variable for total months with the .length attribute
  let totalMonths = finances.length;

  //Display results in the console
  console.log("Total months = " + totalMonths);


//How do I find the net total of Profit/Losses?
  //Find the sum of the objects in the amounts column
    //netTotalProfitLoss = the sum amounts of all months
   
  //Create a variable for net total profit/loss
  let netTotalProfitLoss = 0;

  //Use a for loop to separate the two columns
  for (let i = 0; i < totalMonths; i++) {
      const [date, amount] = finances[i];

      //Confirm the extraction
      // console.log(amount);

      //Sum up the objects in the amount column
      netTotalProfitLoss += amount;       
  }

  //Display results in the console
  console.log("The net total amount of Profit/Loss over the entire period is " + netTotalProfitLoss);


//How do I find the total average of the Profit/Loss changes over the entire period
  //Find the total average changes and the total number of months  
  //Divide the total average change by the total number of months
    //totalAvgProfitLoss = totalAvgChanges / totalMonths
    //How do I find the total average changes
      //Find the average change 
      //Find the sum of all average changes 
      //How do I find the average change 
        //Find the difference between the previous and next months
          //How do I find the difference
            //Subtract the previous month from the next month
            //Consider reversing the sort order to make calculations easier
            //How do I reverse the sort order
              //Use a for loop that decrements the finance array       
          
  //Create an array for the reversed dates
  let dateReversed = [];

  // Create an array for the reversed amount values
  let amountReversed = [];

  //Create a for loop to reverse the order of the finance array and extract the data
  for (let i = finances.length - 1; i >= 0; i--) {

        //Split the data in the finance array
        const[date, amount] = finances[i];

        //confirm the spit
        // console.log(date); 
        // console.log(amount);

        //Parse the extracted date data to the empty dateReversed array
        dateReversed.push(date)

        //Parse the split amount data to the empty amountReversed array
        amountReversed.push(amount);

      }
  //Confirm that the arrays were populated
  // console.log(dateReversed);      
  // console.log(amountReversed);

  //Create an array for the average changes
  let avgChanges =[]

  //Create a variable for the total average changes
  let totalAvgChanges = 0

  // Use a for loop to calulate the monthly difference and sum them up
  for (let i = 0; i < totalMonths - 1; i++) {

    // Parse the calculated differences to the avgChanges array
    avgChanges.push(amountReversed[i] - amountReversed[i+1]);
  
    // Sum the amounts of the newly created avgChanges array
    totalAvgChanges += avgChanges[i];
  }

  // Confirm that the array was populated
  // console.log(avgChanges);

  //Create a variable for the total average profit/loss using the calculations
  let totalAvgProfitLoss = totalAvgChanges / avgChanges.length;

  // Display the total average of profit/loss changes to 2 decimal points
  console.log("The average of the changes in Profit/Loss over the entire time period is " + totalAvgProfitLoss.toFixed(2));

// How do I find the greatest increase in profits (date and amount) over the time period
  //Find the highest amount change from month to month
  //Align the value with the date 
    //How do I align the amount and date
      //The dateReversed and avgChanges arrays are evenly matched since they were reversed
      // Find the index of the amount in the avgChanges array and retrieve the date at the same index in the dateReversed array
    //greatestProfit = highest monthly change value

  // Create a variable and use math.max to find the highest value from the avgChanges array
  let greatestProfitAmount = Math.max(...avgChanges); 

  // Retrieve the index of the highest change value 
  console.log("The greatest increase in profits is at index " + avgChanges.indexOf(greatestProfitAmount));

  //Create a variable and retrieve the date at the same index from the dateReversed
  let greatestProfitDate = dateReversed[60];

  // Display the greatest increase in profits over the time period
  console.log("The greatest increase in profits over the entire period was " + greatestProfitAmount + " in " + greatestProfitDate)
  
  
// How do I find the greatest decrease in losses (date and amount) over the time period
  //Find the lowest negative amount change from month to month
  //Align the value with the date 
    //How do I align the amount and date
      //The dateReversed and avgChanges arrays are evenly matched since they were reversed
      // Find the index of the amount in the avgChanges array and retrieve the date at the same index in the dateReversed array
    //greatestLossAmount = lowest negative monthly change value

  // Create a variable and use math.min to find the lowest change value
  let greatestLossAmount = Math.min(...avgChanges);

  // Retrieve the index of the lowest change value
  console.log("The greatest decrease in losses is at index " +avgChanges.indexOf(greatestLossAmount));
  
  //Create a variable and retrieve the date at the same index from the dateReversed
  greatestLossDate = dateReversed[41];

  // Display the greatest decrease in losses over the time period
  console.log("The greatest decrease in losses over the entire period was " + greatestLossAmount + " in " + greatestLossDate)

  

    // let financesNew = [];

    // for ( let i = 0; i < avgChanges.length; i++ ) {
    //   financesNew.push( [ dateReversed[i], avgChanges[i] ] );
    // }

    // console.log(financesNew);