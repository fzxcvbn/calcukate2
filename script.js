let dobavit11 = document.getElementById('dobavit11'),
    dobavit12 = document.getElementById('dobavit12'),
    dobavit13 = document.getElementById('dobavit13'),
    dobavit14 = document.getElementById('dobavit14'),
    dobavit21 = document.getElementById('dobavit21'),
    dobavit22 = document.getElementById('dobavit22'),
    dobavit23 = document.getElementById('dobavit23'),
    dobavit24 = document.getElementById('dobavit24'),
    otpravka2 = document.querySelector('.otpravka2'),
    otpravka3 = document.querySelector('.otpravka3'),
    otpravka4 = document.querySelector('.otpravka4'),
    otpravka5 = document.querySelector('.otpravka5'),
    dostavka2 = document.querySelector('.dostavka2'),
    dostavka3 = document.querySelector('.dostavka3'),
    dostavka4 = document.querySelector('.dostavka4'),
    dostavka5 = document.querySelector('.dostavka5')

dobavit11.addEventListener("click", function() {
    otpravka2.style.display = 'block';
    dobavit11.style.display = 'none';
})
dobavit12.addEventListener("click", function() {
    otpravka3.style.display = 'block';
    dobavit12.style.display = 'none';
})
dobavit13.addEventListener("click", function() {
    otpravka4.style.display = 'block';
    dobavit13.style.display = 'none';
})
dobavit14.addEventListener("click", function() {
    otpravka5.style.display = 'block';
    dobavit14.style.display = 'none';
})

dobavit21.addEventListener("click", function() {
    dostavka2.style.display = 'block';
    dobavit21.style.display = 'none';
})
dobavit22.addEventListener("click", function() {
    dostavka3.style.display = 'block';
    dobavit22.style.display = 'none';
})
dobavit23.addEventListener("click", function() {
    dostavka4.style.display = 'block';
    dobavit23.style.display = 'none';
})
dobavit24.addEventListener("click", function() {
    dostavka5.style.display = 'block';
    dobavit24.style.display = 'none';
})

function toggle1() {
    var div = document.getElementById('comments1');
    if(this.checked)
        div.style.display = 'block';
    else
        div.style.display = 'none'
}
function toggle2() {
    var div = document.getElementById('comments2');
    if(this.checked)
        div.style.display = 'block';
    else
        div.style.display = 'none'
}
function toggle3() {
    var div = document.getElementById('comments3');
    if(this.checked)
        div.style.display = 'block';
    else
        div.style.display = 'none'
}
function toggle4() {
    var div = document.getElementById('comments4');
    if(this.checked)
        div.style.display = 'block';
    else
        div.style.display = 'none'
}
function toggle5() {
    var div = document.getElementById('comments5');
    if(this.checked)
        div.style.display = 'block';
    else
        div.style.display = 'none'
}
document.getElementById('comment1').onchange = toggle1;
document.getElementById('comment2').onchange = toggle2;
document.getElementById('comment3').onchange = toggle3;
document.getElementById('comment4').onchange = toggle4;
document.getElementById('comment5').onchange = toggle5;

document.getElementById('date-input1').valueAsDate = new Date();
document.getElementById('date-input2').valueAsDate = new Date();

// Первый груз
input1.onfocus = function () {
    gruz1.style.display = 'block';
    input1.style.borderRadius = "5px 5px 0 0";  
};
for (let option of gruz1.options) {
    option.onclick = function () {
        input1.value = option.value;
        gruz1.style.display = 'none';
        input1.style.borderRadius = "5px";
    }
};
  
input1.oninput = function() {
    currentFocus1 = -1;
    var text = input1.value.toUpperCase();
    for (let option of gruz1.options) {
        if(option.value.toUpperCase().indexOf(text) > -1){
            option.style.display = "block";
        } else{
            option.style.display = "none";
        }
    };
}
var currentFocus1 = -1;
input1.onkeydown = function(e) {
    if(e.keyCode == 40){
        currentFocus1++
        addActive(gruz1.options);
    }
    else if(e.keyCode == 38){
        currentFocus1--
        addActive(gruz1.options);
    }
    else if(e.keyCode == 13){
        e.preventDefault();
        if (currentFocus1 > -1) {
            if (gruz1.options) gruz1.options[currentFocus1].click();
        }
    }
}
  
