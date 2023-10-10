let path = document.location.pathname;

function displayNav() {
  let page = parseInt(path.substring(1, 4));
  let next = (new Array(3).join("0") + (page + 1).toString()).slice(-3);
  let last = (new Array(3).join("0") + (page - 1).toString()).slice(-3);

  let div = `<div class="page-nav">
                <table cellspacing="0" cellpadding="0">
                    <tr>
                        <td id="first"><a href="/001"><i class="bx bxs-chevrons-left"></i></a></td>
                        <td id="last"><a href="/${last}"><i class="bx bxs-chevron-left"></i></a></td>
                        <td id="next"><a href="/${next}"><i class="bx bxs-chevron-right"></i></a></td>
                        <td id="recent"><a href="/"><i class="bx bxs-chevrons-right"></i></a></td>
                    </tr>
                </table>
            </div>`;

  let content = document.querySelector(".e-content").children.item("p");
  content.insertAdjacentHTML("beforeend", div);
  return content;
}

if (path !== "/") {
  setTimeout(() => {
    displayNav();
  }, 200);
}
