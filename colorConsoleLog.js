// A way to log things in npm console a little more colourfully without messing with the codes.
const typesToLogNormally = ['object','function','symbol']
const colors = {
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m"
};
const createColorLogFn = (cname, code) => {
    return (...args) => {
        if (args.length === 0) args = 'Nothing to Log';
        //TODO: add am array of types to log normally ie object function array. 
        //with a little marker in green as to why
        for (let argument of args) {
            if ( typesToLogNormally.includes(typeof argument) ) {
                console.log(code+'%s\x1b[0m', 'colorLog-'+cname+', type: ',typeof argument);
                console.log( JSON.stringify(argument, null, 2) );
                return;
            }
            console.log(code+'%s\x1b[0m', JSON.stringify(argument, null, 2));
        }
    }
    
}
let colorLog = {};
Object.entries(colors).forEach( ([cname, code]) => {
    colorLog[cname] = createColorLogFn(cname, code);
});

module.exports = colorLog;
