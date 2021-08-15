import { Item, ListedItem } from 'src/app/data.service';

const lists: { [name: string]: ListedItem[] } = {
  'Morgen-Routine': [
    {
      name: 'Workout',
      done: false,
    },
    {
      name: 'Nachrichten Checken',
      done: false,
    },
  ],
  Einkaufsliste: [
    {
      name: 'Entwicklergesöff',
      prize: 1.23,
      done: false,
      count: 10,
    },
    {
      name: 'Milch',
      prize: 1.58,
      done: false,
      count: 4,
    },
    {
      name: 'Brot',
      prize: 3.99,
      done: false,
      count: 2,
    },
  ],
  'Stream-Preparation': [
    {
      name: 'Entwicklergesöff',
      prize: 1.23,
      done: false,
    },
    {
      name: 'Nachrichten Checken',
      done: false,
    },
    {
      name: 'Tweet',
      done: false,
    },
  ],
};
const items: Item[] = [
  {
    name: 'Entwicklergesöff',
    prize: 1.23,
  },
  {
    name: 'Milch',
    prize: 1.58,
  },
  {
    name: 'Brot',
    prize: 3.99,
  },
  {
    name: 'Workout',
  },
  {
    name: 'Nachrichten Checken',
  },
  {
    name: 'Tweet',
  },
];

export const initData = () => {
  if (!localStorage.getItem('itemList')) {
    localStorage.setItem('itemList', JSON.stringify(items));
  }
  if (!localStorage.getItem('lists')) {
    localStorage.setItem('lists', JSON.stringify(lists));
  }
};
