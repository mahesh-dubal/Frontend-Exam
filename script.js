// Product information in JSON format
let products = [
    {
        "Name": "SHIRT",
        "Tax_Percent": 5
    },
    {
        "Name": "Edigible Oil",
        "Tax_Percent": 12
    },
    {
        "Name": "Smartphone",
        "Tax_Percent": 18
    },
    {
        "Name": "Car",
        "Tax_Percent": 28
    }];


let submitBtn = document.getElementById("submit");


//Function to return GST value of selected product
function calGST(v) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].Name === v) {
            return products[i].Tax_Percent;
        }
    }
}

function fun() {
    let x = document.getElementById("optionlist");
    let value = x.value;
    document.getElementById("gst").innerHTML = calGST(value);
}

function item() {
    let a = document.getElementById("optionlist");
    let value = a.value;
    return value;
}



submitBtn.addEventListener("click", () => {

    let costValue = document.getElementById("cost").value;

    let marginValue = document.getElementById("margin").value;

    let gstValue = document.getElementById("gst").innerHTML;

    let totalCost = parseFloat(costValue) + parseFloat(costValue * (marginValue / 100)) + parseFloat(costValue * (gstValue / 100));
    var finalCost = totalCost.toFixed(2);

    document.getElementById("item").innerHTML = ` &nbsp: ${item()}`;
    document.getElementById("showCost").innerHTML = " &nbsp= " +"₹"+costValue;
    document.getElementById("showMargin").innerHTML = " &nbsp= "+marginValue+"%";
    document.getElementById("showGST").innerHTML = " &nbsp= " +gstValue+"%";
    document.getElementById("mrp").innerHTML = " &nbsp= "+"₹"+finalCost;
    
})



// For Mobile View
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// Calculate button disabled untill all fields are entered
(function() {
    $('div > input').keyup(function() {

        var empty = false;
        $('div > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#submit').attr('disabled', 'disabled');
        } else {
            $('#submit').removeAttr('disabled'); 
        }
    });
})()

