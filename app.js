const express = require("express");

const app = express();

let visitors = 0;
const version = "1.0.0";

app.get("/", (req, res) => {

    visitors++;

    res.send(`
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>DevOps Dashboard</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Segoe UI',sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:
    linear-gradient(
        135deg,
        #0f172a,
        #1e293b,
        #312e81
    );
    overflow:hidden;
}

body::before{
    content:'';
    position:absolute;
    width:400px;
    height:400px;
    background:#3b82f6;
    border-radius:50%;
    filter:blur(150px);
    top:-100px;
    left:-100px;
}

body::after{
    content:'';
    position:absolute;
    width:350px;
    height:350px;
    background:#9333ea;
    border-radius:50%;
    filter:blur(150px);
    bottom:-100px;
    right:-100px;
}

.container{
    width:90%;
    max-width:900px;
    z-index:10;
}

.dashboard{

    backdrop-filter:blur(20px);
    background:rgba(255,255,255,0.08);

    border:1px solid rgba(255,255,255,0.2);

    border-radius:25px;

    padding:40px;

    box-shadow:
    0 8px 32px rgba(0,0,0,0.4);
}

h1{
    color:white;
    text-align:center;
    margin-bottom:30px;
    font-size:42px;
}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
}

.card{

    background:rgba(255,255,255,0.08);

    border-radius:18px;

    padding:25px;

    transition:0.3s;
}

.card:hover{
    transform:translateY(-8px);
}

.label{
    color:#cbd5e1;
    font-size:14px;
}

.value{
    color:white;
    font-size:28px;
    font-weight:bold;
    margin-top:10px;
}

.online{
    color:#22c55e;
}

.clock{
    text-align:center;
    color:white;
    font-size:28px;
    margin-top:30px;
}

button{

    margin-top:30px;

    width:100%;

    padding:15px;

    border:none;

    border-radius:12px;

    background:#3b82f6;

    color:white;

    font-size:18px;

    cursor:pointer;
}

button:hover{
    opacity:.9;
}

.footer{
    text-align:center;
    color:#94a3b8;
    margin-top:25px;
}

</style>

</head>

<body>

<div class="container">

<div class="dashboard">

<h1>🚀 DevOps Dashboard</h1>

<div class="grid">

<div class="card">
<div class="label">Server Status</div>
<div class="value online">ONLINE</div>
</div>

<div class="card">
<div class="label">Build Version</div>
<div class="value">${version}</div>
</div>

<div class="card">
<div class="label">Environment</div>
<div class="value">DEV</div>
</div>

<div class="card">
<div class="label">Visitors</div>
<div class="value">${visitors}</div>
</div>

<div class="card">
<div class="label">Container</div>
<div class="value online">RUNNING</div>
</div>

<div class="card">
<div class="label">Deployment</div>
<div class="value">${new Date().toLocaleDateString()}</div>
</div>

</div>

<div class="clock" id="clock"></div>

<button onclick="location.reload()">
🔄 Refresh Dashboard
</button>

<div class="footer">
GitHub • Docker • GitHub Actions • Self Hosted Runner
</div>

</div>

</div>

<script>

function updateClock(){

document.getElementById("clock")
.innerHTML =
new Date().toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

</script>

</body>
</html>
`);
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});