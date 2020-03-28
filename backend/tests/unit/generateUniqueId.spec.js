const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('should generate unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
        //expect(2 + 2).toBe(4);
    });
});