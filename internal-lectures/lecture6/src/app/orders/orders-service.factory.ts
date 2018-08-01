import { OrdersService } from './orders.service';
import { LoggingService } from '../logger.service';

export function ordersServiceFactory(logger: LoggingService) {
    return new OrdersService(logger, null);
}
