export class LoggingService {
    info(message: string) {
        console.log('INFO: ', message);
    }

    error(message: string) {
        console.log('ERROR: ', message);
    }

    warning(message: string) {
        console.log('WARNING: ', message);
    }
}
