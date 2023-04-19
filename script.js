//your JS code here. If required.
    function showTime() {
        const date = new Date();
        const options = { 
          year: 'numeric', 
          month: 'numeric', 
          day: 'numeric',
          hour: 'numeric', 
          minute: 'numeric', 
          second: 'numeric',
          hour12: true
        };
        const indianTime = new Intl.DateTimeFormat('en-US', options).format(date);
        document.getElementById('timer').innerHTML = indianTime;
      }
      setInterval(showTime, 1000);