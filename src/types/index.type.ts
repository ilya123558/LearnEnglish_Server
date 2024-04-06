export type TCategories = string[];

export type TDataItem = {
  en: string[];
  ru: string[];
};

export type TDataList = TDataItem[];

export type TCheckWord = {
  category: string;
  language: string;
  translatedWord: string;
  word: string;
};

export type TCreateWord = {
  category: string;
  en: string[];
  ru: string[];
};

export type TCreateWordByStrings = {
  category: string;
  en: string;
  ru: string;
};

export type TCreateCategory = {
  category: string;
};
