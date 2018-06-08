const spawn = require('child_process').spawn;

const children = [];

process.on('exit', () => {
  // console.log('killing', children.length, 'child processes');
  children.forEach(child => child.kill());
});

const cleanExit = () => process.exit();
process.on('SIGINT', cleanExit); // catch ctrl-c
process.on('SIGTERM', cleanExit); // catch kill

module.exports = (...args) => {
  const command = spawn(...args, { stdio: 'inherit' });
  command.on('error', function(err) {
    console.error(err);
    process.exit(1);
  });
  children.push(command);
};
