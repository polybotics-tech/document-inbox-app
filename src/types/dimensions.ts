export type CommonDimensionsType = {
  xs?: number;
  s?: number;
  m?: number;
  b?: number;
  xb?: number;
  xxb?: number;
};

export type WeightDimensionsType = {
  bold?: string | number;
  semibold?: string | number;
  regular?: string | number;
};

export type DimensionsType = {
  font: {
    size: CommonDimensionsType;
    family: {
      bold?: string;
      semibold?: string;
      regular?: string;
      light?: string;
    };
  };
  icon: {
    size: CommonDimensionsType;
    weight: WeightDimensionsType;
  };
  thumbnail: CommonDimensionsType;
  padding: CommonDimensionsType;
  gap: CommonDimensionsType;
  radius: CommonDimensionsType & { round: number };
  setDimension: (value?: number) => number;
};

export type UseDimensionsHookType = DimensionsType & {
  isIOS: boolean;
  screenWidth: {
    full: number;
    ratio: (ratio: number, width?: number) => number;
  };
  screenHeight: {
    full: number;
    ratio: (ratio: number, width?: number) => number;
  };
};
