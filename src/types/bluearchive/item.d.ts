////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////   IItem   ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export interface IItem {
  Id: number;
  IsReleased: boolean[];
  Category: Category;
  Rarity: Rarity;
  Quality: number;
  Tags: string[];
  Shops: Shop[];
  Icon: string;
  Name: string;
  Desc: string;
  ExpValue?: number;
  SynthQuality?: number;
  EventBonus?: Array<number[]>;
  ConsumeType?: ConsumeType;
  ImmediateUse?: boolean;
  Contains?: Array<number[]>;
  ContainsGlobal?: Array<number[]>;
}

export type Category =
  | 'Material'
  | 'Coin'
  | 'CharacterExpGrowth'
  | 'Favor'
  | 'SecretStone'
  | 'Consumable'
  | 'Collectible';

export type ConsumeType = 'Random' | 'Choice';

export type Rarity = 'N' | 'R' | 'SR' | 'SSR';

export interface Shop {
  ShopCategory: ShopCategory;
  Released: boolean[];
  Amount: number;
  CostType: CostType;
  CostId: number;
  CostAmount: number;
}

export type CostType = 'Currency' | 'Item';

export type ShopCategory = 'General' | 'Raid' | 'Arena' | 'TimeAttack' | 'MasterCoin' | 'SecretStoneGrowth' | 'Chaser';
