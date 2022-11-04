"use scrict"

// function buttonClick() {
//     var input = document.getElementById('input');
// 	   input.value = '!!!';

// function buttonClick() {
//     var input = document.getElementById('input');
// 	   alert(input.value);
// }

// function buttonClick() {
//     var input = document.getElementById('input');
// 	   var number = Number(input.value);
// 	   var square = number*number;
// 	   alert(square);
// }

// function buttonClick() {
// 	   let input = document.getElementById('input');
//     let input1 = document.getElementById("input1");
// 	   let value = input.value;
//     input.value = input1.value;
//     input1.value = value;
//     alert(number ** 2);
// }

// function buttonClick() {
//     elem.value = 'Новый текст кнопки';
// }

// function buttonClick() {
//     document.getElementById('input').style.color = 'red';

// }
// //Заблокирует элемент
// function button1Click() {
//     var input = document.getElementById('input');
//     input.disabled = true;
// }
    
// //Отблокирует элемент
// function button2Click() {
//     var input = document.getElementById('input');
//     input.disabled = false;
// }

// function buttonClick() {
//     alert("Hello");
// }
    
// function buttonHover() {
//     alert("Hello");
// }

// function buttonDoubleClick() {
//     alert("Hello");
// }

// function buttonOut() {
//     alert("Hello");
// }

// function buttonClick() {
//     let inputValue = input.value;
//     alert(inputValue);
// }

// function buttonClick() {
//     input.value = "Я поменял твой текст";
// }

// function buttonClick() {
//     photo.src = "https://picsum.photos/id/0/5616/3744";
// }

// function buttonClick(input) {
//     while (true) {
//         alert(input.value);
//     }
// }


// function stop(input) {
//     input.value = "Еще раз поменял";
// }
// function clicks(input) {
//     input.value = "Я поменял твой текст";
// }

// function clicks(submit) {
//     submit.value = "Ку-ку";
// }

// function clicks(submit) {
//     submit.disabled = true;
//     submit.value = "Больше нельзя нажать!";
// }

// function buttonOut(image) {
//     image.src = 'assets/img/1.jpg';
// }
// function buttonHover(image) {
//     image.src = 'assets/img/2.jpg';
// }

// function clicks(){
//     let elem = document.getElementById('input');
//     elem.style.color = 'red';
//     elem.style.width = '300px';
// }

// let input = document.getElementById("input");
// function inputNotVisible() {
//     input.style.display = "none";
// }
// function inputVisible() {
//     input.style.display = "inline-block";
// }

// function inputTransform() {
//     let input = document.getElementById("input");
//     input.style.color = "red";
//     input.value = "Ой, я поменял твой текст и css!";
//     input.style.width = '300px';
//     input.style.height = '50px';
//     input.style.borderRadius = '10px';
// }

// function block(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, теперь на меня больше не нажать!';
//     block.disabled = true;
//     unblock.style.display = 'block';
// }
// function unblock(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, на меня снова можно нажимать!';
//     block.disabled = false;
//     unblock.style.display = 'none';
// }

// let counter = 0
// function clickCounter() {
//     document.getElementById("button").innerHTML = ++counter;
// }

// function clicks() {
//     let input = document.getElementById("input");
//     input.style.position = "absolute";
//     input.style.left = "200px";
//     input.value = "Теперь я плаваю справа!";
// }

// function classView() {
//     let input = document.getElementById("input");
//     input.value = "Мои css классы: " + input.className;
// }

// function clicks() {
//     let input1 = document.getElementById("input1");
//     let input2 = document.getElementById("input2");
//     let temp = input1.value;
//     input1.value = input2.value;
//     input2.value = temp;
// }

// function clicks() {
//     let number = document.getElementById("input1").value;
//     let input = document.getElementById("input2");
//     input.value = number ** 2;
// }

// function clicks() {
//     let input1 = document.getElementById('input1');
//     if (!isNaN(input1.value)) {
//         let input2 = document.getElementById('input2');
//         input2.value = input1.value ** 2;
//     } else {
//         alert("Это не число");
//         input1.value = '';
//     }
// }

