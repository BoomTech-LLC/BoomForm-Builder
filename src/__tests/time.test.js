import { getTimeFields } from '../Helpers/time'

describe('getTimeFields(format, placeholders)', () => {
    const defaultFields = [
        { key: 'hour', placeholder: 'HH' },
        { key: 'minute', placeholder: 'MM' },
        { key: 'format' }
    ];

    it('should return default value when passed nullish params', () => {
        expect(getTimeFields(undefined, undefined)).toEqual(defaultFields)
        expect(getTimeFields(null, null)).toEqual(defaultFields)
    })
    it('should return default values when some params are undefined', () => {
        expect(getTimeFields(undefined, {
            hour: '',
            minute: '',
        })).toEqual(defaultFields)
        expect(getTimeFields(undefined, {
            hour: null,
            minute: null,
        })).toEqual(defaultFields)
    })
})