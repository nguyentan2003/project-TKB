const courses = [
    {
        id: 0,
        name: "Cấu trúc dữ liệu và giải thuật-1-23 (A18C605)",

        info: `Từ 30/10/2023 đến 05/11/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 06/11/2023 đến 12/11/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 13/11/2023 đến 19/11/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 20/11/2023 đến 26/11/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 27/11/2023 đến 03/12/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 04/12/2023 đến 10/12/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 11/12/2023 đến 17/12/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 18/12/2023 đến 24/12/2023:
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 25/12/2023 đến 31/12/2023:
        Thứ 3 tiết 13,14,15,16 tại 204-TA2 TA2
        Thứ 4 tiết 13,14,15,16 tại 204-TA2 TA2 `,
    },
    {
        id: 1,
        name: "Hệ quản trị cơ sở dữ liệu-1-23 (A18C601)",
        info: `Từ 14/08/2023 đến 20/08/2023:
        Thứ 3 tiết 4,5,6 tại 102_TA2 TA2
        Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
       Từ 21/08/2023 đến 27/08/2023:
        Thứ 3 tiết 4,5,6 tại 102_TA2 TA2
        Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
       Từ 28/08/2023 đến 03/09/2023:
        Thứ 3 tiết 4,5,6 tại 102_TA2 TA2
        Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
       Từ 04/09/2023 đến 10/09/2023:
        Thứ 3 tiết 4,5,6 tại 102_TA2 TA2
        Từ 04/09/2023 đến 10/09/2023:
 Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
Từ 11/09/2023 đến 17/09/2023:
 Thứ 3 tiết 4,5,6 tại 102_TA2 TA2
 Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
Từ 18/09/2023 đến 24/09/2023:
 Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
Từ 25/09/2023 đến 01/10/2023:
 Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
Từ 02/10/2023 đến 08/10/2023:
 Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
Từ 09/10/2023 đến 15/10/2023:
 Thứ 5 tiết 4,5,6 tại 102_TA2 TA2
            `,
    },
    {
        id: 2,
        name: "Kỹ thuật truyền số liệu-1-23 (A18C6D504)",
        info: `Từ 14/08/2023 đến 20/08/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
       Từ 21/08/2023 đến 27/08/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
       Từ 28/08/2023 đến 03/09/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
       Từ 04/09/2023 đến 10/09/2023:
        Thứ 4 tiết 4,5,6 tại 401_TA2 TA2
       Từ 11/09/2023 đến 17/09/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
       Từ 18/09/2023 đến 24/09/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
       Từ 25/09/2023 đến 01/10/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
       Từ 02/10/2023 đến 08/10/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
       Từ 09/10/2023 đến 15/10/2023:
        Thứ 2 tiết 4,5,6 tại 401_TA2 TA2
        Thứ 4 tiết 4,5,6 tại 401_TA2 TA2`,
    },
    {
        id: 3,
        name: "Lập trình hướng đối tượng-1-23 (A18C6D505.1)",
        info: `Từ 04/12/2023 đến 10/12/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 11/12/2023 đến 17/12/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 18/12/2023 đến 24/12/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 25/12/2023 đến 31/12/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 01/01/2024 đến 07/01/2024:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
        Từ 30/10/2023 đến 05/11/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 06/11/2023 đến 12/11/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 13/11/2023 đến 19/11/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 20/11/2023 đến 26/11/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 27/11/2023 đến 03/12/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2`,
    },
    {
        id: 4,
        name: "Linux và phần mềm nguồn mở-1-23 (A18C605)",
        info: `Từ 30/10/2023 đến 05/11/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 06/11/2023 đến 12/11/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 13/11/2023 đến 19/11/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 20/11/2023 đến 26/11/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 27/11/2023 đến 03/12/2023:
        Thứ 5 tiết 13,14,15,16 tại 204-TA2 TA2
        Từ 04/12/2023 đến 10/12/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 11/12/2023 đến 17/12/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 18/12/2023 đến 24/12/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 25/12/2023 đến 31/12/2023:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2
Từ 01/01/2024 đến 07/01/2024:
 Thứ 6 tiết 13,14,15,16 tại 204-TA2 TA2`,
    },
    {
        id: 5,
        name: "Nguyên lý hệ điều hành-1-23 (A18C607)",
        info: `Từ 14/08/2023 đến 20/08/2023:
        Thứ 3 tiết 10,11,12
        Thứ 5 tiết 10,11,12
       Từ 21/08/2023 đến 27/08/2023:
        Thứ 3 tiết 10,11,12 tại 304_TA2 TA2
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
       Từ 28/08/2023 đến 03/09/2023:
        Thứ 3 tiết 10,11,12 tại 304_TA2 TA2
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
       Từ 04/09/2023 đến 10/09/2023:
        Thứ 3 tiết 10,11,12 tại 304_TA2 TA2
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
       Từ 11/09/2023 đến 17/09/2023:
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
       Từ 18/09/2023 đến 24/09/2023:
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
       Từ 25/09/2023 đến 01/10/2023:
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
       Từ 02/10/2023 đến 08/10/2023:
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
       Từ 09/10/2023 đến 15/10/2023:
        Thứ 5 tiết 10,11,12 tại 304_TA2 TA2
        `,
    },
    {
        id: 6,
        name: "Nhập môn mật mã học-1-23 (A1805)",
        info: `Từ 30/10/2023 đến 05/11/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
        Thứ 3 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 06/11/2023 đến 12/11/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
        Thứ 3 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 13/11/2023 đến 19/11/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
        Thứ 3 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 20/11/2023 đến 26/11/2023:
        Thứ 3 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 27/11/2023 đến 03/12/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
        Thứ 3 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 04/12/2023 đến 10/12/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 11/12/2023 đến 17/12/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 18/12/2023 đến 24/12/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 25/12/2023 đến 31/12/2023:
        Thứ 2 tiết 13,14,15,16 tại 204-TA2 TA2
       Từ 01/01/2024 đến 07/01/2024:
        Thứ 3 tiết 13,14,15,16 tại 204-TA2 TA2`,
    },
    {
        id: 7,
        name: "Tiếng Anh 3-1-23 (A18C6D501)",
        info: `Từ 14/08/2023 đến 20/08/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 21/08/2023 đến 27/08/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 28/08/2023 đến 03/09/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 04/09/2023 đến 10/09/2023:
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 11/09/2023 đến 17/09/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 18/09/2023 đến 24/09/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 25/09/2023 đến 01/10/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 02/10/2023 đến 08/10/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 3 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
           Từ 09/10/2023 đến 15/10/2023:
            Thứ 2 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 5 tiết 1,2,3 tại 102_TA2 TA2
            Thứ 6 tiết 1,2,3 tại 102_TA2 TA2`,
    },
];
//
let montOfYear = [""];
for (let i = 1; i <= 12; i++) {
    if (i == 2) montOfYear.push(28);
    else if (i <= 7) {
        if (i % 2 == 1) montOfYear.push(31);
        else montOfYear.push(30);
    } else {
        if (i % 2 == 0) montOfYear.push(31);
        else montOfYear.push(30);
    }
}

