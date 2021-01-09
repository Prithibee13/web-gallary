let img = [];
let id = "";

function input() 
{
    let img_src = document.getElementById("src").value;   
    let img_alt = document.getElementById("alt").value; 

    test = '<img class="img-fluid rounded img-thumbnail w-100" id ="th" src=" ' + img_src + ' "/>' + "<p class='img-thumbnail'>" + img_alt + "</p>" + "<button class='btn btn-warning'>Delete</button>";
    img.push(test);
}

function eu()
{ 
    
    id = " ";
    img.forEach(sept);
    document.getElementById("lad").innerHTML = id;
}


function sept(value)
{
    id += '<div class = "col-xs-12 col-sm-6 col-md-4  img-thumbnail">' + value+ "</div>"   
}


function over()
{
    document.getElementById("line").style.visibility = "visible";
}

function over2()
{
    document.getElementById("line").style.visibility = "hidden";
}