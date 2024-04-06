import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import {
  TCheckWord,
  TCreateCategory,
  TCreateWord,
  TCreateWordByStrings,
} from './types/index.type';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  getAllCategories() {
    try {
      return this.appRepository.getAllCategories();
    } catch (error) {
      console.error(error);
    }
  }

  getAllWordsByCategory(category: string) {
    try {
      const path = `src/data/${category}.json`;

      return this.appRepository.getAllWordsByCategory(path);
    } catch (error) {
      console.error(error);
    }
  }

  getAllWordByCategory(category: string) {
    try {
      const path = `src/data/${category}.json`;
      const data = this.appRepository.getAllWordsByCategory(path);
      const randomIndex = Math.floor(Math.random() * data.length);

      return data[randomIndex];
    } catch (error) {
      console.error(error);
    }
  }

  checkWord({ category, language, translatedWord, word }: TCheckWord) {
    try {
      const path = `src/data/${category}.json`;
      const data = this.appRepository
        .getAllWordsByCategory(path)
        .find((item) =>
          item[language === 'en' ? 'ru' : 'en'].find((item) => item === word),
        );

      const result: string | undefined = data[language].find(
        (item) => item === translatedWord,
      );

      return Boolean(result);
    } catch (error) {
      console.error(error);
    }
  }

  createWord({ category, en, ru }: TCreateWord) {
    try {
      const path = `src/data/${category}.json`;
      const data = this.appRepository.getAllWordsByCategory(path);
      data.push({ en, ru });
      this.appRepository.createWord(path, JSON.stringify(data, null, 2));

      return;
    } catch (error) {
      console.error(error);
    }
  }

  createArrayWithWords(str: string) {
    return str
      .split(',')
      .join('')
      .split(' ')
      .filter((item) => item !== '');
  }

  createWordByStrings(props: TCreateWordByStrings) {
    try {
      const en = this.createArrayWithWords(props.en);
      const ru = this.createArrayWithWords(props.ru);

      const path = `src/data/${props.category}.json`;
      const data = this.appRepository.getAllWordsByCategory(path);
      data.push({ en, ru });
      this.appRepository.createWord(path, JSON.stringify(data, null, 2));

      return;
    } catch (error) {
      console.error(error);
    }
  }

  createCategory({ category }: TCreateCategory) {
    try {
      const path = `src/data/${category}.json`;
      this.appRepository.createCategory(path);

      return;
    } catch (error) {
      console.error(error);
    }
  }
}
