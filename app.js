const express = require("express");

const app = express();

let visitors = 0;
const version = "v1.0.0";

app.get("/", (req, res) => {

    visitors++;

    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>DevOps Pipeline Dashboard</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Inter,Segoe UI,sans-serif;
}

body{

    min-height:100vh;

    background:linear-gradient(
        -45deg,
        #0f172a,
        #1e1b4b,
        #312e81,
        #4c1d95
    );

    background-size:400% 400%;

    animation:gradientMove 15s ease infinite;

    overflow-x:hidden;

    display:flex;
    justify-content:center;
    align-items:center;

    color:white;
}

@keyframes gradientMove{
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
}

.blob{
    position:absolute;
    border-radius:50%;
    filter:blur(120px);
    opacity:.6;
}

.blob1{
    width:300px;
    height:300px;
    background:#3b82f6;
    top:-50px;
    left:-50px;
}

.blob2{
    width:300px;
    height:300px;
    background:#9333ea;
    bottom:-50px;
    right:-50px;
}

.container{
    width:90%;
    max-width:1200px;
    z-index:10;
}

.glass{

    background:rgba(255,255,255,0.08);

    backdrop-filter:blur(25px);

    border:1px solid rgba(255,255,255,0.15);

    border-radius:30px;

    padding:40px;

    box-shadow:
    0 8px 32px rgba(0,0,0,.3);
}

.hero{

    text-align:center;
    margin-bottom:40px;
}

.hero h1{

    font-size:60px;
    margin-bottom:15px;
}

.hero p{

    color:#cbd5e1;
    font-size:20px;
}

.badge{

    display:inline-block;

    padding:10px 18px;

    border-radius:30px;

    background:rgba(255,255,255,.1);

    margin-bottom:20px;

    color:#93c5fd;
}

.grid{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(220px,1fr));

    gap:20px;
}

.card{

    background:rgba(255,255,255,.06);

    border:1px solid rgba(255,255,255,.1);

    border-radius:20px;

    padding:25px;

    transition:.3s;
}

.card:hover{

    transform:translateY(-8px);

    background:rgba(255,255,255,.1);
}

.label{

    color:#94a3b8;
    margin-bottom:10px;
}

.value{

    font-size:28px;
    font-weight:700;
}

.online{
    color:#22c55e;
}

.clock{

    text-align:center;

    margin-top:40px;

    font-size:36px;

    font-weight:bold;
}

.pipeline{

    display:flex;

    justify-content:center;

    gap:20px;

    flex-wrap:wrap;

    margin-top:35px;
}

.step{

    padding:12px 18px;

    background:rgba(255,255,255,.08);

    border-radius:15px;

    border:1px solid rgba(255,255,255,.1);
}

.footer{

    margin-top:35px;

    text-align:center;

    color:#94a3b8;
}

.btn{

    display:inline-block;

    margin-top:30px;

    padding:14px 30px;

    background:#6366f1;

    color:white;

    text-decoration:none;

    border-radius:12px;

    transition:.3s;
}

.btn:hover{
    background:#4f46e5;
}

@media(max-width:768px){

.hero h1{
    font-size:40px;
}

.clock{
    font-size:26px;
}

}

</style>

</head>

<body>

<div class="blob blob1"></div>
<div class="blob blob2"></div>

<div class="container">

<div class="glass">

<div class="hero">

<div class="badge">
🚀 DevOps CI/CD Pipeline
</div>

<h1>Deploy With Confidence</h1>

<p>
GitHub • GitHub Actions • Self Hosted Runner • Docker
</p>

</div>

<div class="grid">

<div class="card">
<div class="label">Server Status</div>
<div class="value online">● ONLINE</div>
</div>

<div class="card">
<div class="label">Build Version</div>
<div class="value">${version}</div>
</div>

<div class="card">
<div class="label">Environment</div>
<div class="value">DEVELOPMENT</div>
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
<div class="label">Deployment Date</div>
<div class="value">${new Date().toLocaleDateString()}</div>
</div>

</div>

<div class="clock" id="clock"></div>

<div class="pipeline">

<div class="step">GitHub</div>
<div class="step">GitHub Actions</div>
<div class="step">Runner</div>
<div class="step">Docker</div>
<div class="step">Live App</div>

</div>

<div style="text-align:center;">
<a href="/" class="btn">
Refresh Dashboard
</a>
</div>

<div class="footer">
Built with Node.js, Docker & GitHub Actions
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

app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});