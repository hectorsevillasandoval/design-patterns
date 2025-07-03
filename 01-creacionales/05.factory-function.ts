import dayjs from 'dayjs';
import { COLORS } from "../helpers/colors.ts";

function formatDate(date: Date): string {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

function createLogger(level: LogLevel) {
  return function (message: string) {
    const timestamp = formatDate(new Date());

    switch (level) {
      case 'debug':
        console.debug(`%c[DEBUG] [${timestamp}] ${message}`, COLORS.orange);
        break;
      case 'info':
        console.info(`%c[INFO] [${timestamp}] ${message}`, COLORS.blue);
        break;
      case 'warn':
        console.warn(`%c[WARN] [${timestamp}] ${message}`, COLORS.yellow);
        break;
      case 'error':
        console.error(`%c[ERROR] [${timestamp}] ${message}`, COLORS.red);
        break;
      default:
        console.log(`%c[LOG] [${timestamp}] ${message}`, COLORS.lightGray);
    }
  }
}

function mainLog() {
  const debugLog = createLogger('debug');
  const infoLog = createLogger('info');
  const warnLog = createLogger('warn');
  const errorLog = createLogger('error');

  debugLog('This is a debug message');
  infoLog('This is an info message');
  warnLog('This is a warning message');
  errorLog('This is an error message');

  console.log('%cThank you for using our logger!', 'color: purple; font-weight: bold;');
  console.log('%cHave a great day!', 'color: green; font-weight: bold;');
  console.log('%cGoodbye!', 'color: gray; font-weight: bold;');
}

mainLog();