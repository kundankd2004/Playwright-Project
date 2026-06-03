const fs = require('fs');
const path = require('path');

class Logger {

    static LOG_FILE = path.join(
        process.cwd(), 'logs', 'test-execution.log'
    );

    static _getTimestamp() {

        return new Date().toISOString();

    }

    static _formatMessage(level, message) {

        return `[${this._getTimestamp()}] [${level}] ${message}`;

    }

    static _writeToFile(formattedMessage) {

        try {

            const logDir = path.dirname(this.LOG_FILE);

            if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir, { recursive: true });
            }

            fs.appendFileSync(
                this.LOG_FILE,
                formattedMessage + '\n'
            );

        } catch (err) {
            // Silently fail if file writing fails
        }

    }

    static info(message) {

        const formatted = this._formatMessage('INFO', message);

        console.log(formatted);

        this._writeToFile(formatted);

    }

    static error(message) {

        const formatted = this._formatMessage('ERROR', message);

        console.error(formatted);

        this._writeToFile(formatted);

    }

    static warn(message) {

        const formatted = this._formatMessage('WARN', message);

        console.warn(formatted);

        this._writeToFile(formatted);

    }

    static debug(message) {

        const formatted = this._formatMessage('DEBUG', message);

        if (process.env.DEBUG === 'true') {
            console.log(formatted);
        }

        this._writeToFile(formatted);

    }

    static step(stepNumber, message) {

        const formatted = this._formatMessage(
            'STEP', `[${stepNumber}] ${message}`
        );

        console.log(formatted);

        this._writeToFile(formatted);

    }

}

module.exports = Logger;