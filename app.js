function countdown(seconds) {
  let counter = seconds;
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
    if (counter < 0) {
      clearInterval(interval);
      console.log("Time's up!");
    }
  }, 1000);
}

countdown(5); // Counts down from 5 to 0
