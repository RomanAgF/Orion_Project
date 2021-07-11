"use strict";
const data = {
  firstGroupQuest: [
    {
      id: "1439",
      question: "What is the purpose of ECO points?",
      answer: {
        a: { text: "For profit purposes only", accept: "false" },
        b: { text: "For research purposes only", accept: "true" },
        c: { text: "For guaranteed allocation in ECO ICO", accept: "false" },
        d: { text: "For guaranteed airdrop of ECO tokens", accept: "false" },
      },
    },
    {
      id: "9894",
      question:
        "Which place is used most of all for participating in ECO bounties?",
      answer: {
        a: { text: "Telegram chat", accept: "false" },
        b: { text: "Discord", accept: "true" },
        c: { text: "Wechat", accept: "false" },
        d: { text: "Slack", accept: "false" },
      },
    },
    {
      id: "9985",
      question: "Who is Andy Bromberg?",
      answer: {
        a: { text: "CEO at ECO", accept: "false" },
        b: { text: "Co-founder at Coinlist", accept: "false" },
        c: {
          text: "Founding research scientist at the Stanford Bitcoin Group.",
          accept: "false",
        },
        d: { text: "All of the above", accept: "true" },
      },
    },
    {
      id: "9363",
      question: "What is ECO's official Twitter (@name)?",
      answer: {
        a: { text: "eco", accept: "true" },
        b: { text: "ecoapp", accept: "false" },
        c: { text: "eco_cashback", accept: "false" },
        d: { text: "eco_not_a_bank", accept: "false" },
      },
    },
    {
      id: "5778",
      question: "What is ECO's official Telegram channel?",
      answer: {
        a: { text: "Eco_US", accept: "false" },
        b: { text: "There is no official telegram channel", accept: "true" },
        c: { text: "Ecoapp", accept: "false" },
        d: { text: "eco_official", accept: "false" },
      },
    },
    {
      id: "3191",
      question:
        "You earn __ cashback at the places you spend the most, and up to __ on your balance the rest of the time. Fill the spaces.",
      answer: {
        a: { text: "4%, 5%", accept: "false" },
        b: { text: "2.5%, 2.5%", accept: "false" },
        c: { text: "1%, 5%", accept: "false" },
        d: { text: "5%, 5%", accept: "true" },
      },
    },
    {
      id: "9601",
      question: "Which hashtag you can see most of all in Eco Twitter?",
      answer: {
        a: { text: "#ecoisabank", accept: "false" },
        b: { text: "#FAQ", accept: "false" },
        c: { text: "#takeyourcashback", accept: "true" },
        d: { text: "#econews", accept: "false" },
      },
    },
    {
      id: "8776",
      question: "What you can do with Eco App?",
      answer: {
        a: { text: "Spend money", accept: "false" },
        b: { text: "All of the above", accept: "true" },
        c: { text: "Make money", accept: "false" },
        d: { text: "Send money", accept: "false" },
      },
    },
    {
      id: "5237",
      question: "How long is verification process in ECO app?",
      answer: {
        a: { text: "1-3 minutes", accept: "false" },
        b: { text: "1-3 hours", accept: "false" },
        c: { text: "1-3 business days", accept: "true" },
        d: { text: "1-3 business weeks", accept: "false" },
      },
    },
    {
      id: "4234",
      question: "When does 5% cash back arrive?",
      answer: {
        a: { text: "Monthly", accept: "true" },
        b: { text: "Daily", accept: "false" },
        c: { text: "Weekly", accept: "false" },
        d: { text: "1-3 business weeks", accept: "false" },
      },
    },
    {
      id: "7087",
      question: "Who can use the App right now? (June 2021)",
      answer: {
        a: { text: "Android users in US", accept: "false" },
        b: { text: "Android and iPhone users worldwide", accept: "false" },
        c: {
          text: "iPhone users in US, Android users worldwide",
          accept: "false",
        },
        d: { text: "iPhone users in US", accept: "true" },
      },
    },
    {
      id: "2358",
      question:
        "How many downloads of ECO app during the first year will be counted as success by Andy Bromberg?",
      answer: {
        a: { text: ">900000", accept: "false" },
        b: { text: ">550000", accept: "false" },
        c: {
          text: "Andy doesn't rate amount of downloads as a measure of success",
          accept: "true",
        },
        d: { text: ">2000000", accept: "false" },
      },
    },
    {
      id: "8035",
      question:
        "What do you need to write in Discord to get info on how to get points?",
      answer: {
        a: { text: "faq.points", accept: "true" },
        b: { text: "faq_points", accept: "false" },
        c: { text: "!points", accept: "false" },
        d: { text: "!faq", accept: "false" },
      },
    },
    {
      id: "2556",
      question:
        "What is the name of the channel where there is only 1 message that is hidden?",
      answer: {
        a: { text: "how-to-onboard", accept: "false" },
        b: { text: "secret-teaser", accept: "true" },
        c: { text: "the-dispatch", accept: "false" },
        d: { text: "community-guidelines", accept: "false" },
      },
    },
  ],
  secondGroupQuest: [
    {
      id: "3983",
      question:
        "What email is used for collecting feedback and ideas about new features for ECO app?",
      answer: {
        a: {
          text: "No email is used for it, you only can share it in discord server",
          accept: "false",
        },
        b: { text: "support@eco.com", accept: "true" },
        c: { text: "feedback@eco.com", accept: "false" },
        d: { text: "app.feedback@eco.com", accept: "false" },
      },
    },
    {
      id: "8452",
      question: `"What will The Accountant show if you write "!leaderboard" command?"`,
      answer: {
        a: {
          text: "Nice to meet you. Here’s how to talk to me:",
          accept: "false",
        },
        b: { text: "top 10 Points holders: ", accept: "true" },
        c: {
          text: "incorrect number of arguments: !leaderboard [how many users to show]",
          accept: "false",
        },
        d: { text: "top 25 Points holders: ", accept: "false" },
      },
    },
    {
      id: "7616",
      question: `"Who was agressively buying points in June and started transparent deals with "OTC" comment in points-bartering?"`,
      answer: {
        a: { text: "cooloNe", accept: "false" },
        b: { text: "ARTEM LAZAREV", accept: "true" },
        c: { text: "prontera", accept: "false" },
        d: { text: "w124eth", accept: "false" },
      },
    },
    {
      id: "2009",
      question: `"Which room exists in "other languages" block?"`,
      answer: {
        a: { text: "vnvt-eco", accept: "true" },
        b: { text: "ukukr-eco", accept: "false" },
        c: { text: "chch-eco", accept: "false" },
        d: { text: "kokor-eco", accept: "false" },
      },
    },
    {
      id: "1897",
      question: "Which room is deleted from Discord channel?",
      answer: {
        a: { text: "past-audio", accept: "false" },
        b: { text: "how-to-onboard", accept: "false" },
        c: { text: "invite-thank-yous", accept: "true" },
        d: { text: "lotteries-test", accept: "false" },
      },
    },
    {
      id: "6571",
      question: "Who is one of creators of ECO-Leaderboard?",
      answer: {
        a: { text: "passenger", accept: "false" },
        b: { text: "Angry", accept: "true" },
        c: { text: "Jeremie", accept: "false" },
        d: { text: "Igrex", accept: "false" },
      },
    },
    {
      id: "6895",
      question: "Which of these bots doesn't exist in ECO Discord?",
      answer: {
        a: { text: "Eco Meme", accept: "false" },
        b: { text: "Eco Voting Captcha", accept: "false" },
        c: { text: "Eco story", accept: "false" },
        d: { text: "Eco Official FAQ", accept: "true" },
      },
    },
    {
      id: "8370",
      question: "What is the aim of Unsung Heros channel?",
      answer: {
        a: {
          text: "to discuss the future of the Discord server and bounties",
          accept: "false",
        },
        b: {
          text: "to highlight somebody's work done in last 7 days",
          accept: "true",
        },
        c: {
          text: "to choose whom to send a donation this week",
          accept: "false",
        },
        d: {
          text: "to share stories about doing something good to other people",
          accept: "false",
        },
      },
    },
    // {
    //   id: "4491",
    //   question: "Кто такой речной сверчок?",
    //   answer: {
    //     a: { text: "Рыба", accept: "false" },
    //     b: { text: "Насекомое", accept: "false" },
    //     c: { text: "Рептилия", accept: "false" },
    //     d: { text: "Птица", accept: "true" },
    //   },
    // },
    // {
    //   id: "2244",
    //   question: "Какое из этих австралийских животных не имеет сумки?",
    //   answer: {
    //     a: { text: "Утконос", accept: "true" },
    //     b: { text: "Коала", accept: "false" },
    //     c: { text: "Вомбат", accept: "false" },
    //     d: { text: "Ехидна", accept: "false" },
    //   },
    // },
    // {
    //   id: "8840",
    //   question: "Какого цвета ягоды ядовитого плюща?",
    //   answer: {
    //     a: { text: "Синие", accept: "false" },
    //     b: { text: "Красные", accept: "false" },
    //     c: { text: "Белые", accept: "true" },
    //     d: { text: "Черные", accept: "false" },
    //   },
    // },
    // {
    //   id: "1953",
    //   question: "Какая из этих рек впадает в Азовское море?",
    //   answer: {
    //     a: { text: "Дон", accept: "true" },
    //     b: { text: "Днестр", accept: "false" },
    //     c: { text: "Днепр", accept: "false" },
    //     d: { text: "Южный Буг", accept: "false" },
    //   },
    // },
    // {
    //   id: "7634",
    //   question:
    //     "Одним из направлений какой религиозной философии является учение дзен?",
    //   answer: {
    //     a: { text: "Даосизм", accept: "false" },
    //     b: { text: "Буддизм", accept: "true" },
    //     c: { text: "Иудаизм", accept: "false" },
    //     d: { text: "Пастафарианство", accept: "false" },
    //   },
    // },
    // {
    //   id: "3709",
    //   question:
    //     "Какой химический элемент был назван в честь злого подземного гнома?",
    //   answer: {
    //     a: { text: "Теллур", accept: "false" },
    //     b: { text: "Бериллий", accept: "false" },
    //     c: { text: "Кобальт", accept: "true" },
    //     d: { text: "Гафний", accept: "false" },
    //   },
    // },
    // {
    //   id: "8338",
    //   question: "Как в народе называют химическое соединение - тринитротолуол?",
    //   answer: {
    //     a: { text: "Пластид", accept: "false" },
    //     b: { text: "Динамит", accept: "false" },
    //     c: { text: "Гексаген", accept: "false" },
    //     d: { text: "Тротил", accept: "true" },
    //   },
    // },
    // {
    //   id: "2015",
    //   question: "У кого из вампиров кровь пьют только самки?",
    //   answer: {
    //     a: { text: "Комары", accept: "true" },
    //     b: { text: "Летучие мыши", accept: "false" },
    //     c: { text: "Оборотни", accept: "false" },
    //     d: { text: "Клещи", accept: "false" },
    //   },
    // },
  ],
  thirdGroupQuest: [
    {
      id: "9882",
      question: "What is the name of first community bounty?",
      answer: {
        a: { text: "gps", accept: "false" },
        b: { text: "tiktok-card-dance", accept: "true" },
        c: { text: "eco-for-life", accept: "false" },
        d: { text: "trash-pickup-challenge", accept: "false" },
      },
    },
    {
      id: "7446",
      question: "What is the date of first message in Discord?",
      answer: {
        a: { text: "04.02.2021", accept: "false" },
        b: { text: "13.02.2021", accept: "false" },
        c: { text: "24.02.2021", accept: "false" },
        d: { text: "10.02.2021", accept: "true" },
      },
    },
    {
      id: "2261",
      question: "Who is included in the ECO team?",
      answer: {
        a: { text: "Nishi Ault", accept: "false" },
        b: { text: "Enrique Karanam", accept: "false" },
        c: { text: "Satish Bhatti", accept: "true" },
        d: { text: "Andrew Kataev", accept: "false" },
      },
    },
    // {
    //   id: "4285",
    //   question: "Вождём какого племени был Монтесума?",
    //   answer: {
    //     a: { text: "Ацтеки", accept: "true" },
    //     b: { text: "Майа", accept: "false" },
    //     c: { text: "Инки", accept: "false" },
    //     d: { text: "Ирокезы", accept: "false" },
    //   },
    // },
    {
      id: "8224",
      question:
        "Which type of transport got the second place in ecomotion bounty?",
      answer: {
        a: { text: "ECO-robot truck", accept: "false" },
        b: { text: "Eco-Boat", accept: "false" },
        c: { text: "ECO-Rover bot", accept: "true" },
        d: { text: "Eco-plane", accept: "false" },
      },
    },
    // {
    //   id: "3417",
    //   question: "Что греки называли водяным вором - клепсидрой?",
    //   answer: {
    //     a: { text: "Водную мельницу", accept: "false" },
    //     b: { text: "Баню", accept: "false" },
    //     c: { text: "Акведук", accept: "false" },
    //     d: { text: "Водяные часы", accept: "true" },
    //   },
    // },
    // {
    //   id: "3390",
    //   question: "How big was the reward for this picture by the Team?",
    //   answer: {
    //     a: { text: "40", accept: "true" },
    //     b: { text: "5 points", accept: "false" },
    //     c: { text: "10 poinst", accept: "false" },
    //     d: { text: "25 points", accept: "false" },
    //   },
    // },
    {
      id: "1727",
      question:
        "What was the maximum amount of points sent by Eco Story bot (by June 2021)?",
      answer: {
        a: { text: "50 points", accept: "false" },
        b: { text: "53 points", accept: "false" },
        c: { text: "49 points", accept: "true" },
        d: { text: "48 points", accept: "false" },
      },
    },
    {
      id: "2378",
      question:
        "What was the price of High Purity Medical Oxygen Concentrator, bought by azib to help doctors in India?",
      answer: {
        a: { text: "$1200", accept: "true" },
        b: { text: "$1300", accept: "false" },
        c: { text: "$1400", accept: "false" },
        d: { text: "$1500", accept: "false" },
      },
    },
    {
      id: "4780",
      question: `"How many people took part in week 2 voting for "eco-unsung-heroes"? "`,
      answer: {
        a: { text: "44", accept: "false" },
        b: { text: "48", accept: "true" },
        c: { text: "17", accept: "false" },
        d: { text: "57", accept: "false" },
      },
    },
    {
      id: "3605",
      question: `"Who previously was the owner of "ECO" brand?"`,
      answer: {
        a: { text: "Jeff Bezos", accept: "false" },
        b: { text: "Tony Xu", accept: "false" },
        c: { text: "Garret Camp", accept: "true" },
        d: { text: "Brian Chesky", accept: "false" },
      },
    },
    // {
    //   id: "5800",
    //   question: "How big was the reward for this picture by the Team?",
    //   answer: {
    //     a: { text: "5 points", accept: "false" },
    //     b: { text: "10 points", accept: "false" },
    //     c: { text: "15 points", accept: "true" },
    //     d: { text: "20 points", accept: "false" },
    //   },
    // },
    // {
    //   id: "2920",
    //   question: "Какой европейский город раньше носил название Лютеция?",
    //   answer: {
    //     a: { text: "Лондон", accept: "false" },
    //     b: { text: "Париж", accept: "true" },
    //     c: { text: "Тулуза", accept: "false" },
    //     d: { text: "Воронеж", accept: "false" },
    //   },
    // },
    // {
    //   id: "2905",
    //   question: "Как назывался первый атомный ледокол СССР?",
    //   answer: {
    //     a: { text: "Ленин", accept: "true" },
    //     b: { text: "Сталин", accept: "false" },
    //     c: { text: "Киров", accept: "false" },
    //     d: { text: "Порошенко", accept: "false" },
    //   },
    // },
    // {
    //   id: "6111",
    //   question:
    //     "Под каким названием всему миру была известна разведслужба бывшей ГДР?",
    //   answer: {
    //     a: { text: "СБУ", accept: "false" },
    //     b: { text: "МОССАД", accept: "false" },
    //     c: { text: "АНБ", accept: "false" },
    //     d: { text: "ШТАЗИ", accept: "true" },
    //   },
    // },
  ],
};
