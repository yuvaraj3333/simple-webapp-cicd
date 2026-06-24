const express = require("express");

const app = express();

let visitors = 0;

app.get("/", (req, res) => {

    visitors++;

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>DevOps CI/CD Dashboard</title>

        <style>
            body{
                font-family: Arial, sans-serif;
                background:#0f172a;
                color:white;
                text-align:center;
                padding-top:50px;
            }

            .card{
                width:500px;
                margin:auto;
                padding:20px;
                border-radius:10px;
                background:#1e293b;
                box-shadow:0 0 10px rgba(255,255,255,0.2);
            }

            button{
                padding:10px 20px;
                border:none;
                border-radius:5px;
                cursor:pointer;
                font-size:16px;
                margin-top:15px;
            }

            .online{
                color:lime;
                font-weight:bold;
            }
        </style>

    </head>

    <body>

        <div class="card">

            <h1>🚀 DevOps CI/CD Demo</h1>

            <p>Server Status:
                <span class="online">ONLINE</span>
            </p>

            <p>Build Version: 1.0.0</p>

            <p>Environment: Development</p>

            <p>Visitors: ${visitors}</p>

            <p>
                Deployment Time:
                ${new Date().toLocaleString()}
            </p>

            <h2 id="clock"></h2>

            <button onclick="location.reload()">
                Refresh Dashboard
            </button>

        </div>

        <script>

            function updateClock(){

                document.getElementById("clock")
                .innerHTML = new Date().toLocaleTimeString();

            }

            setInterval(updateClock,1000);

            updateClock();

        </script>

    </body>
    </html>
    `);

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});