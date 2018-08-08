import { HryvniaPipe } from './hryvnia.pipe';

describe('Hryvnia pipe', () => {
    it('should return currency with hryvnia sign', () => {
        const pipe = new HryvniaPipe();
        expect(pipe.transform('2.39')).toBe('2.39 ₴');
    });

    it('should add 0 at the end if input value looks like 2.3', () => {
        const pipe = new HryvniaPipe();
        expect(pipe.transform('2.3')).toBe('2.30 ₴');
    });

    it('should add 0 at the end if input value looks like 2', () => {
        const pipe = new HryvniaPipe();
        expect(pipe.transform('2')).toBe('2.00 ₴');
    });

    it('should add 0 before if input value looks like .32', () => {
        const pipe = new HryvniaPipe();
        expect(pipe.transform('.33')).toBe('0.33 ₴');
    });

    it('should return \'out of stock\' if input value is null', () => {
        const pipe = new HryvniaPipe();
        expect(pipe.transform(null)).toBe('out of stock');
    });

});
