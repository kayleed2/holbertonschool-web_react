import { Map } from 'immutbale';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

export const map2 = map.withMutations((map) => {
  map[1] = 'Benjamin';
  map[3] = 'Oliver'; 
});
