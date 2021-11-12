//----------------------------------------------TABLE 1---------------------------------------------------------//

//------------Table 1 variables----------//
var table = document.getElementById("table1");

var tbody = table.getElementsByTagName("tbody")[0];

var table_tr = tbody.getElementsByTagName("tr")[1];

var table_td = table_tr.getElementsByTagName("td")[0];



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


//-------Get Years List -----//
var table_years = [];

var years = document.getElementsByTagName("tr")[1];

for (r= 2; r <years.getElementsByTagName("th").length; r++)
{
  table_years.push(years.getElementsByTagName("th")[r].innerHTML);
}


// ------ Get Table values-----------//

var table_datas = [];

for (r = 1; r < tbody.getElementsByTagName("tr").length; r++) 
{
  table_datas[r] = new Array();

  for (i = 1; i < table_tr.getElementsByTagName("td").length; i++) {
    table_datas[r].push(
      parseInt(
        tbody.getElementsByTagName("tr")[r].getElementsByTagName("td")[i]
          .innerHTML
      )
    );
  }
}

// ------------------------- Graph 1 ------------------------------------

const ctx = document.getElementById("graph");

const myChart = new Chart(ctx, {
  type: "bar",

  data: {
    labels: table_years,
    datasets: [
      {
        label: table_country[0],
        data: table_datas[1],
        backgroundColor: ["rgba(229, 37, 37, 0.7)"],
      },
      {
        label: table_country[1],
        data: table_datas[2],
        backgroundColor: ["rgba(187, 143, 206, 0.7)"],
        hidden: true,
      },
      {
        label: table_country[2],
        data: table_datas[3],
        backgroundColor: ["rgba(133, 193, 233, 0.7)"], 
      },
      {
        label: table_country[3],
        data: table_datas[4],
        backgroundColor: ["rgba(130, 224, 170, 0.7)"],
        hidden : true,
      },
      {
        label: table_country[4],
        data: table_datas[5],
        backgroundColor: ["rgba(247, 220, 111, 0.7)"],
        hidden:true,   
       
      },
      {
        label: table_country[5],
        data: table_datas[6],
        backgroundColor: ["rgba(229, 152, 102, 0.7)"],
      },
      {
        label: table_country[6],
        data: table_datas[7],
        backgroundColor: ["rgba(229, 152, 102, 0.7)"],
      },
      {
        label: table_country[7],
        data: table_datas[8],
        backgroundColor: ["rgba(44, 62, 80, 0.7)"],
        hidden: true,
      },
      {
        label: table_country[8],
        data: table_datas[9],
        backgroundColor: ["rgba(169, 50, 38, 0.7)"],
        hidden: true,
      },
      {
        label: table_country[9],
        data: table_datas[10],
        backgroundColor: ["rgba(142, 68, 173, 0.7)"],
      },
      {
        label: table_country[10],
        data: table_datas[11],
        backgroundColor: ["rgba(82, 190, 128, 0.7)"],
        hidden: true,
      },
      {
        label: table_country[11],
        data: table_datas[12],
        backgroundColor: ["rgba(247, 220, 111, 1)"],
        hidden: true,
      },
      {
        label: table_country[12],
        data: table_datas[13],
        backgroundColor: ["rgba(235, 152, 78, 1)"],
        hidden:true,
      },
      {
        label: table_country[13],
        data: table_datas[14],
        backgroundColor: ["rgba(220, 118, 51, 1)"],
        hidden: true,
      },
      {
        label: table_country[14],
        data: table_datas[15],
        backgroundColor: ["rgba(170, 183, 184, 1)"],
      },
      {
        label: table_country[15],
        data: table_datas[16],
        backgroundColor: ["rgba(44, 62, 80, 1)"],
        hidden: true,
      },
      {
        label: table_country[16],
        data: table_datas[17],
        backgroundColor: ["rgba(123, 36, 28, 1)"],
        hidden: true,
      },
      {
        label: table_country[17],
        data: table_datas[18],
        backgroundColor: ["rgba(91, 44, 111, 1)"],
        hidden: true,
      },
      {
        label: table_country[18],
        data: table_datas[19],
        backgroundColor: ["rgba(40, 116, 166, 1)"],
      },
      {
        label: table_country[19],
        data: table_datas[20],
        backgroundColor: ["rgba(255, 99, 132, 1)"],
        hidden: true,
      },
      {
        label: table_country[20],
        data: table_datas[21],
        backgroundColor: ["rgba(17, 120, 100, 1)"],
      },
      {
        label: table_country[21],
        data: table_datas[22],
        backgroundColor: ["rgba(126, 81, 9, 0.5)"],
      },
      {
        label: table_country[22],
        data: table_datas[23],
        backgroundColor: ["rgba(120, 66, 18, 0.5)"],
      },
      {
        label: table_country[23],
        data: table_datas[24],
        backgroundColor: ["rgba(151, 154, 154, 0.5)"],
        hidden : true,
      },
      {
        label: table_country[24],
        data: table_datas[25],
        backgroundColor: ["rgba(81, 90, 90, 0.5)"],
        hidden: true,
      },
      {
        label: table_country[25],
        data: table_datas[26],
        backgroundColor: ["rgba(28, 40, 51, 0.5)"],
        hidden: true,
      },
      {
        label: table_country[26],
        data: table_datas[27],
        backgroundColor: ["rgba(22, 160, 133, 0.5)"],
        hidden: true,
      },
      {
        label: table_country[27],
        data: table_datas[28],
        backgroundColor: ["rgba(165, 105, 189, 0.5)"],
        hidden :true,
      },
      {
        label: table_country[28],
        data: table_datas[29],
        backgroundColor: ["rgba(169, 50, 38, 0.5)"],
   
      },
      {
        label: table_country[29],
        data: table_datas[30],
        backgroundColor: ["rgba(243, 156, 18, 0.5)"],
        hidden: true,
      },
      {
        label: table_country[30],
        data: table_datas[31],
        backgroundColor: ["rgba(44, 62, 80, 0.5)"],
        hidden: true,
  
      },
      {
        label: table_country[31],
        data: table_country[32],
        borderColor: ["rgba(40, 116, 166, 0.2)"],
        hidden : true,
      },
      {
        label: table_country[32],
        data: table_datas[33],
        borderColor: ["rgba(236, 112, 99, 0.2)"],
        hidden: true,
       
      },
      {
        label: table_country[33],
        data: table_datas[34],
        borderColor: ["rgba(220, 118, 51, 0.2)"],
        hidden: true,
     
      },
      {
        label: table_country[34],
        data: table_datas[35],
        borderColor: ["rgba(191, 201, 202, 0.2)"],
        hidden: true,
       
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
  type: "line",
  data: {
    labels: table2_country,
    datasets: [
      {
        label: "2007-09",
        data: table2_07,
        borderColor: ["rgba(255,101,80,0.4)"],
        backgroundColor : ["rgba(255,101,80,0.4)"],
        borderWidth: 2,
      },
      {
        label: "2010-12",
        data: table2_09,
        borderColor: ["rgba(5,255,80,0.51)"],
        backgroundColor: ["rgba(5,255,80,0.51)"],
        borderWidth: 2,
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









