import { debounce } from "../Helpers/debounce";

jest.useFakeTimers();

describe('debounce', ()=>{
    beforeEach(()=>{
        jest.clearAllTimers();
    });
    
    it('should call the callback function after the delay', () => {
        const callback = jest.fn();
        const delay = 1000;
        debounce('testId', callback , delay);
        jest.advanceTimersByTime(500);
        expect(callback).not.toHaveBeenCalled();
        jest.advanceTimersByTime(500);
        expect(callback).toHaveBeenCalled();
    });
    it('should clear the previous timeout if called again before the delay', () => {
        const callback1 = jest.fn();
        const callback2 = jest.fn();
        const delay = 1000;
        debounce('testId', callback1, delay);
        debounce('testId', callback2, delay);
        jest.advanceTimersByTime(500);
        expect(callback1).not.toHaveBeenCalled();
        expect(callback2).not.toHaveBeenCalled();
        jest.advanceTimersByTime(500);
        expect(callback1).not.toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
    });
    if('should allow multiple debounce calls with different IDs', () => {
        const callbakc1 = jest.fn();
        const callback2 = jest.fn();
        const delay = 1000;
        debounce('testId1', callbakc1 , delay);
        debounce('testId2', callback2 , delay);
        jest.advanceTimersByTime(delay);
        expect(callback2).toHaveBeenCalled();
        expect(callback2).toHaveBeenCalled();
    });
})