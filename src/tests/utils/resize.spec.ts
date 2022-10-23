import path from 'path';
import resize from '../../utils/resize';

describe('Resize Suite', () => {
  describe('Resolves', () => {
    it('Should return processed image path', async () => {
      const imagePath = await resize('gaster', 300, 300);
      expect(imagePath).toEqual(`${path.resolve('./')}/output/new-gaster.jpg`);
    });
  });
});
