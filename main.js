nameofarray = [];
function submit()
{
    var name_1 = document.getElementById("name1").value;
    var name_2 = document.getElementById("name2").value;
    var name_3 = document.getElementById("name3").value;
    var name_4 = document.getElementById("name4").value;

    nameofarray.push(name_1);
    nameofarray.push(name_2);
    nameofarray.push(name_3);
    nameofarray.push(name_4);

    console.log(nameofarray);

    document.getElementById("display_name").innerHTML = nameofarray;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting()
{
    nameofarray.sort();
    console.log(nameofarray);
    document.getElementById("display_name").innerHTML = nameofarray;
}

