const fs = require('fs')

const logsDir = './logs';
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

//define the time format
function getTime() {
    let now = new Date();
    return now.toUTCString();
}

function doLog(line, level='Debug') {
    if (typeof line !== 'string') line = JSON.stringify(line)
    line = `${getTime()} - ${level} - ${line}\n` 
    fs.appendFileSync('./logs/backend.log',line);
}

module.exports = {
    info(line){
        doLog(line, "Info")
    },
}