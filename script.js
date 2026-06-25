const helperForm = document.getElementById("helper-form");

if (helperForm) {
  const resultTitle = document.getElementById("result-title");
  const resultSummary = document.getElementById("result-summary");
  const resultList = document.getElementById("result-list");

  const serviceContent = {
    registration: {
      title: "Памятка: регистрация по месту жительства",
      summary: "Подходит для первичной проверки документов перед обращением в МФЦ по вопросам регистрации.",
      items: [
        "Подготовить паспорт заявителя и документы на жилое помещение.",
        "Проверить, требуется ли согласие собственника или присутствие всех участников.",
        "Уточнить, есть ли дополнительные документы на детей или членов семьи."
      ]
    },
    passport: {
      title: "Памятка: замена или выдача паспорта",
      summary: "Форма напоминает о базовых документах и действиях перед подачей заявления.",
      items: [
        "Определить основание обращения: возраст, утеря, порча, изменение данных.",
        "Подготовить фотографии, квитанцию об оплате и подтверждающие документы.",
        "Проверить корректность личных данных перед передачей заявления специалисту."
      ]
    },
    estate: {
      title: "Памятка: услуги Росреестра",
      summary: "Чек-лист помогает не пропустить важные правоустанавливающие документы и сведения о сделке.",
      items: [
        "Уточнить вид регистрационного действия или запроса выписки.",
        "Подготовить договор, правоустанавливающие документы и паспорта сторон.",
        "Проверить наличие подписей, приложений и читаемость копий."
      ]
    },
    social: {
      title: "Памятка: социальные услуги и справки",
      summary: "Подходит для предварительной проверки подтверждающих справок и реквизитов.",
      items: [
        "Проверить срок действия справок и подтверждений льготного статуса.",
        "Подготовить реквизиты, документы на детей и подтверждение состава семьи при необходимости.",
        "Уточнить, требуется ли дополнительное заявление или межведомственный запрос."
      ]
    }
  };

  const visitorAdditions = {
    adult: "Заявитель обращается лично, поэтому основное внимание уделяется паспорту и оригиналам документов.",
    family: "Если обращение связано с детьми, дополнительно проверьте свидетельства о рождении и документы законных представителей.",
    proxy: "При обращении представителя обязательно проверить доверенность и паспорт представителя."
  };

  helperForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(helperForm);
    const service = formData.get("service");
    const visitor = formData.get("visitor");
    const content = serviceContent[service];

    resultTitle.textContent = content.title;
    resultSummary.textContent = `${content.summary} ${visitorAdditions[visitor]}`;
    resultList.innerHTML = "";

    content.items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      resultList.appendChild(listItem);
    });
  });
}
