import { Utils } from '../shared/utils';

export interface Product {
    id: string;
    name: string;
    category: string;
    isAvailable: boolean;
    country: string;
}

export function getDefaultModel() {
    return {
        id: Utils.getRandomGuid(),
        name: null,
        category: 'default',
        isAvailable: true,
        country: null
    } as Product;
}
