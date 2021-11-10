//----------------------------------------------TABLE 1---------------------------------------------------------//

//------------Table 1 variables----------//
var table = document.getElementById("table1");

var tbody = table.getElementsByTagName("tbody")[0];

var table_tr = tbody.getElementsByTagName("tr")[1];

var table_td = table_tr.getElementsByTagName("td")[0];




var table_data = [];



// Create First table Canvas //

var canvas = document.createElement ("canvas");

canvas.style.height= "auto";
canvas.style.width= "auto";
canvas.style.margin= "20px 0";
canvas.id = "graph";

// Insert in HTML file //

table.before (canvas);

//------------------------------------------Get Datas---------------------------------------//

//-------Get Country's list-----//

var table_country = [];

for (r = 1; r < tbody.getElementsByTagName ("tr").length; r++) 
{
  table_country.push (tbody.getElementsByTagName ("tr")[r].getElementsByTagName ("td")[0].innerText);
}

//-------Get table datas-----//
var table_years = [];

var years_Row = document.getElementsByTagName("tr")[1];

var years = years_Row.getElementsByTagName("th")[0];

for (r= 2; r <years_Row.getElementsByTagName("th").length; r++)
{
  table_years.push(years_Row.getElementsByTagName("th")[r].innerHTML);
}


console.log(table_years);


//continue here//

//---------------------------------------------------------TABLE 2----------------------------------------------------------//

//------------Table 2 variables----------//


var table2 = document.getElementById ("table2");
var tbody2 = table2.getElementsByTagName ("tbody")[0];
var table2_tr = tbody2.getElementsByTagName ("tr")[0];
var table2_td = table2_tr.getElementsByTagName ("td")[0];



// Create second Canvas //

var canvas2 = document.createElement ("canvas");

canvas2.style.height= "auto";
canvas2.style.width= "auto";
canvas2.style.margin= "20px 0";
canvas2.id = "graph2";

// Insert in HTML file //

table2.before (canvas2);

//----OR----//
// zone2 = document.getElementById("Homicides"); zone2.appendChild(canvas2)




//----------------Get Datas----------------//

//-------Get Country's list-----//
var table2_country = [];

for (i = 0; i < tbody2.getElementsByTagName ("tr").length; i++) 
{
  table2_country.push (tbody2.getElementsByTagName ("tr")[i].getElementsByTagName ("td")[0].innerText);
}

//-----Get 2007-2009 list-------//

var table2_07 = [];

for (i = 0; i < tbody2.getElementsByTagName ("tr").length; i++) 
{
  table2_07.push (parseInt (tbody2.getElementsByTagName ("tr")[i].getElementsByTagName ("td")[1].innerHTML));
}

//-----Get 2009-2010 list-------//

var table2_09 = [];

for (i = 0; i < tbody2.getElementsByTagName ("tr").length; i++) 
{
  table2_09.push (parseInt (tbody2.getElementsByTagName ("tr")[i].getElementsByTagName ("td")[2].innerHTML));
}



// ------------------------ graph2 ------------------------------

const ctx2 = document.getElementById("graph2");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: table2_country,
    datasets: [
      {
        label: "2007-09",
        data: table2_07,
        backgroundColor: ["rgba(255,101,80,0.4)"],
      },
      {
        label: "2010-12",
        data: table2_09,
        backgroundColor: ["rgba(5,255,80,0.51)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});









