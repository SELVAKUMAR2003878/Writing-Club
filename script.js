let run;
function view() {
    let work = document.getElementById("select").value;
    let time = document.getElementById("time").value;
    let count = document.getElementById("count").value;
    let brown = document.getElementById("check");
    let sample = document.getElementById("sample").value;
    let Amount = document.getElementById("AMOUNT");
    console.log(work);
    
    if(work == "record") {
        if(time == "2-week") {
            if(count == 1) {
                if(brown.checked) {
                    if(sample == "offline") {
                        Amount.value = "175";
                    }
                    else {
                        Amount.value = "185";
                    }
                }
                else{
                    if(sample == "offline") {
                        Amount.value = "160";
                    }
                    else{
                        Amount.value = "170";
                    }
                    
                }

            }
            else if(count == 2) {
                if(brown.checked) {
                    if(sample == "offline") {
                        Amount.value = "325";
                    }
                    else{
                        Amount.value = "335";
                    }
                }
                else{
                    if(sample == "offline") {
                        Amount.value = "310";
                    }
                    else{
                        Amount.value = "320";
                    }
                }
            }
            else{
                Amount.value = "0";
            }
        }
        else{
            if(count == 1) {
                if(brown.checked) {
                    if(sample == "offline") {
                        Amount.value = "165";
                    }
                    else{
                        Amount.value = "175";
                    }
                }
                else{
                    if(sample == "offline") {
                        Amount.value = "150";
                    }
                    else{
                        Amount.value = "160";
                    }
                }
            }
            else if(count == 2){
                if(brown.checked) {
                    if(sample == "offline") {
                        Amount.value = "315";
                    }
                    else{
                        Amount.value = "325";
                    }
                }
                else {
                    if(sample == "offline") {
                        Amount.value = "300";
                    }
                    else{
                        Amount.value = "310";
                    }
                }

            }
            else {
                Amount.value = "0";
            }
        }
    }
    else{
        if(count == 1) {
            Amount.value = "10";
        }
        else if(count == 2){
            Amount.value = "20";
        }
        else{
            Amount.value = "0";
        }
    }
    let times = 3000;
    run =  setInterval(view , times);
    
    times = times + 300;

}
/* 
document.getElementById("mysubmit").onclick = function() {

    setTimeout("location.reload(true);",3000);
    function sendWhatsApp() {
        var phonenumber = "+91 7483715717";
        var name = document.getElementById("Name").value;
        var number = document.getElementById("phone").value;
        var email = document.getElementById("Email").value;
        var dept = document.getElementById("Dept").value;
        var select =document.getElementById("select").value;
        var brownsheet = document.getElementById("check");
        var sample = document.getElementById("sample").value;
        var amount = document.getElementById("amount").textContent;

        brownsheet.checked ? brownsheet = "true" : brownsheet = "false";

        var url = "https://wa.me/" + phonenumber + "?text="
        + "Name :" + name + "%0a"
        + "number :" + number + "%0a"
        + "email :" + email + "%0a"
        + "dept :" + dept + "%0a"
        + "select :" + select + "%0a"
        + "brownsheet :" + brownsheet + "%0a"
        + "sample :" + sample + "%0a"
        + "amount :" + amount + "%0a%0a";

        window.open(url , "_blank").focus();
    }
    sendWhatsApp();
    
} */