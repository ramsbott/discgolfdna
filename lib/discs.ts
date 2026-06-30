export type Disc = {
  id: string;
  manufacturer: string;
  mold: string;
  plastic: string;
  weight: string;
  color: string;
  condition: string;
  flight: string;
  dome: string;
  price: string;
  type: string;
};

export const featuredDiscs: Disc[] = [
  { id: 'DNA000001', manufacturer: 'Innova', mold: 'Destroyer', plastic: 'Star', weight: '173g', color: 'Pink', condition: '8/10', flight: '12 | 5 | -1 | 3', dome: 'Medium', price: '$15.99', type: 'Distance Driver' },
  { id: 'DNA000002', manufacturer: 'Discraft', mold: 'Buzzz', plastic: 'ESP', weight: '177g', color: 'Pink Swirl', condition: '8/10', flight: '5 | 4 | -1 | 1', dome: 'Flat', price: '$12.99', type: 'Midrange' },
  { id: 'DNA000003', manufacturer: 'MVP', mold: 'Photon', plastic: 'Neutron', weight: '171g', color: 'Yellow', condition: '7/10', flight: '11 | 5 | -1 | 2.5', dome: 'Medium', price: '$16.99', type: 'Distance Driver' }
];