// function pOver() {
//     let p = document.getElementById("p");
//     p.style.cursor = "text";
// }

// function clicks() {
//     let button = document.getElementById("button");
//     button.style.cursor = "not-allowed";
//     button.disabled = true;
// }


// function addElement(element) {
//     let input = document.getElementById("input");
//     input.value = input.value + element;
// }

// function buttonClick() {
// 	var elem = document.getElementById('elem');
// 	elem.innerHTML = '!!!';
// }

// function buttonClick() {
// 	var elem = document.getElementById('elem');
// 	elem.outerHTML = '<b>' + elem.innerHTML + '</b>';
// }

// function func() {
// 	var elems = document.getElementsByTagName('p');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// function func() {
// 	var elems = document.getElementsByClassName('zzz');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// function func() {
// 	var elems = document.querySelectorAll('p.zzz');
// 	for (var i = 0; i < elems.length; i++) {
// 		elems[i].innerHTML = i+1;
// 	}
// }

// function textTrans() {
// 	let p = document.getElementById("p");
// 	p.innerHTML = "Ку-ку! А я <b>жирный</b>!";
// }

// function textTrans() {
// 	let p = document.getElementById("p");
// 	p.outerHTML = "<h3>Абзац превратился в h3!</h3>";
// }

// function mult() {
// 	let input1 = document.getElementById("firstNumber");
// 	let input2 = document.getElementById("secondNumber");
// 	let result = parseInt(input1.value) + parseInt(input2.value);
// 	let input3 = document.getElementById("result");
// 	input3.innerHTML = result;
// }

// function pTrans() {
// 	p = document.getElementsByTagName("p");
// 	for (i = 0; i < p.length; i++) {
// 		p[i].innerHTML = "Ку-ку!";
// 	}
// }

// function Trans() {
// 	let p = document.getElementsByClassName("www");
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].innerHTML = i + 1;
// 	}
// }

// function Trans() {
// 	let www = document.querySelectorAll("p.www");
// 	for (let i = 0; i < www.length; i++) {
// 		www[i].innerHTML = i + 1;
// 	}
// }

// function classAlert() {
// 	let p = document.getElementById("p");
// 	alert(p.getAttribute("class"));
// }


// function classAlert() {
// 	let p = document.getElementById("p");
// 	alert(p.getAttribute("class"));
// }
// function removeAttr() {
// 	let p = document.getElementById("p");
// 	alert("Класс удален! Нажмите на первую кнопку чтобы проверить это!")
// 	p.removeAttribute("class");
// }

// function classAlert() {
// 	let p = document.getElementById("p");
// 	alert(p.getAttribute("class"));
// }
// function setAttr() {
// 	let p = document.getElementById("p");
// 	alert("Класс изменен! Нажмите на первую кнопку чтобы проверить это!");
// 	p.setAttribute("class", "new-class");
// }

// function copyText() {
// 	input = document.getElementById("text").value;
// 	document.getElementById("new-text").innerHTML = input;
// }

// function hrefTrans() {
// 	let a = document.getElementsByTagName("a");
// 	for (let i = 0; i < a.length; i++) {
// 		a[i].innerHTML = a[i].innerHTML + " (" + a[i].getAttribute("href") + ")";
// 	}
// }

// function pTrans(text) {
// 	text.disabled = true;
// 	text.innerHTML = "О, а на меня больше нельзя нажать!"
// 	let p = document.getElementById("text");
// 	p.innerHTML = "Привет, мир!";
// 	p.style.color = "red";
// }

// function pTrans() {
// 	let p = document.getElementsByTagName("p");
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].innerHTML = i;
// 	}
// }

// function pTrans() {
// 	let p = document.getElementsByTagName("p");
// 	for (let i = 0; i < p.length; i++) {
// 		p[i].innerHTML = i + ". " + p[i].innerHTML;
// 	}
// }