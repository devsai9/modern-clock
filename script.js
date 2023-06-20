function readHrFormatCookie() {
    if (document.cookie == "hr-format=true") {
        document.getElementById('flexSwitchCheckDefault').checked = true;
        console.log('Checked')
    } else {
        document.getElementById('flexSwitchCheckDefault').checked = false;
    }
}

readHrFormatCookie();

setInterval(startTime, 250);
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let amOrPm = "am";
    if (document.getElementById('flexSwitchCheckDefault').checked == false) {
        if (h > 12) {
            h = h - 12;
        }
        if (h < 12) {
            amOrPm = "am";
        } else if (h >= 12) {
            amOrPm = "pm";
        }
    }
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    if (document.getElementById('flexSwitchCheckDefault').checked == false) {
        document.getElementById('time-header').innerHTML = h + ":" + m + ":" + s + amOrPm;
    } else {
        document.getElementById('time-header').innerHTML = h + ":" + m + ":" + s;
    }

    var month = today.getMonth() + 1;
    var monthWord;
    switch (month) {
        case 1:
            monthWord = "January";
            break;
        case 2:
            monthWord = "February";
            break;
        case 3:
            monthWord = "March";
            break;
        case 4:
            monthWord = "April";
            break;
        case 5:
            monthWord = "May";
            break;
        case 6:
            monthWord = "June";
            break;
        case 7:
            monthWord = "July";
            break;
        case 8:
            monthWord = "August";
            break;
        case 9:
            monthWord = "September";
            break;
        case 10:
            monthWord = "October";
            break;
        case 11:
            monthWord = "November";
            break;
        case 12:
            monthWord = "December";
            break;
    }

    var day = today.getDay();
    var dayWord;
    switch (day) {
        case 1:
            dayWord = "Monday";
            break;
        case 2:
            dayWord = "Tuesday";
            break;
        case 3:
            dayWord = "Wednesday";
            break;
        case 4:
            dayWord = "Thursday";
            break;
        case 5:
            dayWord = "Friday";
            break;
        case 6:
            dayWord = "Saturday";
            break;
        case 7:
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
        document.cookie = "hr-format=true; expires=Thu, 16 July 2122 12:00:00 UTC; path=/;";
    } else {
        document.cookie = "hr-format=false; expires=Thu, 16 July 2122 12:00:00 UTC; path=/;";
    }
    console.log(document.cookie);
});