console.log(montOfYear);
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//
const main = $(".main");
const items = $(".notification__items");
const notificationDate = $(".notification__date");
//
let star = 1;
let end = 12;
let variable = 6;
for (let index = star; index <= end; index++) {
    let container = document.createElement("div");
    container.classList.add("container");
    // add tháng
    let month = document.createElement("div");
    month.classList.add("month");
    month.innerHTML = `<div class="month">Tháng ${index}</div>`;
    container.appendChild(month);
    // add các ngày
    let content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("data", `${index}`);
    content.innerHTML = `
   <span class="content__item item-date">Mon</span>
   <span class="content__item item-date">Tue</span>
   <span class="content__item item-date">Wed</span>
   <span class="content__item item-date">Thu</span>
   <span class="content__item item-date">Fri</span>
   <span class="content__item item-date">Sat</span>
   <span class="content__item item-date">Sun</span>

   <span class="content__item item-day item-day-first">1</span>
   <span class="content__item item-day ">2</span>
   <span class="content__item item-day">3</span>
   <span class="content__item item-day">4</span>
   <span class="content__item item-day">5</span>
   <span class="content__item item-day">6</span>
   <span class="content__item item-day">7</span>
   <span class="content__item item-day">8</span>
   <span class="content__item item-day">9</span>
   <span class="content__item item-day">10</span>
   <span class="content__item item-day">11</span>
   <span class="content__item item-day">12</span>
   <span class="content__item item-day">13</span>
   <span class="content__item item-day">14</span>
   <span class="content__item item-day">15</span>
   <span class="content__item item-day">16</span>
   <span class="content__item item-day">17</span>
   <span class="content__item item-day">18</span>
   <span class="content__item item-day">19</span>
   <span class="content__item item-day">20</span>
   <span class="content__item item-day">21</span>
   <span class="content__item item-day">22</span>
   <span class="content__item item-day">23</span>
   <span class="content__item item-day">24</span>
   <span class="content__item item-day">25</span>
   <span class="content__item item-day">26</span>
   <span class="content__item item-day">27</span>
   <span class="content__item item-day">28</span>
   <span class="content__item item-day month2">29</span>
   <span class="content__item item-day month2">30</span> 
   `;
    let dem = variable;
    if (montOfYear[index] == 28) {
        let removeSpan = content.querySelectorAll(".month2");
        for (let i of removeSpan) {
            i.remove();
        }
    } else if (montOfYear[index] % 2 == 1) {
        let span = document.createElement("span");
        span.classList.add("content__item", "item-day");
        span.innerText = "31";
        content.appendChild(span);
        // biến số ô trống trước phn tử ngày 1
        variable += 3;
    } else variable += 2;

    container.appendChild(content);
    main.appendChild(container);

    var itemFirst = content.querySelector(".item-day-first");
    itemFirst.style.marginLeft = `calc( ${dem}* var(--width))`;
    // set lại đếm
    if (variable > 6) variable -= 7;
    //
}
let arrCourse = courses.map(function (course) {
    let info = course.info;
    let weeks = info.split("Từ");
    weeks.shift();
    var tuans = weeks.map(function (week) {
        let arrTuan = week.split(":");
        let arrDay = arrTuan[0].split("đến");
        let arrDay0 = arrDay[0].split("/");
        let arrDay1 = arrDay[1].split("/");
        let arrContent = arrTuan[1].split("Thứ");
        arrContent.shift();
        for (let i in arrContent) {
            arrContent[i] = arrContent[i].trim();
        }
        //
        let mang = arrContent.map(function (ptu) {
            let thu = Number(ptu[0]);
            ptu = ptu.slice(2);
            return {
                thu: thu,
                content: ptu,
            };
        });

        return {
            arrContent: mang,
            dayBd: Number(arrDay0[0]),
            dayKt: Number(arrDay1[0]),
            monthBd: Number(arrDay0[1]),
            monthKt: Number(arrDay1[1]),
            yearbd: Number(arrDay0[2]),
            yearkt: Number(arrDay1[2]),
        };
    });

    var xtuan = tuans.map(function (ob) {
        var X = ob.arrContent.map(function (ptu) {
            let day = ptu.thu - 2 + ob.dayBd;
            let thang = ob.monthBd;
            let year = ob.yearbd;
            if (ob.monthBd % 2 == 0) {
                // tháng có 31 ngày
                if (day > 31) day -= 31;
                thang = ob.monthKt;
            } else {
                // tháng có 30 ngày
                if (day > 30) day -= 30;
                thang = ob.monthKt;
                year = ob.yearkt;
            }
            return {
                day: day,
                month: thang,
                content: ptu.content,
                name: course.name,
                year: year,
            };
        });
        return X;
    });

    return {
        id: course.id,
        name: course.name,
        info: xtuan,
    };
});
(function renderSchedule() {
    let nodeItemDay = $$(".item-day");
    let arrItemDay = Array.from(nodeItemDay);
    arrItemDay.forEach(function (itemDay) {
        let valueDay = Number(itemDay.innerText);
        let contentElement = itemDay.parentElement;
        let valueMonth = Number(contentElement.getAttribute("data"));
        let valueYear = 2023;
        // render ra chấm xanh
        arrCourse.forEach(function (course) {
            course.info.forEach(function (week) {
                week.forEach(function (ob) {
                    if (ob.month == valueMonth && valueDay == ob.day) {
                        itemDay.classList.add("tick");
                    }
                });
            });
        });
        // render view when click
        itemDay.onclick = function (e) {
            let arrElement = items.querySelectorAll(".notification__item");
            for (let i of arrElement) {
                i.remove();
            }
            if (valueMonth == 1) valueYear = 2024;
            notificationDate.innerText = `Ngày ${valueDay} tháng ${valueMonth} năm ${valueYear}`;

            if (xuatData(valueMonth, valueDay) == false) {
                let notificationItem = document.createElement("div");
                notificationItem.classList.add("notification__item");
                notificationItem.innerHTML = `Hôm nay bạn không có lịch học`;
                notificationItem.style.fontSize = "20px";
                items.appendChild(notificationItem);
            }
        };
    });
})();
// function tickItem() {
//     arrCourse.forEach(function (course) {
//         course.info.forEach(function (week) {
//             week.forEach(function (ob) {
//                 if (ob.month == month && day == ob.day) {
//                     console.log(ob.name);
//                 }
//             });
//         });
//     });
// }

