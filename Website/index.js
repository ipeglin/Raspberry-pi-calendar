

function getMonth(current_month) {
    months = [
        { index: 0, month: "januar" },
        { index: 1, month: "februar" },
        { index: 2, month: "mars" },
        { index: 3, month: "april" },
        { index: 4, month: "mai" },
        { index: 5, month: "juni" },
        { index: 6, month: "juli" },
        { index: 7, month: "august" },
        { index: 8, month: "september" },
        { index: 9, month: "oktober" },
        { index: 10, month: "november" },
        { index: 11, month: "desember" }
    ];
    let mm = months.find((element) => element.index == current_month).month;
    getBackground(mm);
    return mm;
}

function getDate(date) {
    let dd = date.getDate();
    let mm = getMonth(date.getMonth());
    let yyyy = date.getFullYear();
    let fullDate = dd + ". " + mm + " " + yyyy;
    return String(fullDate);
}

function getTime(date) {
    let hh = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let mm = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let ss = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    let fullTime = hh + " : " + mm + "<h3>" + ss + "</h3>";
    return fullTime;
}

function getBackground(currentMonth) {
    let containerDIV = document.getElementById("container");
    let url = "img/";
    switch (currentMonth) {
        case "januar":
            url += "january.jpg";
            break;
        case "februar":
            url += "february.jpg";
            break;
        case "mars":
            url += "march.jpg";
            break;
        case "april":
            url += "april.jpg";
            break;
        case "mai":
            url += "may.jpg";
            break;
        case "juni":
            url += "june.jpg";
            break;
        case "juli":
            url += "july.jpg";
            break;
        case "august":
            url += "august.jpg";
            break;
        case "september":
            url += "september.jpg";
            break;
        case "oktober":
            url += "october.jpg";
            break;
        case "november":
            url += "november.jpg";
            break;
        case "desember":
            url += "december.jpg";
            break;
        default:
            url += "error.jpg";
            break;
    }
    containerDIV.style.backgroundImage = "url(" + url + ")";
}

document.body.onload = () => {
    let today = new Date();
    let dateDIV = document.getElementById("date-container");
    let timeDIV = document.getElementById("time-container");
    dateDIV.innerHTML = "<h2>" + getDate(today) + "</h2>";
    setInterval(() => {
        today = new Date();
        timeDIV.innerHTML = "<h1>" + getTime(today) + "</h1>";
        if (getTime(today) == "00:00<h3>00</h3>" || getTime(today) == "00:00") {
            dateDIV.innerHTML = "<h2>" + getDate(today) + "</h2>";
        }
    }, 1000);
}