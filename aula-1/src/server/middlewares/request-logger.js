
import chalk from 'chalk';

function parseTime(nanosec) {
    // nono to ms
    const t = Number((nanosec / BigInt(1000000)));
    if (t < 1000) return `${t}ms`;
    // ms to seconds
    t /= 1000;
    if (t < 60) return `${t}s`;
    // seconds to minutes
    t /= 60;
    if (t < 60) return `${t}m`;
}

function colorFromStatus(status) {
    if (status >= 500)
        return chalk.red;
    if (status >=400)
        return chalk.rgb(255, 140, 0);
    
    return chalk.green;

}

export default function RequestLoggerMiddleware(req, res, next) {
    const start = process.hrtime.bigint();
    const something = next();
    const elapsed = parseTime(process.hrtime.bigint() - start);
    let color = colorFromStatus(res.statusCode);
    console.log(color(`(${elapsed}) [${req.method}] ${new Date().toISOString()} ${req.path} => ${res.statusCode}`));
    return something;
}
