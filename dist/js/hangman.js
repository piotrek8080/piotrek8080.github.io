"use strict";$(".gameStart .btn").fadeToggle("slow","linear"),$("#showGame").addClass("load");var input=document.getElementById("enter");$("form").submit(function(e){e.preventDefault(),document.getElementById("enter").click()}),document.getElementById("inputText").focus();for(var word=["Warszawa","Kraków","Poznań","Rzeszów","Szczecin","Gdańsk","Wrocław","Lublin"],draw=word[Math.floor(Math.random()*word.length)],drawLength=draw.length,emptyPasswordLine=[],underscore="_",i=0;i<draw.length;i++)emptyPasswordLine.push(underscore);document.getElementById("password").innerHTML=emptyPasswordLine.join("");var x=10;function othername(){var e=document.getElementById("inputText").value;e=e.toLowerCase();var t=draw.includes(e);console.log(t);var n=!1;if(1!=e.length)alert("Wpisz jedną literę"),document.getElementById("moves").innerHTML="Ruchy: "+x;else{for(var o=0;o<draw.length;o++)draw[o].toLowerCase()===e&&(console.log(e),emptyPasswordLine[o]=draw[o],n=!0,document.getElementById("password").innerHTML=emptyPasswordLine.join(""));1!=n&&(x-=1,alert("Zła litera"),document.getElementById("moves").innerHTML="Ruchy: "+x)}document.getElementById("myForm").reset(),document.getElementById("inputText").focus(),0==x&&(alert("Game over!"),window.location.reload(!0))}document.getElementById("moves").innerHTML="Ruchy: "+x;