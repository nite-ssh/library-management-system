let lineChart= document.querySelector(".chart__line-chart").getContext("2d");
let barChart= document.querySelector(".chart__bar-chart").getContext("2d"); 
let doughnutChart= document.querySelector(".chart__doughnut-chart").getContext("2d"); 




function chartMaker(chartName,chartType, color){

let massPopChart = new Chart(chartName, {
    type:chartType,
    data:{
        labels:["to kill a mocking bird","go set a watchman","cambrige","new bedford"],
        datasets:[{ label: "name of books", data:[
                50000,18000,15000,10000,10555,45677,12323
            ], backgroundColor: color,
            borderWidth:1,
            borderColor:"#777",
            hoverBorderWidth:3,
            hoverBorderColor:"#000"
        }]
    },
    options:{
        title:{
            display:true,
        }
    },
    legend:{
        position:"left",
        labels:{
            fontColor:"#000"
        }
    }

});

}

barColor = [
    "#112B3C",
    "#B4CFB0",
    "#205375",
    "#406882"
];

doughnutColor=[
    "#112B3C",
    "#A084CA",
    "#205375",
    "#EBC7E8"
]

lineColor=[
    "#112B3C",
    "#3D8361",
    "#205375",
    "#EEF2E6",
]

chartMaker(barChart, "pie", barColor);
chartMaker(doughnutChart, "doughnut", doughnutColor);
chartMaker(lineChart, "line", lineColor);