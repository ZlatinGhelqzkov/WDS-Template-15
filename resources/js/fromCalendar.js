function generateDatesForYear(year) {
  let dates = [];
  let date = new Date(year, 0, 1); // Start at January 1st of the given year

  while (date.getFullYear() === year) {
      // Push a string representation of the current date to the array
      dates.push(date.toISOString().split('T')[0]);
      // Increment the date by one day
      date.setDate(date.getDate() + 1);
  }

  return dates;
}

let dates2024 = generateDatesForYear(2024);

let currentYear = 2024; // Starting year
let currentMonth = 0; // Starting from January (0 indexed)

function fromUpdateCalendar(year, month) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    // Update the month header
    const monthHeader = document.querySelector('.from-month-picker h2');
    monthHeader.textContent = `${monthNames[month]} ${year}`;
  
    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
    
    // Correcting the firstDay to account for weeks that start on Monday
    const firstDayOfWeek = (firstDay === 0) ? 6 : firstDay - 1;
  
    // Clear the previous days
    const calendarDaysContainer = document.querySelector('.from-calendar-days');
    calendarDaysContainer.innerHTML = '<div class="from-weekday">Mon</div>' +
                                      '<div class="from-weekday">Tue</div>' +
                                      '<div class="from-weekday">Wed</div>' +
                                      '<div class="from-weekday">Thu</div>' +
                                      '<div class="from-weekday">Fri</div>' +
                                      '<div class="from-weekday">Sat</div>' +
                                      '<div class="from-weekday">Sun</div>';
  
    // Fill in the blanks for days of the week before the first day
    for (let i = 0; i < firstDayOfWeek; i++) {
      const blankDay = document.createElement('div');
      blankDay.className = 'from-day-blank';
      calendarDaysContainer.appendChild(blankDay);
    }
    
    // Fill in the days of the month
    const numDays = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= numDays; day++) {
      const dayElement = document.createElement('div');
      dayElement.className = 'from-day';
      dayElement.textContent = day;
      dayElement.addEventListener('click', function() {
        selectFromDate(year, month, day);
      });
      calendarDaysContainer.appendChild(dayElement);
    }
  }
  
  function selectFromDate(year, month, day) {
    // Getting date from the user
    const date = new Date(year, month, day);

    // Options to specify that we want a long weekday name
    const options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit' };
  
    // Formatting the date with the specified options
    const formattedDate = date.toLocaleDateString('en-UK', options);
  
    // Set the value of the input field with the selected date including the weekday
    const selectedDateInput = document.getElementById('fromDate');
    selectedDateInput.value = formattedDate;
    
    //Close the calendar dropdown
    document.querySelector('.from-calendar-dropdown').style.display = 'none';
  }

// Attach event listeners to the previous and next buttons
document.querySelector('.from-month-prev').addEventListener('click', function() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  fromUpdateCalendar(currentYear, currentMonth);
});

document.querySelector('.from-month-next').addEventListener('click', function() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  fromUpdateCalendar(currentYear, currentMonth);
});


document.getElementById('fromDate').addEventListener('click', function(event) {
  document.querySelector('.from-calendar-dropdown').classList.toggle('active');
  let fromCalendarDropdown = document.querySelector(".from-calendar-dropdown");
    fromCalendarDropdown.style.display = "block";
  event.stopPropagation(); // Prevent the event from propagating to the document
});

// Hide dropdown on outside click
document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.from-calendar-dropdown');
  const input = document.getElementById('fromDate');
  // Check if the click is outside the dropdown and input
  if (!dropdown.contains(event.target) && !input.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});

document.addEventListener('click', function(event) {
  const dropdown = document.querySelector('.from-calendar-dropdown');
  const input = document.getElementById('fromDate');
  // Check if the click is outside the dropdown and input
  if (!dropdown.contains(event.target) && !input.contains(event.target)) {
    dropdown.classList.remove('active');
    dropdown.style.display = 'none'; // Make sure to hide the dropdown visually
  }
});

// Initial call to display the current month and year
fromUpdateCalendar(currentYear, currentMonth);
