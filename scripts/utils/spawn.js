const spawn = require('child_process').spawn;

const children = [];

const killChildren = () => {
  // console.log('killing', children.length, 'child processes');
  return children.forEach(child => child.kill());
};

process.on('exit', () => {
  killChildren();
});

const cleanExit = () => process.exit();
process.on('SIGINT', cleanExit); // catch ctrl-c
process.on('SIGTERM', cleanExit); // catch kill

module.exports = (cmd, args, opts) => {
  const command = spawn(cmd, args, opts);
  command.on('error', function(err) {
    console.error(err);
    process.exit(1);
  });

  children.push(command);
};

module.exports.exit = killChildren;
