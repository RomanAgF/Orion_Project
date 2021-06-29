"use strict"
const data = {
    firstGroupQuest: [
      {
        id: "1439",
        question: "Сколько зубов у взрослого человека?",
        answer: {
          a: { text: "26", accept: "false" },
          b: { text: "28", accept: "false" },
          c: { text: "32", accept: "true" },
          d: { text: "30", accept: "false" },
        },
      },
      {
        id: "9894",
        question: "Что не является кисломолочным продуктом?",
        answer: {
          a: { text: "Сыр", accept: "false" },
          b: { text: "Майонез", accept: "true" },
          c: { text: "Сметана", accept: "false" },
          d: { text: "Творог", accept: "false" },
        },
      },
      {
        id: "9985",
        question: "Какому коню в зубы не смотрят?",
        answer: {
          a: { text: "Жареному", accept: "false" },
          b: { text: "Горем убитому", accept: "false" },
          c: { text: "С кариесом", accept: "false" },
          d: { text: "Дарёному", accept: "true" },
        },
      },
      {
        id: "9363",
        question: "Из каких плодов можно получить копру?",
        answer: {
          a: { text: "Кокос", accept: "true" },
          b: { text: "Вишня", accept: "false" },
          c: { text: "Абрикос", accept: "false" },
          d: { text: "Ананас", accept: "false" },
        },
      },
      {
        id: "6905",
        question: "Кого иногда называют спрутом?",
        answer: {
          a: { text: "Кашалота", accept: "false" },
          b: { text: "Медузу", accept: "false" },
          c: { text: "Каракатицу", accept: "false" },
          d: { text: "Осьминога", accept: "true" },
        },
      },
      {
        id: "5778",
        question: "Какая сельскохозяйственная культура сама удобряет почву?",
        answer: {
          a: { text: "Свекла", accept: "false" },
          b: { text: "Горох", accept: "true" },
          c: { text: "Рожь", accept: "false" },
          d: { text: "Кукуруза", accept: "false" },
        },
      },
      {
        id: "3191",
        question: "Что человек может сделать для гибискуса?",
        answer: {
          a: { text: "Вычистить клетку", accept: "false" },
          b: { text: "Расчесать шерсть", accept: "false" },
          c: { text: "Поменять воду в аквариуме", accept: "false" },
          d: { text: "Полить", accept: "true" },
        },
      },
      {
        id: "9601",
        question: "За какое время периода Земля оборачивается вокруг Солнца?",
        answer: {
          a: { text: "За месяц", accept: "false" },
          b: { text: "За неделю", accept: "false" },
          c: { text: "За год", accept: "true" },
          d: { text: "За сутки", accept: "false" },
        },
      },
      {
        id: "8776",
        question: "Под каким названием известна единица с последующими ста нулями?",
        answer: {
          a: { text: "Мегатрон", accept: "false" },
          b: { text: "Гугол", accept: "true" },
          c: { text: "Гигабит", accept: "false" },
          d: { text: "Наномоль", accept: "false" },
        },
      },
      {
        id: "5237",
        question:
          "Какой химический элемент составляет более половины массы тела человека?",
        answer: {
          a: { text: "Углерод", accept: "false" },
          b: { text: "Кальций", accept: "false" },
          c: { text: "Кислород", accept: "true" },
          d: { text: "Железо", accept: "false" },
        },
      },
      {
        id: "4234",
        question: "Какую часть тела также называют «атлант»?",
        answer: {
          a: { text: "Шейный позвонок", accept: "true" },
          b: { text: "Шестая пара ребер", accept: "false" },
          c: { text: "Головной мозг", accept: "false" },
          d: { text: "Часть плеча", accept: "false" },
        },
      },
      {
        id: "7087",
        question: "Сколько кубиков в кубике Рубика?",
        answer: {
          a: { text: "22", accept: "false" },
          b: { text: "24", accept: "false" },
          c: { text: "28", accept: "false" },
          d: { text: "26", accept: "true" },
        },
      },
      {
        id: "2358",
        question:
          "Какое брюхо, согласно спорной русской пословице, глухо к ученью?",
        answer: {
          a: { text: "Толстое", accept: "false" },
          b: { text: "Тощее", accept: "false" },
          c: { text: "Сытое", accept: "true" },
          d: { text: "Пустое", accept: "false" },
        },
      },
      {
        id: "8035",
        question: "Кто считается основоположником кубизма?",
        answer: {
          a: { text: "П. Пикассо", accept: "true" },
          b: { text: "В. Кадинский", accept: "false" },
          c: { text: "А. Энштейн", accept: "false" },
          d: { text: "К. Малевич", accept: "false" },
        },
      },
      {
        id: "2556",
        question: "Что означает гавайское слово «вики», которое дало название интернет-энциклопедии «Википедия»?",
        answer: {
          a: { text: "Простой", accept: "false" },
          b: { text: "Быстрый", accept: "true" },
          c: { text: "Изученный", accept: "false" },
          d: { text: "Маленький", accept: "false" },
        },
      },
    ],
    secondGroupQuest: [
      {
        id: "3983",
        question: "Какая рыба, чтобы освободиться от крючка, часто делает свечу?",
        answer: {
          a: { text: "Осетр", accept: "false" },
          b: { text: "Щука", accept: "true" },
          c: { text: "Налим", accept: "false" },
          d: { text: "Карась", accept: "false" },
        },
      },
      {
        id: "8452",
        question: "Одним из направлений какой религиозной философии является учение дзен",
        answer: {
          a: { text: "Даосизм", accept: "false" },
          b: { text: "Буддизм", accept: "true" },
          c: { text: "Индуизм", accept: "false" },
          d: { text: "Иудаизм", accept: "false" },
        },
      },
      {
        id: "7616",
        question: "Что коллекционирует фалерист?",
        answer: {
          a: { text: "Марки", accept: "false" },
          b: { text: "Значки", accept: "true" },
          c: { text: "Открытки", accept: "false" },
          d: { text: "Конверты", accept: "false" },
        },
      },
      {
        id: "2009",
        question: "Какую страну не пересекает экватор?",
        answer: {
          a: { text: "Панама", accept: "true" },
          b: { text: "Кения", accept: "false" },
          c: { text: "Бразилия", accept: "false" },
          d: { text: "Индонезия", accept: "false" },
        },
      },
      {
        id: "1897",
        question: "Как по-научному называется питьевой спирт?",
        answer: {
          a: { text: "Метанол", accept: "false" },
          b: { text: "Политура", accept: "false" },
          c: { text: "Этанол", accept: "true" },
          d: { text: "Микстура", accept: "false" },
        },
      },
      {
        id: "6571",
        question: "Что у моряков называется камбузом?",
        answer: {
          a: { text: "Кладовая", accept: "false" },
          b: { text: "Кухная", accept: "true" },
          c: { text: "Машинное отделение", accept: "false" },
          d: { text: "Мостик капитана", accept: "false" },
        },
      },
      {
        id: "6895",
        question: "Какая единица измерения названа в честь итальянского дворянина?",
        answer: {
          a: { text: "Паскаль", accept: "false" },
          b: { text: "Ом", accept: "false" },
          c: { text: "Герц", accept: "false" },
          d: { text: "Вольт", accept: "true" },
        },
      },
      {
        id: "8370",
        question:
          "Какое вино необходимо для приготовления классического крюшона?",
        answer: {
          a: { text: "Мадера", accept: "false" },
          b: { text: "Белое столовое", accept: "true" },
          c: { text: "Портвейн", accept: "false" },
          d: { text: "Красное столовое", accept: "false" },
        },
      },
      {
        id: "4491",
        question: "Кто такой речной сверчок?",
        answer: {
          a: { text: "Рыба", accept: "false" },
          b: { text: "Насекомое", accept: "false" },
          c: { text: "Рептилия", accept: "false" },
          d: { text: "Птица", accept: "true" },
        },
      },
      {
        id: "2244",
        question: "Какое из этих австралийских животных не имеет сумки?",
        answer: {
          a: { text: "Утконос", accept: "true" },
          b: { text: "Коала", accept: "false" },
          c: { text: "Вомбат", accept: "false" },
          d: { text: "Ехидна", accept: "false" },
        },
      },
      {
        id: "8840",
        question: "Какого цвета ягоды ядовитого плюща?",
        answer: {
          a: { text: "Синие", accept: "false" },
          b: { text: "Красные", accept: "false" },
          c: { text: "Белые", accept: "true" },
          d: { text: "Черные", accept: "false" },
        },
      },
      {
        id: "1953",
        question: "Какая из этих рек впадает в Азовское море?",
        answer: {
          a: { text: "Дон", accept: "true" },
          b: { text: "Днестр", accept: "false" },
          c: { text: "Днепр", accept: "false" },
          d: { text: "Южный Буг", accept: "false" },
        },
      },
      {
        id: "7634",
        question:
          "Одним из направлений какой религиозной философии является учение дзен?",
        answer: {
          a: { text: "Даосизм", accept: "false" },
          b: { text: "Буддизм", accept: "true" },
          c: { text: "Иудаизм", accept: "false" },
          d: { text: "Пастафарианство", accept: "false" },
        },
      },
      {
        id: "3709",
        question:
          "Какой химический элемент был назван в честь злого подземного гнома?",
        answer: {
          a: { text: "Теллур", accept: "false" },
          b: { text: "Бериллий", accept: "false" },
          c: { text: "Кобальт", accept: "true" },
          d: { text: "Гафний", accept: "false" },
        },
      },
      {
        id: "8338",
        question: "Как в народе называют химическое соединение - тринитротолуол?",
        answer: {
          a: { text: "Пластид", accept: "false" },
          b: { text: "Динамит", accept: "false" },
          c: { text: "Гексаген", accept: "false" },
          d: { text: "Тротил", accept: "true" },
        },
      },
      {
        id: "2015",
        question: "У кого из вампиров кровь пьют только самки?",
        answer: {
          a: { text: "Комары", accept: "true" },
          b: { text: "Летучие мыши", accept: "false" },
          c: { text: "Оборотни", accept: "false" },
          d: { text: "Клещи", accept: "false" },
        },
      },
    ],
    thirdGroupQuest: [
      {
        id: "9882",
        question: "Что изучает семиотика?",
        answer: {
          a: { text: "Человекообразных обезьян", accept: "false" },
          b: { text: "Знаки и символы", accept: "true" },
          c: { text: "Происхождение слов", accept: "false" },
          d: { text: "Флаги", accept: "false" },
        },
      },
      {
        id: "7446",
        question: "В каком из этих алфавитов меньше всего букв?",
        answer: {
          a: { text: "Латинский", accept: "false" },
          b: { text: "Грузинский", accept: "false" },
          c: { text: "Армянский", accept: "false" },
          d: { text: "Греческий", accept: "true" },
        },
      },
      {
        id: "2261",
        question: "Из какого языка пришло слово алгебра?",
        answer: {
          a: { text: "Греческого", accept: "false" },
          b: { text: "Санскрипта", accept: "false" },
          c: { text: "Арабского", accept: "true" },
          d: { text: "Иврита", accept: "false" },
        },
      },
      {
        id: "4285",
        question: "Вождём какого племени был Монтесума?",
        answer: {
          a: { text: "Ацтеки", accept: "true" },
          b: { text: "Майа", accept: "false" },
          c: { text: "Инки", accept: "false" },
          d: { text: "Ирокезы", accept: "false" },
        },
      },
      {
        id: "8224",
        question: "Чему равен один британский фут?",
        answer: {
          a: { text: "30.50 см", accept: "false" },
          b: { text: "30.52 см", accept: "false" },
          c: { text: "30.48 см", accept: "true" },
          d: { text: "30.43 см", accept: "false" },
        },
      },
      {
        id: "3417",
        question: "Что греки называли водяным вором - клепсидрой?",
        answer: {
          a: { text: "Водную мельницу", accept: "false" },
          b: { text: "Баню", accept: "false" },
          c: { text: "Акведук", accept: "false" },
          d: { text: "Водяные часы", accept: "true" },
        },
      },
      {
        id: "3390",
        question: "Какую реку древние греки называли Танаис?",
        answer: {
          a: { text: "Дон", accept: "true" },
          b: { text: "Днестр", accept: "false" },
          c: { text: "Дунай", accept: "false" },
          d: { text: "Днепр", accept: "false" },
        },
      },
      {
        id: "1727",
        question: "Сколько морей омывают Балканский полуостров?",
        answer: {
          a: { text: "4", accept: "false" },
          b: { text: "3", accept: "false" },
          c: { text: "6", accept: "true" },
          d: { text: "5", accept: "false" },
        },
      },
      {
        id: "2378",
        question: "Какого города нет в Казахстане?",
        answer: {
          a: { text: "Самарканд", accept: "true" },
          b: { text: "Шымкент", accept: "false" },
          c: { text: "Караганда", accept: "false" },
          d: { text: "Павлодар", accept: "false" },
        },
      },
      {
        id: "4780",
        question: "Кем по образованию был Антон Павлович Чехов?",
        answer: {
          a: { text: "Программист", accept: "false" },
          b: { text: "Врач", accept: "true" },
          c: { text: "Историк", accept: "false" },
          d: { text: "Учитель", accept: "false" },
        },
      },
      {
        id: "3605",
        question:
          "Как называл народ медную монету в 3 копейки после 40 годов XIX века?",
        answer: {
          a: { text: "Рубль", accept: "false" },
          b: { text: "Грош", accept: "false" },
          c: { text: "Гривенный", accept: "true" },
          d: { text: "Гривна", accept: "false" },
        },
      },
      {
        id: "5800",
        question:
          "На борту какого линкора ВМФ США был подписан акт о капитуляции Японии во второй мировой войне?",
        answer: {
          a: { text: "Нью-Джерси", accept: "false" },
          b: { text: "Айова", accept: "false" },
          c: { text: "Миссури", accept: "true" },
          d: { text: "Висконсин", accept: "false" },
        },
      },
      {
        id: "2920",
        question: "Какой европейский город раньше носил название Лютеция?",
        answer: {
          a: { text: "Лондон", accept: "false" },
          b: { text: "Париж", accept: "true" },
          c: { text: "Тулуза", accept: "false" },
          d: { text: "Воронеж", accept: "false" },
        },
      },
      {
        id: "2905",
        question: "Как назывался первый атомный ледокол СССР?",
        answer: {
          a: { text: "Ленин", accept: "true" },
          b: { text: "Сталин", accept: "false" },
          c: { text: "Киров", accept: "false" },
          d: { text: "Порошенко", accept: "false" },
        },
      },
      {
        id: "6111",
        question:
          "Под каким названием всему миру была известна разведслужба бывшей ГДР?",
        answer: {
          a: { text: "СБУ", accept: "false" },
          b: { text: "МОССАД", accept: "false" },
          c: { text: "АНБ", accept: "false" },
          d: { text: "ШТАЗИ", accept: "true" },
        },
      },
    ],
  };