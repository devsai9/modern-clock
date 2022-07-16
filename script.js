function readHrFormatCookie() {
    if (document.cookie == "hr-format=true") {
        document.getElementById('flexSwitchCheckDefault').checked = true;
        console.log('Checked')
    } else {
        document.getElementById('flexSwitchCheckDefault').checked = false;
    }
}

readHrFormatCookie();

setInterval(startTime, 0250);
function startTime() {
    const today = new Date();
    let h = today.getHours();
    if (document.getElementById('flexSwitchCheckDefault').checked == false) {
        if (h > 12) {
            h = h - 12;
        }
    }
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time-header').innerHTML = h + ":" + m + ":" + s;

    var month = today.getMonth() + 1;
    var monthWord;
    if (month == 1) {
        monthWord = "January";
    } 
    if (month == 2) {
        monthWord = "February";
    }
    if (month == 3) {
        monthWord = "March";
    }
    if (month == 4) {
        monthWord = "April";
    }
    if (month == 5) {
        monthWord = "May";
    }
    if (month == 6) {
        monthWord = "June";
    }
    if (month == 7) {
        monthWord = "July";
    }
    if (month == 8) {
        monthWord = "August";
    }
    if (month == 9) {
        monthWord = "September";
    }
    if (month == 10) {
        monthWord = "October";
    }
    if (month == 11) {
        monthWord = "November";
    }
    if (month == 12) {
        monthWord = "December";
    }

    var day = today.getDay();
    var dayWord;
    if (day == 1) {
        dayWord = "Monday";
    }
    if (day == 2) {
        dayWord = "Tuesday";
    }
    if (day == 3) {
        dayWord = "Wednesday";
    }
    if (day == 4) {
        dayWord = "Thursday";
    }
    if (day == 5) {
        dayWord = "Friday";
    }
    if (day == 6) {
        dayWord = "Saturday";
    }
    if (day == 7) {
        dayWord = "Sunday";
    }

    document.getElementById('date-header').innerHTML = dayWord + " " + monthWord + " " + today.getDate() + ", " + today.getFullYear();

    var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.getElementById('timezone-header').innerHTML = timezone;
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.getElementById('flexSwitchCheckDefault').addEventListener('change', function() {
    const today = new Date();
    if (document.getElementById('flexSwitchCheckDefault').checked == true) {
        document.cookie = "hr-format=true; expires=16 July" + (today.getFullYear+100) + "12:00:00 UTC";
    } else {
        document.cookie = "hr-format=false; expires=16 July" + (today.getFullYear+100) + "12:00:00 UTC";
    }
    console.log(document.cookie);
});