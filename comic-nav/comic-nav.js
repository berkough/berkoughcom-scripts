let path = document.location.pathname;
let next;
let last;

function lpad(s, width, char){
    return (s.length >= width) ? s : (new Array(width).join(char) + s).slice(-width);
}

function displayNav(){
    let page = parseInt(path.substring(1,4));
    next = (page + 1).toString();
    last = (page - 1).toString();

    next = lpad(next,3,'0');
    last = lpad(last,3,'0');

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
    
    let content = document.querySelector('.e-content').children.item('p');
    content.insertAdjacentHTML('beforeend', div);
    return content
}

if (path !== '/'){
   setTimeout(() => {
    displayNav();
   }, 200);
}