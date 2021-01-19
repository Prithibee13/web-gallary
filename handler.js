let img = [];
let id = "";

function input() 
{
    let img_src = document.getElementById("src").value;   
    let img_alt = document.getElementById("alt").value; 

    test = '<img class="img-fluid rounded w-100" id ="th" src=" ' + img_src + ' "/>' + "<h3>" + img_alt + "</h3>" + "<button class='btn btn-warning'>Delete</button>";
    img.push(test);
    id = " ";
    img.forEach(sept);
    document.getElementById("lad").innerHTML = id;
}


function sept(value)
{
    id += '<div class = "col-xs-12 col-sm-6 col-md-4  img-thumbnail main">' + value + "</div>"   
}


function over()
{
    document.getElementById("line").style.visibility = "visible";
}

function over2()
{
    document.getElementById("line").style.visibility = "hidden";
}





function showtab()
{ 
    document.getElementById('mah').style.visibility= "visible";
}


function showcar()
{
    document.getElementById("poj").style.visibility = "visible";
}