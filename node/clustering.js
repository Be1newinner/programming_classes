const cluster = require('cluster');
const os = require('os');
const express = require('express');

process.env.NODE_CLUSTER_SCHED_POLICY = 'rr';

const app = express();

// Define your routes here
app.get('/', (req, res) => {
  console.log("/", process.pid)
  res.send('Hello from worker process');
});

app.listen(3000, () => {
  console.log(`Worker process ${process.pid} is listening on port 3000`);
});

// const numCPUs = os.cpus().length;

// if (cluster.isMaster) {
//   console.log(`Master process ${process.pid} is running`);

//   // Fork workers equal to the number of CPU cores
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   // Listen for dying workers and replace them
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died. Restarting...`);
//     cluster.fork();
//   });
// } else {
//   const app = express();

//   // Define your routes here
//   app.get('/', (req, res) => {
//     console.log("/", process.pid)
//     res.send('Hello from worker process');
//   });

//   app.listen(3000, () => {
//     console.log(`Worker process ${process.pid} is listening on port 3000`);
//   });
// }
