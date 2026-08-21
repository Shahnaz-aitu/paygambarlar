(function () {

  const translations = {

    ru: {
      home: "Главная",

      tagline: "25 историй пророков — как живая книга",

      title: "Пайғамбарлар",

      heroText:
        "Читайте Коран вместе с историями пророков: спокойно, понятно и с разделением достоверных фактов от популярных легенд.",

      start: "Начать читать",

      prophetsCount: "25 пророков",

      chooseStory: "Выбери историю",

      search: "Найти пророка...",

      story: "История",

      dua: "Дуа",

      hadith: "Хадисы",

      facts: "Интересные факты",

      allAyahs:
        "Все аяты, связанные с этой историей",

      meaning: "Смысл",

      translationNote:
        "Перевод передаёт общий смысл аятов.",

      quranLink: "Открыть на Quran.com",

      source: "Источник",

      grade: "Степень",

      fact: "Факт",

      mentioned: "Упоминается",

      times: "раз",

      relatedSurahs: "Связанные суры",

      directMentions: "Прямые упоминания",

      mentionLinksNote:
        "Нажмите на номер аята, чтобы открыть его на Quran.com.",

      reliability: "Достоверность",

      reliabilityText:
        "Основной рассказ строится на Коране и достоверной Сунне.",

      noDua:
        "В достоверных источниках отдельная мольба этого пророка не передана.",

      surah: "Сура",

      ayahMeaningGeneric:
        "Этот отрывок связан с данной частью истории.",

      prev: "Предыдущий",

      next: "Следующий",

      light: "Светлая тема",

      dark: "Тёмная тема",

      sourcesTitle: "Источники и метод",

      sourcesText:
        "Основной рассказ строится на Коране. Хадисы приводятся с точным сборником и номером только там, где источник проверен.",

      audio: "Аудио",

      audioSoon: "Аудио скоро будет",

      play: "Слушать",

      pause: "Пауза",

      volume: "Громкость",

      speed: "Скорость"
    },


    kk: {
      home: "Басты бет",

      tagline:
        "25 пайғамбар қиссасы — тірі кітап секілді",

      title: "Пайғамбарлар",

      heroText:
        "Пайғамбарлар қиссаларын Құранмен бірге оқыңыз: жеңіл, түсінікті және сенімді деректерді аңыздардан ажыратып.",

      start: "Оқуды бастау",

      prophetsCount: "25 пайғамбар",

      chooseStory: "Қиссаны таңда",

      search: "Пайғамбарды іздеу...",

      story: "Қисса",

      dua: "Дұға",

      hadith: "Хадистер",

      facts: "Қызықты деректер",

      allAyahs:
        "Осы қиссаға қатысты барлық аяттар",

      meaning: "Мағынасы",

      translationNote:
        "Аударма аяттардың жалпы мағынасын жеткізеді.",

      quranLink:
        "Quran.com сайтында ашу",

      source: "Дереккөз",

      grade: "Дәрежесі",

      fact: "Дерек",

      mentioned: "Аталады",

      times: "рет",

      relatedSurahs:
        "Қатысты сүрелер",

      directMentions:
        "Тікелей аталған аяттар",

      mentionLinksNote:
        "Аятты Quran.com сайтында ашу үшін нөмірін басыңыз.",

      reliability: "Достоверность",

      reliabilityText:
        "Негізгі қисса Құран мен сенімді Сүннетке сүйеніп жазылған.",

      noDua:
        "Сенімді деректерде бұл пайғамбардың жеке дұғасы жеткізілмеген.",

      surah: "Сүре",

      ayahMeaningGeneric:
        "Бұл үзінді қиссаның осы бөлігімен байланысты.",

      prev: "Алдыңғы",

      next: "Келесі",

      light: "Жарық тақырып",

      dark: "Қараңғы тақырып",

      sourcesTitle:
        "Дереккөздер мен әдіс",

      sourcesText:
        "Негізгі қисса Құранға сүйеніп жазылған. Хадистер тек жинағы мен нөмірі тексерілген жағдайда беріледі.",

      audio: "Аудио",

      audioSoon:
        "Аудио жақында қосылады",

      play: "Тыңдау",

      pause: "Үзіліс",

      volume: "Дыбыс",

      speed: "Жылдамдық"
    }

  };


  const saved =
    localStorage.getItem("paygambarlar-lang");


  window.currentLang =
    saved === "kk"
      ? "kk"
      : "ru";


  window.t = function (key) {

    return (
      translations[currentLang]?.[key]
      ||
      translations.ru?.[key]
      ||
      key
    );

  };


  window.applyLanguage = function (lang) {

    window.currentLang =
      lang === "kk"
        ? "kk"
        : "ru";


    localStorage.setItem(
      "paygambarlar-lang",
      currentLang
    );


    document.documentElement.lang =
      currentLang;


    document
      .querySelectorAll("[data-ui]")
      .forEach(element => {

        element.textContent =
          t(element.dataset.ui);

      });


    document
      .querySelectorAll("[data-lang]")
      .forEach(button => {

        button.classList.toggle(
          "active",
          button.dataset.lang === currentLang
        );

      });


    window.dispatchEvent(
      new CustomEvent(
        "languagechange",
        {
          detail: {
            lang: currentLang
          }
        }
      )
    );

  };


  document.addEventListener(
    "click",
    event => {

      const button =
        event.target.closest("[data-lang]");

      if (!button) return;


      applyLanguage(
        button.dataset.lang
      );

    }
  );

})();