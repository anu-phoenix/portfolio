let css1 = 'position: absolute; \
width: 200px; \
height: 30px; \
top: -10px; \
left: 72px; \
background-color: #bfa2db; \
text-align: center; \
padding-top: 10px; \
font-size: large; \
'

let css2 = ' \
    position: absolute; \
    width: 80%; \
    height: 70%; \
    top: -10%; \
    left: 10%; \
    font-size: 50px; \
    padding: 10%; \
    box-sizing: border-box; \
'

// This functions are for About section

document.getElementById("detail").addEventListener("mouseover", function() {
    document.getElementById("dhead1").style = css1;
});

document.getElementById("detail").addEventListener("mouseout", function() {
    document.getElementById("dhead1").style = css2;
});


document.getElementById("hobby").addEventListener("mouseover", function() {
    document.getElementById("dhead2").style = css1;
});

document.getElementById("hobby").addEventListener("mouseout", function() {
    document.getElementById("dhead2").style = css2;
});


document.getElementById("skill").addEventListener("mouseover", function() {
    document.getElementById("dhead3").style = css1;
});

document.getElementById("skill").addEventListener("mouseout", function() {
    document.getElementById("dhead3").style = css2;
});


// This functions are for Qualification Section
let css3= `
    position: absolute; \
    width: 80%; \
    height: 70%; \
    top: -10%; \ 
    left: 10%; \
    font-size: 50px; \
    box-sizing: border-box; \
    background-color: #bfa2db; \
    text-align: center; \
`
document.getElementById("class10").addEventListener("mouseover", function() {
    document.getElementById("qhead1").style = css1;
});

document.getElementById("class10").addEventListener("mouseout", function() {
    document.getElementById("qhead1").style = css3;
});

document.getElementById("class12").addEventListener("mouseover", function() {
    document.getElementById("qhead2").style = css1;
});

document.getElementById("class12").addEventListener("mouseout", function() {
    document.getElementById("qhead2").style = css3;
});

document.getElementById("college").addEventListener("mouseover", function() {
    document.getElementById("qhead3").style = css1;
});

document.getElementById("college").addEventListener("mouseout", function() {
    document.getElementById("qhead3").style = css3;
});