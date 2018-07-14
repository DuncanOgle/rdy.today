import GeoService from './GeoService';

describe('GeoService', () => {
    describe('positionToObject', () => {
        it('should return an object', () => {
            expect(typeof GeoService.positionToObject({
                coords: {
                    latitue: 'x',
                    longitude: 'y'
                }
            })).toEqual('object');
        });
    });
});
