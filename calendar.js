// =====================================
// MONTHS
// =====================================

const months = [
    "February",
    "March",
    "April"
];

let currentMonth = 0;

const title = document.getElementById("calendarTitle");
const calendar = document.getElementById("calendar");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

// popup references

const popup = document.getElementById("popup");
const popupDate = document.getElementById("popupDate");
const popupContent = document.getElementById("popupContent");
const closePopup = document.getElementById("closePopup");

// =====================================
// WEEK DAYS
// =====================================

const weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

// =====================================
// RENDER CALENDAR
// =====================================

function renderCalendar() {

    calendar.innerHTML = "";

    const monthName = months[currentMonth];

    const data = calendarData[monthName];

    title.innerHTML = `${monthName} ${data.year}`;

    // Weekday Row

    const weekdayRow = document.createElement("div");

    weekdayRow.className = "weekdays";

    weekDays.forEach(day => {

        const item = document.createElement("div");

        item.innerHTML = day;

        weekdayRow.appendChild(item);

    });

    calendar.appendChild(weekdayRow);

    // Days Grid

    const dayGrid = document.createElement("div");

    dayGrid.className = "days";

    // First Day

    const firstDay = new Date(data.year, data.month, 1).getDay();

    // Total Days

    const totalDays = new Date(
        data.year,
        data.month + 1,
        0
    ).getDate();

    // Empty Boxes

    for (let i = 0; i < firstDay; i++) {

        const empty = document.createElement("div");

        empty.className = "day";

        dayGrid.appendChild(empty);

    }

    // Dates

    for (let date = 1; date <= totalDays; date++) {

        const cell = document.createElement("div");

        cell.className = "day";

        cell.innerHTML = date;

        // Memory Highlight

        if (data.memories[date]) {

            cell.classList.add("memory");

        }

        dayGrid.appendChild(cell);

    }

    calendar.appendChild(dayGrid);

}

renderCalendar();