function xuatData(month, day) {
    let bien = false;
    arrCourse.forEach(function (course) {
        course.info.forEach(function (week) {
            week.forEach(function (ob) {
                if (ob.month == month && day == ob.day) {
                    let notificationItem = document.createElement("div");
                    notificationItem.classList.add("notification__item");

                    let span1 = "07:00";
                    let span2 = "09:25";
                    if (ob.content.includes("4,5,6")) {
                        span1 = "09:35";
                        span2 = "12:00";
                    } else if (ob.content.includes("7,8,9")) {
                        span1 = "12:30";
                        span2 = "2:55";
                    } else if (ob.content.includes("10,11,12")) {
                        span1 = "15:05";
                        span2 = "17:30";
                    } else if (ob.content.includes("13,14,15,16")) {
                        span1 = "18:00";
                        span2 = "21:15";
                    }
                    notificationItem.innerHTML = `
                    <div class="notification__item-time">
                    <span> ${span1}</span>
                    <span> ${span2} </span>
                      </div>
                        <div class="notification__content">
                       <p class="notification__name-class">
                         ${ob.name}
                          </p>
                         <p class="notification__date-time">
                            ${ob.content}
                          </p>
                     </div>
                    `;

                    setTimeout(function () {
                        items.appendChild(notificationItem);
                    }, 50);
                    bien = true;
                    return bien;
                }
            });
        });
    });
    return bien;
}
let viTri = 0;
let containerElements = $$(".container");
$(".icon-forward-back").onclick = function () {
    viTri--;
    if (viTri == -1) viTri = 11;
    for (i of containerElements) {
        i.style.transform = `translateX(calc(${viTri} * (-100%)))`;
    }
};
$(".icon-forward-next").onclick = function () {
    viTri++;
    if (viTri == 12) viTri = 0;
    for (i of containerElements) {
        i.style.transform = `translateX(calc(${viTri} * (-100%)))`;
    }
};
