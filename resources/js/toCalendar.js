    function toUpdateCalendar(year, month) {
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      // Update the month header
      const monthHeader = document.querySelector('.to-month-picker h2');
      monthHeader.textContent = `${monthNames[month]} ${year}`;
    
      // Get the first day of the month
      const firstDay = new Date(year, month, 1).getDay();
      
      // Correcting the firstDay to account for weeks that start on Monday
      const firstDayOfWeek = (firstDay === 0) ? 6 : firstDay - 1;
    
      // Clear the previous days
      const calendarDaysContainer = document.querySelector('.to-calendar-days');
      calendarDaysContainer.innerHTML = '<div class="to-weekday">Mon</div>' +
                                        '<div class="to-weekday">Tue</div>' +
                                        '<div class="to-weekday">Wed</div>' +
                                        '<div class="to-weekday">Thu</div>' +
                                        '<div class="to-weekday">Fri</div>' +
                                        '<div class="to-weekday">Sat</div>' +
                                        '<div class="to-weekday">Sun</div>';
    
      // Fill in the blanks for days of the week before the first day
      for (let i = 0; i < firstDayOfWeek; i++) {
        const blankDay = document.createElement('div');
        blankDay.className = 'to-day-blank';
        calendarDaysContainer.appendChild(blankDay);
      }
      
      // Fill in the days of the month
      const numDays = new Date(year, month + 1, 0).getDate();
      for (let day = 1; day <= numDays; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'to-day';
        dayElement.textContent = day;
        dayElement.addEventListener('click', function() {
          selectToDate(year, month, day);
        });
        calendarDaysContainer.appendChild(dayElement);
      }
    }
    
    function selectToDate(year, month, day) {
      // Getting date to the user
      const date = new Date(year, month, day);
  
      // Options to specify that we want a long weekday name
      const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' };
    
      // Formatting the date with the specified options
      const formattedDate = date.toLocaleDateString('en-UK', options);
    
      // Set the value of the input field with the selected date including the weekday
      const selectedDateInput = document.getElementById('toDate');
      selectedDateInput.value = formattedDate;
      
      // Close the calendar dropdown
      document.querySelector('.to-calendar-dropdown').style.display = 'none';
    }
  
  // Attach event listeners to the previous and next buttons
  document.querySelector('.to-month-prev').addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    toUpdateCalendar(currentYear, currentMonth);
  });
  
  document.querySelector('.to-month-next').addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    toUpdateCalendar(currentYear, currentMonth);
  });

  document.getElementById('toDate').addEventListener('click', function(event) {
    document.querySelector('.to-calendar-dropdown').classList.toggle('active');
    let toCalendarDropdown = document.querySelector(".to-calendar-dropdown");
    toCalendarDropdown.style.display = "block";
    event.stopPropagation(); // Prevent the event from propagating to the document
  });
  
  // Hide dropdown on outside click
  document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.to-calendar-dropdown');
    const input = document.getElementById('toDate');
    // Check if the click is outside the dropdown and input
    if (!dropdown.contains(event.target) && !input.contains(event.target)) {
      dropdown.classList.remove('active');
    }
  });

  document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.to-calendar-dropdown');
    const input = document.getElementById('toDate');
    // Check if the click is outside the dropdown and input
    if (!dropdown.contains(event.target) && !input.contains(event.target)) {
      dropdown.classList.remove('active');
      dropdown.style.display = 'none'; // Make sure to hide the dropdown visually
    }
  });
  
  // Initial call to display the current month and year
  toUpdateCalendar(currentYear, currentMonth);
  