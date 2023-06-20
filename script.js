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
    switch (month) {
        case (month == 1):
            monthWord = "January";
            break;
        case (month == 2):
            monthWord = "February";
            break;
        case (month == 3):
            monthWord = "March";
            break;
        case (month == 4):
            monthWord = "April";
            break;
        case (month == 5):
            monthWord = "May";
            break;
        case (month == 6):
            monthWord = "June";
            break;
        case (month == 7):
            monthWord = "July";
            break;
        case (month == 8):
            monthWord = "August";
            break;
        case (month == 9):
            monthWord = "September";
            break;
        case (month == 10):
            monthWord = "October";
            break;
        case (month == 11):
            monthWord = "November";
            break;
        case (month == 12):
            monthWord = "December";
            break;
    }

    var day = today.getDay();
    var dayWord;
    switch (day) {
        case (day == 1):
            dayWord = "Monday";
            break;
        case (day == 2):
            dayWord = "Tuesday";
            break;
        case (day == 3):
            dayWord = "Wednesday";
            break;
        case (day == 4):
            dayWord = "Thursday";
            break;
        case (day == 5):
            dayWord = "Friday";
            break;
        case (day == 6):
            dayWord = "Saturday";
            break;
        case (day == 7):
            dayWord = "Sunday";
            break;
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
        document.cookie = "hr-format=true; path=/;";
    } else {
        document.cookie = "hr-format=false; path=/;";
    }
    console.log(document.cookie);
});