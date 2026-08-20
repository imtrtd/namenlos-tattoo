import type { Lang } from "@/lib/i18n";

export type LegalId = "terms" | "privacy" | "aftercare" | "hygiene";

type Section = { h: string; html: string };
type Page = { title: string; sections: Section[] };

const pages: Record<LegalId, Record<Lang, Page>> = {
  terms: {
    en: {
      title: "Terms of Service",
      sections: [
        {
          h: "1. General",
          html: "<p>These Terms govern use of namenlos.tattoo and tattoo services by NAMENLOS (Viktoriia). A form or message is a request, not a confirmed slot. Booking is confirmed only after the Artist’s explicit reply (date, time, place, deposit).</p>",
        },
        {
          h: "2. Deposit, cancel, age",
          html: "<ul><li>A deposit may be required to hold the slot and is applied toward the session unless agreed otherwise.</li><li>Cancel or reschedule 48+ hours ahead. Late cancel / no-show may forfeit the deposit.</li><li>Services only for clients 18+. ID may be required. No service under 18, even with parental consent.</li></ul>",
        },
        {
          h: "3. Work and aftercare",
          html: "<ul><li>Design is approved before needling. Handmade work may vary slightly from the sketch.</li><li>Healing depends on aftercare, skin, sun, lifestyle.</li><li>The Artist may refuse or stop a session for intoxication, aggression, or unsafe skin/health conditions.</li></ul>",
        },
        {
          h: "4. Contact",
          html: "<p>NAMENLOS · Viktoriia · Nuremberg (DE) / Kyiv (UA)<br>Telegram: @imtryingtodesign · Instagram: @namenlos_tattoo</p>",
        },
      ],
    },
    de: {
      title: "AGB",
      sections: [
        {
          h: "1. Allgemeines",
          html: "<p>Diese Bedingungen gelten für namenlos.tattoo und Tätowierungen von NAMENLOS (Viktoriia). Ein Formular ist eine Anfrage, kein bestätigter Slot. Bestätigung erst nach ausdrücklicher Antwort (Datum, Zeit, Ort, Deposit).</p>",
        },
        {
          h: "2. Deposit, Absage, Alter",
          html: "<ul><li>Ein Deposit kann den Slot halten und wird auf die Session angerechnet.</li><li>Absage / Verschiebung 48+ Stunden vorher. Späte Absage / No-Show kann das Deposit kosten.</li><li>Nur 18+. Ausweis möglich. Keine Leistung unter 18, auch nicht mit Elternzustimmung.</li></ul>",
        },
        {
          h: "3. Arbeit und Aftercare",
          html: "<ul><li>Design vor dem Stechen. Handarbeit kann vom Sketch abweichen.</li><li>Heilung hängt von Aftercare, Haut, Sonne, Lifestyle ab.</li><li>Ablehnung bei Intoxikation, Aggression oder unsicherer Haut.</li></ul>",
        },
        {
          h: "4. Kontakt",
          html: "<p>NAMENLOS · Viktoriia · Nürnberg (DE) / Kiew (UA)<br>Telegram: @imtryingtodesign · Instagram: @namenlos_tattoo</p>",
        },
      ],
    },
    ru: {
      title: "Условия",
      sections: [
        {
          h: "1. Общее",
          html: "<p>Условия сайта namenlos.tattoo и услуг NAMENLOS (Viktoriia). Форма — запрос, не подтверждённый слот. Запись подтверждается только явным ответом (дата, время, место, депозит).</p>",
        },
        {
          h: "2. Депозит, отмена, возраст",
          html: "<ul><li>Депозит может фиксировать слот и идёт в счёт сеанса.</li><li>Отмена / перенос за 48+ часов. No-show может стоить депозит.</li><li>Только 18+. Документ по запросу. До 18 — нет, даже с согласия родителей.</li></ul>",
        },
        {
          h: "3. Работа и уход",
          html: "<ul><li>Эскиз до иглы. Ручная работа может чуть отличаться.</li><li>Заживление зависит от ухода, кожи, солнца.</li><li>Отказ при опьянении, агрессии, небезопасной коже.</li></ul>",
        },
        {
          h: "4. Контакт",
          html: "<p>NAMENLOS · Viktoriia · Нюрнберг (DE) / Киев (UA)<br>Telegram: @imtryingtodesign · Instagram: @namenlos_tattoo</p>",
        },
      ],
    },
    uk: {
      title: "Умови",
      sections: [
        {
          h: "1. Загальне",
          html: "<p>Умови сайту namenlos.tattoo і послуг NAMENLOS (Viktoriia). Форма — запит, не підтверджений слот.</p>",
        },
        {
          h: "2. Депозит, скасування, вік",
          html: "<ul><li>Депозит може фіксувати слот.</li><li>Скасування за 48+ годин.</li><li>Лише 18+.</li></ul>",
        },
        {
          h: "3. Робота і догляд",
          html: "<ul><li>Ескіз до голки. Загоєння залежить від догляду.</li></ul>",
        },
        {
          h: "4. Контакт",
          html: "<p>NAMENLOS · Viktoriia · Нюрнберг / Київ<br>Telegram: @imtryingtodesign · Instagram: @namenlos_tattoo</p>",
        },
      ],
    },
  },
  privacy: {
    en: {
      title: "Privacy Policy",
      sections: [
        {
          h: "Controller",
          html: "<p>NAMENLOS (Viktoriia), tattoo artist, Nuremberg / Kyiv. Privacy contact: Telegram @imtryingtodesign.</p>",
        },
        {
          h: "What we collect",
          html: "<p>Name, contact, idea, placement, photos you upload, language preference. Used only to answer booking requests and run the session. No separate analytics suite in this build. Hosting logs may store IP.</p>",
        },
        {
          h: "Telegram",
          html: "<p>Forms may be delivered via Telegram Bot API to the Artist. Telegram processes data under its own policy. Processing may occur outside the EEA.</p>",
        },
        {
          h: "Rights",
          html: "<p>You may request access, correction, or deletion of your request data via Telegram. Booking data is kept as long as needed to deliver the service and legal obligations.</p>",
        },
      ],
    },
    de: {
      title: "Datenschutz",
      sections: [
        {
          h: "Verantwortliche",
          html: "<p>NAMENLOS (Viktoriia), Tätowiererin, Nürnberg / Kiew. Kontakt: Telegram @imtryingtodesign.</p>",
        },
        {
          h: "Daten",
          html: "<p>Name, Kontakt, Idee, Platzierung, hochgeladene Fotos, Sprache. Nur für Anfragen und Sessions. Kein extra Analytics in diesem Build.</p>",
        },
        {
          h: "Telegram",
          html: "<p>Formulare können per Telegram Bot API an die Künstlerin gehen. Telegram hat eigene Regeln; Verarbeitung ggf. außerhalb des EWR.</p>",
        },
        {
          h: "Rechte",
          html: "<p>Auskunft, Korrektur, Löschung per Telegram. Speicherung so lange wie für Service und Recht nötig.</p>",
        },
      ],
    },
    ru: {
      title: "Конфиденциальность",
      sections: [
        {
          h: "Контролёр",
          html: "<p>NAMENLOS (Viktoriia), тату-мастер, Нюрнберг / Киев. Privacy: Telegram @imtryingtodesign.</p>",
        },
        {
          h: "Какие данные",
          html: "<p>Имя, контакт, идея, зона, фото, язык. Только для ответа на заявку и сеанса. Отдельной аналитики в этой сборке нет.</p>",
        },
        {
          h: "Telegram",
          html: "<p>Заявки могут уходить через Telegram Bot API. Telegram обрабатывает данные по своим правилам.</p>",
        },
        {
          h: "Права",
          html: "<p>Доступ, исправление, удаление — через Telegram.</p>",
        },
      ],
    },
    uk: {
      title: "Конфіденційність",
      sections: [
        {
          h: "Контролер",
          html: "<p>NAMENLOS (Viktoriia), Нюрнберг / Київ. Telegram @imtryingtodesign.</p>",
        },
        {
          h: "Дані",
          html: "<p>Ім’я, контакт, ідея, зона, фото, мова. Лише для заявки і сеансу.</p>",
        },
        {
          h: "Telegram",
          html: "<p>Заявки можуть іти через Telegram Bot API.</p>",
        },
        {
          h: "Права",
          html: "<p>Доступ, виправлення, видалення — через Telegram.</p>",
        },
      ],
    },
  },
  aftercare: {
    en: {
      title: "Aftercare",
      sections: [
        {
          h: "First 48 hours",
          html: "<ul><li>Leave the wrap as instructed. Wash with unscented soap, pat dry, thin layer of recommended ointment.</li><li>No soaking, pools, sauna, gym friction, or sun.</li></ul>",
        },
        {
          h: "Healing",
          html: "<ul><li>Itch and flakes are normal. Do not pick.</li><li>Moisturise lightly. SPF after the skin is closed if it will see sun.</li><li>Write on Telegram if anything looks infected or you are unsure.</li></ul>",
        },
      ],
    },
    de: {
      title: "Aftercare",
      sections: [
        {
          h: "Erste 48 Stunden",
          html: "<ul><li>Folie wie gesagt lassen. Unparfümierte Seife, trocken tupfen, dünn die empfohlene Salbe.</li><li>Kein Wasserbad, Pool, Sauna, Reibung, Sonne.</li></ul>",
        },
        {
          h: "Heilung",
          html: "<ul><li>Jucken und Schuppen sind normal. Nicht kratzen.</li><li>Leicht pflegen. SPF wenn die Haut zu ist.</li></ul>",
        },
      ],
    },
    ru: {
      title: "Уход",
      sections: [
        {
          h: "Первые 48 часов",
          html: "<ul><li>Плёнку — как сказано. Мыть без отдушки, промокнуть, тонкий слой мази.</li><li>Не замачивать, не бассейн, не баня, не спорт с трением, не солнце.</li></ul>",
        },
        {
          h: "Заживление",
          html: "<ul><li>Зуд и шелушение — норма. Не ковырять.</li><li>Если что-то похоже на инфекцию — пиши в Telegram.</li></ul>",
        },
      ],
    },
    uk: {
      title: "Догляд",
      sections: [
        {
          h: "Перші 48 годин",
          html: "<ul><li>Плівку — як сказано. Мити без віддушки, тонкий шар мазі.</li><li>Не замочувати, не басейн, не сауна, не сонце.</li></ul>",
        },
        {
          h: "Загоєння",
          html: "<ul><li>Свербіж і лущення — норма. Не шкрябати.</li></ul>",
        },
      ],
    },
  },
  hygiene: {
    en: {
      title: "Hygieneplan",
      sections: [
        {
          h: "Studio practice",
          html: "<ul><li>Single-use needles and cartridges. Gloves. Skin disinfection before work.</li><li>Surfaces wiped between clients. Machines bagged or disinfected.</li><li>The Artist may stop if the skin is not safe to work on that day.</li></ul>",
        },
        {
          h: "Client",
          html: "<p>Arrive sober, with clean skin, and honest health info (allergies, meds, conditions). This is not a medical clinic — complications need a doctor.</p>",
        },
      ],
    },
    de: {
      title: "Hygieneplan",
      sections: [
        {
          h: "Praxis",
          html: "<ul><li>Einweg-Nadeln. Handschuhe. Hautdesinfektion.</li><li>Flächen zwischen Kunden. Maschine geschützt oder desinfiziert.</li></ul>",
        },
        {
          h: "Kunde",
          html: "<p>Nüchtern, saubere Haut, ehrliche Gesundheitsangaben. Keine Klinik — bei Komplikationen zum Arzt.</p>",
        },
      ],
    },
    ru: {
      title: "Гигиена",
      sections: [
        {
          h: "Практика",
          html: "<ul><li>Одноразовые иглы. Перчатки. Дезинфекция кожи.</li><li>Поверхности между клиентами. Машинка в барьере или дезинфекция.</li></ul>",
        },
        {
          h: "Клиент",
          html: "<p>Трезвым, с чистой кожей, честно про здоровье. Это не клиника.</p>",
        },
      ],
    },
    uk: {
      title: "Гігієна",
      sections: [
        {
          h: "Практика",
          html: "<ul><li>Одноразові голки. Рукавички. Дезінфекція шкіри.</li></ul>",
        },
        {
          h: "Клієнт",
          html: "<p>Тверезим, з чистою шкірою, чесно про здоров’я.</p>",
        },
      ],
    },
  },
};

export function getLegal(id: LegalId, lang: Lang): Page {
  return pages[id][lang] || pages[id].en;
}
