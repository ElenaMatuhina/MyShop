
# Code game
**Code game** - интернет магазин.

Code game разработан для демонстрации навыков программирования.\
Основной стек технологий: React, TypeScript, Redux Toolkit, Styled Components.\
Проект разработан без использования сторонних библиотек компонентов.


## Дерево проекта

>src
>>common
>>>constants\
>>>hooks\
>>>utils\
>>>media.ts
>
>>components
>>>atoms\
>>>moleculas\
>>>organisms\
>
>> types\
>> reducers\
>> store.ts


## Локальная разработка
> **Заметка:**
> Команды не запустятся без установленной в системе **Nodejs**.

- Прописать ключ в переменную окружения в .env для запроса к апи https://fortniteapi.io/v1/shop?lang=en

```sh
$ REACT_APP_API_KEY=55c1f62a-106479ac-8376eaf1-c90e6736
```
- Установить все зависимости можно следующими командами.

```sh
$ npm i или npm install
```

- Запустить проект можно командой.

```sh
$ npm start
```

- Production cборка проекта запускается следующей командой.

```sh
$ npm run build
```
