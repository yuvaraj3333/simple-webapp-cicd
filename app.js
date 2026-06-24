const express = require("express");

const app = express();

let visitors = 0;
const VERSION = "v1.0.0";
const START_TIME = Date.now();

app.get("/", (req, res) => {

    visitors++;

    res.send(`
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>DevOps Monitoring Dashboard</title>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Inter,Segoe UI,sans-serif;
}

body{
background:#0b1220;
color:white;
padding:20px;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:25px;
}

.logo{
font-size:28px;
font-weight:bold;
color:#f97316;
}

.clock{
font-size:18px;
color:#9ca3af;
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-bottom:25px;
}

.card{
background:#111827;
border:1px solid #1f2937;
border-radius:12px;
padding:20px;
transition:.3s;
}

.card:hover{
transform:translateY(-4px);
border-color:#374151;
}

.label{
font-size:13px;
color:#9ca3af;
margin-bottom:10px;
}

.value{
font-size:28px;
font-weight:bold;
}

.online{
color:#22c55e;
}

.warning{
color:#f59e0b;
}

.chart-row{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:25px;
}

.chart-card{
background:#111827;
border:1px solid #1f2937;
border-radius:12px;
padding:20px;
height:350px;
}

.pipeline{
background:#111827;
border:1px solid #1f2937;
border-radius:12px;
padding:25px;
}

.pipeline-title{
font-size:18px;
margin-bottom:20px;
}

.steps{
display:flex;
justify-content:center;
align-items:center;
gap:20px;
flex-wrap:wrap;
}

.step{
background:#1f2937;
padding:12px 20px;
border-radius:10px;
border:1px solid #374151;
}

.arrow{
font-size:22px;
color:#22c55e;
}

.footer{
margin-top:25px;
text-align:center;
color:#9ca3af;
}

@media(max-width:900px){

.chart-row{
grid-template-columns:1fr;
}

}

</style>
</head>

<body>

<div class="header">

<div class="logo">
📊 DevOps Monitoring Dashboard
</div>

<div class="clock" id="clock">
Loading...
</div>

</div>

<div class="grid">

<div class="card">
<div class="label">Server Status</div>
<div class="value online">● ONLINE</div>
</div>

<div class="card">
<div class="label">Build Version</div>
<div class="value">${VERSION}</div>
</div>

<div class="card">
<div class="label">Visitors</div>
<div class="value">${visitors}</div>
</div>

<div class="card">
<div class="label">Environment</div>
<div class="value warning">DEV</div>
</div>

<div class="card">
<div class="label">Docker Container</div>
<div class="value online">RUNNING</div>
</div>

<div class="card">
<div class="label">Deployment Date</div>
<div class="value">${new Date().toLocaleDateString()}</div>
</div>

</div>

<div class="grid">

<div class="card">
<div class="label">CPU Usage</div>
<div class="value" id="cpuValue">38%</div>
</div>

<div class="card">
<div class="label">Memory Usage</div>
<div class="value" id="memoryValue">2.1 GB</div>
</div>

<div class="card">
<div class="label">Application Uptime</div>
<div class="value" id="uptime">0s</div>
</div>

<div class="card">
<div class="label">Requests Served</div>
<div class="value">${visitors}</div>
</div>

</div>

<div class="chart-row">

<div class="chart-card">
<canvas id="cpuChart"></canvas>
</div>

<div class="chart-card">
<canvas id="memoryChart"></canvas>
</div>

</div>

<div class="pipeline">

<div class="pipeline-title">
🚀 CI/CD Pipeline Flow
</div>

<div class="steps">

<div class="step">GitHub</div>

<div class="arrow">➜</div>

<div class="step">GitHub Actions</div>

<div class="arrow">➜</div>

<div class="step">Self Hosted Runner</div>

<div class="arrow">➜</div>

<div class="step">Docker</div>

<div class="arrow">➜</div>

<div class="step">Live Application</div>

</div>

</div>

<div class="footer">
Grafana Inspired Dashboard | Node.js | Docker | GitHub Actions
</div>

<script>

function updateClock(){

document.getElementById("clock").innerHTML =
new Date().toLocaleString();

}

setInterval(updateClock,1000);
updateClock();

const startTime = ${START_TIME};

function updateUptime(){

const seconds =
Math.floor((Date.now() - startTime)/1000);

document.getElementById("uptime").innerHTML =
seconds + "s";

}

setInterval(updateUptime,1000);

const cpuCtx =
document.getElementById('cpuChart');

const cpuData =
[20,35,28,40,38,45,42];

const cpuChart =
new Chart(cpuCtx,{
type:'line',
data:{
labels:['1','2','3','4','5','6','7'],
datasets:[{
label:'CPU Usage (%)',
data:cpuData,
borderColor:'#22c55e',
backgroundColor:'rgba(34,197,94,0.2)',
fill:true,
tension:0.4
}]
},
options:{
responsive:true,
maintainAspectRatio:false
}
});

const memoryCtx =
document.getElementById('memoryChart');

const memoryData =
[1.8,2.0,2.2,2.4,2.1,2.3,2.5];

const memoryChart =
new Chart(memoryCtx,{
type:'line',
data:{
labels:['1','2','3','4','5','6','7'],
datasets:[{
label:'Memory Usage (GB)',
data:memoryData,
borderColor:'#f97316',
backgroundColor:'rgba(249,115,22,0.2)',
fill:true,
tension:0.4
}]
},
options:{
responsive:true,
maintainAspectRatio:false
}
});

setInterval(()=>{

let cpu =
Math.floor(Math.random()*40)+20;

document.getElementById("cpuValue")
.innerHTML = cpu + "%";

cpuData.push(cpu);
cpuData.shift();

cpuChart.update();

let mem =
(1.5 + Math.random()*2).toFixed(1);

document.getElementById("memoryValue")
.innerHTML = mem + " GB";

memoryData.push(mem);
memoryData.shift();

memoryChart.update();

},3000);

</script>

</body>
</html>
`);
});

app.listen(3000, () => {
    console.log("🚀 Dashboard running on port 3000");
});