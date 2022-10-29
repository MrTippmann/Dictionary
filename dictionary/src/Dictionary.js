function Dictionary() {

    /*
    // fetching the json body and stroing in array
    fetch("https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${dictionary.env.DICTIONARY_API_KEY}")
    .then(res => res.json())
    .then((result) => {
          location = result.iss_position;
          timestamp = result.timestamp;

           // chaning timestampto int
           const numbersUnixTimestamp = parseInt(timestamp); 

           //  Rest of it is changing unix time stamp to readable time

           const milliseconds = numbersUnixTimestamp * 1000;
  
           const dateObject = new Date(milliseconds)
  
           const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
  
           dateObject.toLocaleString("en-US", {weekday: "long"}) // Monday
           dateObject.toLocaleString("en-US", {month: "long"}) // December
           dateObject.toLocaleString("en-US", {day: "numeric"}) // 9
           dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
           dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
           dateObject.toLocaleString("en-US", {minute: "numeric"}) // 30
           dateObject.toLocaleString("en-US", {second: "numeric"}) // 15
           dateObject.toLocaleString("en-US", {timeZoneName: "short"}) // 12/9/2019, 10:30:15 AM CST

           // Displaying to html page
           document.getElementById("timeStamp").innerHTML = humanDateFormat;
  
           document.getElementById("location").innerHTML = "Location: " + location;

        }),
        (error) => {
            console.log(error);
        }
}
*/}