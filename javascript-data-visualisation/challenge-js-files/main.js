//------------------TABLE 2---------------------//

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




//------------------------------------------Get the datas---------------------------------------//

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
        backgroundColor: ["rgba(52, 152, 219, 0.9)"],
        borderColor: ["rgba(52, 152, 219, 0.9)"],
        borderWidth: 1,
      },
      {
        label: "2010-12",
        data: table2_09,
        backgroundColor: ["rgba(46, 204, 113, 0.9)"],
        borderColor: ["rgba(46, 204, 113, 09)"],
      
        borderWidth: 1,
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









