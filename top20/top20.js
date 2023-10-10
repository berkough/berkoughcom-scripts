//Global Variables to use:
const path = document.location.pathname;
/*--------------------------------------*/
function albumNum() {
  let covers = document.getElementById("covers");
  covers.style = "position: relative;";

  for (let i = 1; i <= 20; i++) {
    let numbers = `<a href="#item${i}"><p class="albNumber" id="cover-${i}">#${i}.</p></a>`;
    covers.innerHTML += numbers;

    setNumPos(i);
  }
}

function setNumPos(num) {
  let displayedNumber = document.getElementById(`cover-${num}`);

  let imgHeight = covers.getElementsByTagName("img")[0].height;
  console.log(imgHeight);
  let imgWidth = covers.getElementsByTagName("img")[0].width;
  console.log(imgWidth);

  let row = [
    imgWidth * 0.25, 
    imgWidth * 0.5, 
    imgWidth - imgWidth * 0.25
  ];
  let col = [
    imgHeight * 0.02,
    imgHeight * 0.23,
    imgHeight * 0.43,
    imgHeight * 0.63,
    imgHeight * 0.83
  ];

  console.log("Widths " + row);
  console.log("Heights " + col);

  switch (num) {
    case 1:
      displayedNumber.style = `position: absolute; top: ${col[0]}px; left: 0px;`;
      break;
    case 2:
      displayedNumber.style = `position: absolute; top: ${col[0]}px; left: ${row[0]}px;`;
      break;
    case 3:
      displayedNumber.style = `position: absolute; top: ${col[0]}px; left: ${row[1]}px;`;
      break;
    case 4:
      displayedNumber.style = `position: absolute; top: ${col[0]}px; left: ${row[2]}px;`;
      break;
    case 5:
      displayedNumber.style = `position: absolute; top: ${col[1]}px; left: 0px;`;
      break;
    case 6:
      displayedNumber.style = `position: absolute; top: ${col[1]}px; left: ${row[0]}px;`;
      break;
    case 7:
      displayedNumber.style = `position: absolute; top: ${col[1]}px; left: ${row[1]}px;`;
      break;
    case 8:
      displayedNumber.style = `position: absolute; top: ${col[1]}px; left: ${row[2]}px;`;
      break;
    case 9:
      displayedNumber.style = `position: absolute; top: ${col[2]}px; left: 0px;`;
      break;
    case 10:
      displayedNumber.style = `position: absolute; top: ${col[2]}px; left: ${row[0]}px;`;
      break;
    case 11:
      displayedNumber.style = `position: absolute; top: ${col[2]}px; left: ${row[1]}px;`;
      break;
    case 12:
      displayedNumber.style = `position: absolute; top: ${col[2]}px; left: ${row[2]}px;`;
      break;
    case 13:
      displayedNumber.style = `position: absolute; top: ${col[3]}px; left: 0px;`;
      break;
    case 14:
      displayedNumber.style = `position: absolute; top: ${col[3]}px; left: ${row[0]}px;`;
      break;
    case 15:
      displayedNumber.style = `position: absolute; top: ${col[3]}px; left: ${row[1]}px;`;
      break;
    case 16:
      displayedNumber.style = `position: absolute; top: ${col[3]}px; left: ${row[2]}px;`;
      break;
    case 17:
      displayedNumber.style = `position: absolute; top: ${col[4]}px; left: 0px;`;
      break;
    case 18:
      displayedNumber.style = `position: absolute; top: ${col[4]}px; left: ${row[0]}px;`;
      break;
    case 19:
      displayedNumber.style = `position: absolute; top: ${col[4]}px; left: ${row[1]}px;`;
      break;
    case 20:
      displayedNumber.style = `position: absolute; top: ${col[4]}px; left: ${row[2]}px;`;
  }
}

if (path !=='/' && document.querySelector("#covers")) {
  setTimeout(() => {
    albumNum();
  }, 500);
}