function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus1 >= x.length) currentFocus1 = 0;
    if (currentFocus1 < 0) currentFocus1 = (x.length - 1);
    x[currentFocus1].classList.add("active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}  

// Второй груз
input2.onfocus = function () {
    gruz2.style.display = 'block';
    input2.style.borderRadius = "5px 5px 0 0";  
};
for (let option of gruz2.options) {
    option.onclick = function () {
        input2.value = option.value;
        gruz2.style.display = 'none';
        input2.style.borderRadius = "5px";
    }
};
  
input2.oninput = function() {
    currentFocus2 = -1;
    var text = input2.value.toUpperCase();
    for (let option of gruz2.options) {
        if(option.value.toUpperCase().indexOf(text) > -1){
            option.style.display = "block";
        } else{
            option.style.display = "none";
        }
    };
}
var currentFocus2 = -1;
input2.onkeydown = function(e) {
    if(e.keyCode == 40){
        currentFocus2++
        addActive(gruz2.options);
    }
    else if(e.keyCode == 38){
        currentFocus2--
        addActive(gruz2.options);
    }
    else if(e.keyCode == 13){
        e.preventDefault();
        if (currentFocus1 > -1) {
            if (gruz2.options) gruz2.options[currentFocus2].click();
        }
    }
}
  
function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus2 >= x.length) currentFocus2 = 0;
    if (currentFocus2 < 0) currentFocus2 = (x.length - 1);
    x[currentFocus2].classList.add("active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
} 

// Третий груз
input3.onfocus = function () {
    gruz3.style.display = 'block';
    input3.style.borderRadius = "5px 5px 0 0";  
};
for (let option of gruz3.options) {
    option.onclick = function () {
        input3.value = option.value;
        gruz3.style.display = 'none';
        input3.style.borderRadius = "5px";
    }
};
  
input3.oninput = function() {
    currentFocus3 = -1;
    var text = input3.value.toUpperCase();
    for (let option of gruz3.options) {
        if(option.value.toUpperCase().indexOf(text) > -1){
            option.style.display = "block";
        } else{
            option.style.display = "none";
        }
    };
}
var currentFocus3 = -1;
input3.onkeydown = function(e) {
    if(e.keyCode == 40){
        currentFocus3++
        addActive(gruz3.options);
    }
    else if(e.keyCode == 38){
        currentFocus3--
        addActive(gruz3.options);
    }
    else if(e.keyCode == 13){
        e.preventDefault();
        if (currentFocus3 > -1) {
            if (gruz3.options) gruz1.options[currentFocus3].click();
        }
    }
}
  
function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus3 >= x.length) currentFocus3 = 0;
    if (currentFocus3 < 0) currentFocus3 = (x.length - 1);
    x[currentFocus3].classList.add("active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}

// Четвертый груз
input4.onfocus = function () {
    gruz4.style.display = 'block';
    input4.style.borderRadius = "5px 5px 0 0";  
};
for (let option of gruz4.options) {
    option.onclick = function () {
        input4.value = option.value;
        gruz4.style.display = 'none';
        input4.style.borderRadius = "5px";
    }
};
  
input4.oninput = function() {
    currentFocus4 = -1;
    var text = input4.value.toUpperCase();
    for (let option of gruz4.options) {
        if(option.value.toUpperCase().indexOf(text) > -1){
            option.style.display = "block";
        } else{
            option.style.display = "none";
        }
    };
}
var currentFocus4 = -1;
input1.onkeydown = function(e) {
    if(e.keyCode == 40){
        currentFocus4++
        addActive(gruz4.options);
    }
    else if(e.keyCode == 38){
        currentFocus4--
        addActive(gruz4.options);
    }
    else if(e.keyCode == 13){
        e.preventDefault();
        if (currentFocus4 > -1) {
            if (gruz4.options) gruz4.options[currentFocus4].click();
        }
    }
}
  
function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus4 >= x.length) currentFocus4 = 0;
    if (currentFocus4 < 0) currentFocus4 = (x.length - 1);
    x[currentFocus4].classList.add("active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}

// Пятый груз
input5.onfocus = function () {
    gruz5.style.display = 'block';
    input5.style.borderRadius = "5px 5px 0 0";  
};
for (let option of gruz5.options) {
    option.onclick = function () {
        input5.value = option.value;
        gruz5.style.display = 'none';
        input5.style.borderRadius = "5px";
    }
};
  
input5.oninput = function() {
    currentFocus5 = -1;
    var text = input5.value.toUpperCase();
    for (let option of gruz5.options) {
        if(option.value.toUpperCase().indexOf(text) > -1){
            option.style.display = "block";
        } else{
            option.style.display = "none";
        }
    };
}
var currentFocus5 = -1;
input5.onkeydown = function(e) {
    if(e.keyCode == 40){
        currentFocus5++
        addActive(gruz5.options);
    }
    else if(e.keyCode == 38){
        currentFocus5--
        addActive(gruz5.options);
    }
    else if(e.keyCode == 13){
        e.preventDefault();
        if (currentFocus5 > -1) {
            if (gruz5.options) gruz5.options[currentFocus5].click();
        }
    }
}
  
function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus5 >= x.length) currentFocus5 = 0;
    if (currentFocus5 < 0) currentFocus5 = (x.length - 1);
    x[currentFocus5].classList.add("active");
}
function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
}





