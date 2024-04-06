import { readFileSync, writeFileSync, appendFileSync } from 'node:fs';
import { categories } from './data';
import { TCategories, TDataList } from './types/index.type';

export class AppRepository {
  getAllCategories(): TCategories {
    return categories;
  }

  getAllWordsByCategory(path: string): TDataList {
    const data = readFileSync(path, 'utf-8');

    return JSON.parse(data);
  }

  createWord(path: string, data: string) {
    writeFileSync(path, data, 'utf-8');

    return;
  }

  createCategory(path: string) {
    appendFileSync(path, JSON.stringify([]), 'utf-8');

    return;
  }
}
