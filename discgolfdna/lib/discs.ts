export type Disc = {
  id: string;
  manufacturer: string;
  mold: string;
  plastic: string;
  weight: number;
  color: string;
  condition: number;
  type: 'Driver' | 'Fairway' | 'Midrange' | 'Putter';
  speed: number;
  glide: number;
  turn: number;
  fade: number;
  price: number;
  sku: string;
  discDnaId: string;
  dome: 'Flat' | 'Medium' | 'Domey';
  storageBin: string;
  estimatedStability: string;
  collectorRating: number;
};

export const discs: Disc[] = [
  { id:'innova-destroyer-star-001', manufacturer:'Innova', mold:'Destroyer', plastic:'Star', weight:173, color:'Pink', condition:8.5, type:'Driver', speed:12, glide:5, turn:-1, fade:3, price:15.99, sku:'DGD-000001', discDnaId:'DNA-000001', dome:'Medium', storageBin:'A1', estimatedStability:'Stable with reliable fade', collectorRating:3 },
  { id:'discraft-buzzz-esp-002', manufacturer:'Discraft', mold:'Buzzz', plastic:'ESP', weight:177, color:'Pink Swirl', condition:8, type:'Midrange', speed:5, glide:4, turn:-1, fade:1, price:12.99, sku:'DGD-000002', discDnaId:'DNA-000002', dome:'Flat', storageBin:'B2', estimatedStability:'Straight with light finish', collectorRating:3 },
  { id:'mvp-photon-neutron-003', manufacturer:'MVP', mold:'Photon', plastic:'Neutron', weight:171, color:'Yellow', condition:8, type:'Driver', speed:11, glide:5, turn:-1, fade:2.5, price:16.99, sku:'DGD-000003', discDnaId:'DNA-000003', dome:'Medium', storageBin:'A3', estimatedStability:'Workable distance driver', collectorRating:2 },
  { id:'innova-aviar-dx-004', manufacturer:'Innova', mold:'Aviar', plastic:'DX', weight:175, color:'White/Green', condition:7.5, type:'Putter', speed:2, glide:3, turn:0, fade:1, price:9.99, sku:'DGD-000004', discDnaId:'DNA-000004', dome:'Medium', storageBin:'P1', estimatedStability:'Straight putting putter', collectorRating:2 }
];
