import { ScheduleItem } from './firebase.service';

export const defaultSchedule: ScheduleItem[] = [
  { time: '9:30-10:15', ru: 'Подготовка к школе \nРусский язык 2 класс \nРисование' },
  { ru: 'Мамина школа \nЧтение 2 класс \nРисование \nШахматы \nМатематика 3-4 класс', time: '10:25-11:10' },
  { ru: 'Русский язык 0 класс \nРусский язык 1 класс \nРисование \nШахматы \nМатематика 5-6 класс', time: '11:20-12:05' },
  { ru: 'Кукольный театр \nРусский язык 5-6 класс \nГрафический дизайн \nШахматы \nМатематика 5-6 класс', time: '12:25-13:05' },
  { ru: 'Русский язык \nЛитература 5-6 класс', time: '13:15-14:00' },
];
