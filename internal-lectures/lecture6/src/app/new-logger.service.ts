import { LoggingService } from './logger.service';

export class NewLoggingService implements LoggingService {
    info(message: string) {
        console.log(message);
    }

    error(message: string) {
        console.log(message);
    }

    warning(message: string) {
        console.log(message);
    }
}
