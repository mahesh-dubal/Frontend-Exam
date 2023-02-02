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
    //console.log(calGST(value));
}

function item() {
    let a = document.getElementById("optionlist");
    let value = a.value;
    return value;
}



submitBtn.addEventListener("click", () => {

    let costValue = document.getElementById("cost").value;
    console.log(costValue);

    let marginValue = document.getElementById("margin").value;
    console.log(marginValue);

    let gstValue = document.getElementById("gst").innerHTML;
    console.log(gstValue);

    let totalCost = parseFloat(costValue) + parseFloat(costValue * (marginValue / 100)) + parseFloat(costValue * (gstValue / 100));

    console.log(totalCost);

    document.getElementById("item").innerHTML = ` &nbsp: ${item()}`;
    document.getElementById("showCost").innerHTML = " &nbsp= " +"₹"+costValue;
    document.getElementById("showMargin").innerHTML = " &nbsp= "+marginValue+"%";
    document.getElementById("showGST").innerHTML = " &nbsp= " +gstValue+"%";
    document.getElementById("mrp").innerHTML = " &nbsp= "+"₹"+totalCost;
    
})

