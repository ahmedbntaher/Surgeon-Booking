const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");
const form = document.querySelector("#appointment-form");
const status = document.querySelector(".form-status");
const languageOptions = document.querySelectorAll(".language-option");

const translations = {
  fr: {
    ".skip-link": "Aller au contenu",
    ".brand small": "Chirurgie générale et digestive",
    ".menu-toggle": "Menu",
    ".site-nav a": ["À propos", "Domaines de soins", "Parcours", "Contact", "Prendre rendez-vous <span aria-hidden=\"true\">↗</span>"],
    ".hero .eyebrow": "Chirurgie générale et digestive · Bizerte Médicale",
    ".hero h1": "Une expertise chirurgicale.<br /><em>Un accompagnement clair</em> à chaque étape.",
    ".hero-intro": "Le Dr Ben Taher Chafik est spécialiste en chirurgie générale et digestive. Il vous accompagne avec attention et clarté à chaque étape.",
    ".hero .button": "Prendre rendez-vous <span aria-hidden=\"true\">↗</span>",
    ".hero-note": "<span class=\"pulse-dot\"></span> De nouveaux patients sont les bienvenus <span class=\"note-rule\"></span> Bizerte",
    ".scroll-cue": "<span></span> Découvrir",
    ".intro-strip p": "« Une bonne prise en charge commence par être écouté, compris et guidé avec clarté. »",
    ".intro-strip span": "— Dr Ben Taher Chafik",
    ".about-section .eyebrow": "01 — Une approche réfléchie",
    ".about-section h2": "Une prise en charge sûre,<br /><em>fondée sur la clarté.</em>",
    ".about-copy .lead": "La chirurgie est une décision importante. Mon rôle est de rendre chaque étape éclairée, sereine et personnelle.",
    ".about-copy p:nth-of-type(2)": "Spécialiste en chirurgie générale et digestive : chirurgie de l’obésité et du diabète, du foie et des voies biliaires, de l’estomac, du pancréas et des intestins, proctologie, hernies, chirurgie cœlioscopique et chirurgie des cancers.",
    ".about-copy p:nth-of-type(3)": "Ancien Attaché des Hôpitaux de France et ancien Assistant Hospitalo-Universitaire à la Faculté de Médecine.",
    "#doctor-portrait": { alt: "Portrait du Dr Ben Taher Chafik, spécialiste en chirurgie générale et digestive" },
    ".doctor-caption strong": "Dr Ben Taher Chafik",
    ".doctor-caption span": "Spécialiste en chirurgie générale et digestive",
    ".text-link": "Commencer une conversation <span aria-hidden=\"true\">→</span>",
    ".stats-card span": ["Domaines de spécialité", "Lieu du cabinet", "Rue d’Alger"],
    ".care-section .eyebrow": "02 — Domaines de soins",
    ".care-section h2": "Une expertise avec<br /><em>une attention humaine.</em>",
    ".heading-aside": "Une approche calme et collaborative des problèmes chirurgicaux courants et des questions qui les accompagnent.",
    ".care-card h3": ["Chirurgie de<br />l’obésité et du diabète", "Foie, voies biliaires,<br />estomac, pancréas<br />et intestins", "Chirurgie cœlioscopique<br />et chirurgie des cancers"],
    ".care-card p": ["Une prise en charge spécialisée des options chirurgicales liées à l’obésité et au diabète.", "Chirurgie digestive du foie et des voies biliaires, de l’estomac, du pancréas et des intestins, ainsi que proctologie et hernies.", "Chirurgie cœlioscopique mini-invasive et prise en charge chirurgicale des cancers."],
    ".care-card a": ["Découvrir <span aria-hidden=\"true\">↗</span>", "Découvrir <span aria-hidden=\"true\">↗</span>", "Découvrir <span aria-hidden=\"true\">↗</span>"],
    ".experience-section .eyebrow": "03 — Parcours et expérience",
    ".experience-section h2": "Une expérience<br /><em>sur laquelle compter.</em>",
    ".timeline-item span": ["Spécialité", "Expertise", "Expérience", "Parcours universitaire", "Lieu d’exercice"],
    ".timeline-item strong": ["Chirurgie générale et digestive", "Chirurgie de l’obésité et du diabète", "Ancien Attaché des Hôpitaux de France", "Ancien Assistant Hospitalo-Universitaire", "Bizerte Médicale"],
    ".timeline-item small": ["Pratique spécialisée", "Chirurgie digestive et métabolique", "Expérience hospitalière en France", "Faculté de Médecine", "Au-dessus de la BIAT, Bizerte"],
    ".expect-section .eyebrow": "04 — Votre parcours de soins",
    ".expect-section h2": "Préparés à chaque<br /><em>étape, ensemble.</em>",
    ".expect-grid h3": ["Consultation", "Préparation", "Suivi"],
    ".expect-grid p": ["Échangez avec votre chirurgien sur vos symptômes, votre diagnostic, vos objectifs et les options de traitement.", "Recevez des instructions claires et des conseils pratiques avant votre intervention.", "Poursuivez votre rétablissement grâce à un suivi planifié et un accompagnement après l’intervention."],
    ".appointment-copy .eyebrow": "Une prochaine étape claire",
    ".appointment-copy h2": "Commençons par<br /><em>une conversation.</em>",
    ".appointment-copy > p:not(.eyebrow):not(.privacy-note)": "Partagez vos coordonnées et notre équipe vous contactera pour organiser ou confirmer votre rendez-vous.",
    ".privacy-note": "Vos informations servent uniquement à répondre à cette demande. Merci de ne pas inclure de détails médicaux dans ce formulaire.",
    ".form-field label": ["Nom complet", "Numéro de téléphone"],
    "#full-name": { placeholder: "Votre nom" },
    "#phone": { placeholder: "+216 00 000 000" },
    ".consent span": "J’accepte d’être contacté(e) par le cabinet au sujet de ma demande de rendez-vous.",
    ".appointment-form .button": "Prendre rendez-vous <span aria-hidden=\"true\">↗</span>",
    ".contact-main .eyebrow": "05 — Visiter le cabinet",
    ".contact-main h2": "À vos côtés<br /><em>quand vous en avez besoin.</em>",
    ".contact-details span": ["Adresse", "Téléphone", "Rendez-vous"],
    ".contact-details strong": ["Bizerte Médicale (au-dessus de la BIAT)<br />21 rue d’Alger, 7000 Bizerte", "72 420 022<br />Gsm : 97 246 974", "Sur rendez-vous"],
    ".map-card span": "Ouvrir dans Google Maps ↗",
    ".site-footer p:nth-of-type(1)": "Chirurgie générale et digestive · Bizerte Médicale",
    ".emergency": "<strong>Pas pour les urgences.</strong> Pour une urgence, contactez les services d’urgence locaux."
  },
  en: {
    ".skip-link": "Skip to content",
    ".brand small": "General Surgery & Digestive Surgery",
    ".menu-toggle": "Menu",
    ".site-nav a": ["About", "Areas of care", "Experience", "Contact", "Request an Appointment <span aria-hidden=\"true\">↗</span>"],
    ".hero .eyebrow": "General surgery & digestive surgery · Bizerte Médicale",
    ".hero h1": "Expert surgical care.<br /><em>Clear guidance</em> at every step.",
    ".hero-intro": "Dr Ben Taher Chafik is a specialist in general and digestive surgery, providing thoughtful care and clear guidance at every step.",
    ".hero .button": "Request an Appointment <span aria-hidden=\"true\">↗</span>",
    ".hero-note": "<span class=\"pulse-dot\"></span> Now welcoming new patients <span class=\"note-rule\"></span> Bizerte",
    ".scroll-cue": "<span></span> Scroll to explore",
    ".intro-strip p": "“Good care starts with being heard, understood, and given a clear path forward.”",
    ".intro-strip span": "— Dr Ben Taher Chafik",
    ".about-section .eyebrow": "01 — A considered approach",
    ".about-section h2": "Confident care,<br /><em>grounded in clarity.</em>",
    ".about-copy .lead": "Surgery is a significant decision. My role is to make each part of that decision feel informed, unhurried, and personal.",
    ".about-copy p:nth-of-type(2)": "Specialist in general and digestive surgery, including obesity and diabetes surgery, liver and biliary surgery, stomach, pancreas and intestinal surgery, proctology, hernia surgery, coelioscopic surgery, and cancer surgery.",
    ".about-copy p:nth-of-type(3)": "Former Attaché of Hospitals of France and former University Hospital Assistant at the Faculty of Medicine.",
    "#doctor-portrait": { alt: "Portrait of Dr Ben Taher Chafik, specialist in general and digestive surgery" },
    ".doctor-caption strong": "Dr Ben Taher Chafik",
    ".doctor-caption span": "General Surgery & Digestive Surgery",
    ".text-link": "Start a conversation <span aria-hidden=\"true\">→</span>",
    ".stats-card span": ["Areas of specialty", "Clinic location", "Rue d’Alger"],
    ".care-section .eyebrow": "02 — Areas of care",
    ".care-section h2": "Expertise with<br /><em>a human focus.</em>",
    ".heading-aside": "A calm, collaborative approach to common surgical concerns and the questions that come with them.",
    ".care-card h3": ["Surgery of<br />Obesity & Diabetes", "Liver, Biliary, Stomach,<br />Pancreas & Intestines", "Coelio Surgery<br />& Cancer Surgery"],
    ".care-card p": ["Specialist care for surgical treatment options related to obesity and diabetes.", "Digestive surgery covering the liver-biliary system, stomach, pancreas, and intestines, as well as proctology and hernias.", "Minimally invasive coelio surgery and surgical care for cancers."],
    ".care-card a": ["Explore <span aria-hidden=\"true\">↗</span>", "Explore <span aria-hidden=\"true\">↗</span>", "Explore <span aria-hidden=\"true\">↗</span>"],
    ".experience-section .eyebrow": "03 — Career & achievements",
    ".experience-section h2": "A foundation you<br /><em>can trust.</em>",
    ".timeline-item span": ["Specialty", "Expertise", "Experience", "Academic role", "Practice location"],
    ".timeline-item strong": ["General Surgery & Digestive Surgery", "Surgery of Obesity & Diabetes", "Former Attaché of Hospitals of France", "Former University Hospital Assistant", "Bizerte Médicale"],
    ".timeline-item small": ["Specialist practice", "Digestive and metabolic surgery", "Hospital experience in France", "Faculty of Medicine", "Above BIAT, Bizerte"],
    ".expect-section .eyebrow": "04 — What to expect",
    ".expect-section h2": "Prepared for each<br /><em>step together.</em>",
    ".expect-grid h3": ["Consultation", "Preparation", "Follow-up"],
    ".expect-grid p": ["Meet with your surgeon to discuss your symptoms, diagnosis, goals, and treatment options.", "Receive clear instructions and practical guidance before your procedure.", "Continue your recovery with planned follow-up and support after surgery."],
    ".appointment-copy .eyebrow": "A clear next step",
    ".appointment-copy h2": "Let’s start with<br /><em>a conversation.</em>",
    ".appointment-copy > p:not(.eyebrow):not(.privacy-note)": "Share your details and our clinic team will contact you to arrange or confirm an appointment.",
    ".privacy-note": "Your information is used only to respond to this request. Please do not include medical details in this form.",
    ".form-field label": ["Full name", "Phone number"],
    "#full-name": { placeholder: "Your name" },
    "#phone": { placeholder: "+216 00 000 000" },
    ".consent span": "I agree to be contacted by the clinic about my appointment request.",
    ".appointment-form .button": "Request an Appointment <span aria-hidden=\"true\">↗</span>",
    ".contact-main .eyebrow": "05 — Visit the clinic",
    ".contact-main h2": "Here when you<br /><em>need us.</em>",
    ".contact-details span": ["Address", "Phone", "Appointments"],
    ".contact-details strong": ["Bizerte Médicale (above BIAT)<br />21 rue d’Alger, 7000 Bizerte", "72 420 022<br />Gsm: 97 246 974", "By appointment"],
    ".map-card span": "Open in Google Maps ↗",
    ".site-footer p:nth-of-type(1)": "General Surgery & Digestive Surgery · Bizerte Médicale",
    ".emergency": "<strong>Not for emergencies.</strong> For urgent care, contact local emergency services."
  },
  ar: {
    ".skip-link": "الانتقال إلى المحتوى",
    ".brand small": "الجراحة العامة وجراحة الجهاز الهضمي",
    ".menu-toggle": "القائمة",
    ".site-nav a": ["عن الطبيب", "مجالات الرعاية", "الخبرة", "اتصل بنا", "حجز موعد <span aria-hidden=\"true\">↗</span>"],
    ".hero .eyebrow": "الجراحة العامة وجراحة الجهاز الهضمي · بيزرتي ميديكال",
    ".hero h1": "رعاية جراحية متخصصة.<br /><em>توجيه واضح</em> في كل خطوة.",
    ".hero-intro": "الدكتور بن طاهر شفيق اختصاصي في الجراحة العامة وجراحة الجهاز الهضمي، ويقدم رعاية إنسانية وتوجيهًا واضحًا في كل مرحلة.",
    ".hero .button": "حجز موعد <span aria-hidden=\"true\">↗</span>",
    ".hero-note": "<span class=\"pulse-dot\"></span> نستقبل مرضى جدد <span class=\"note-rule\"></span> بنزرت",
    ".scroll-cue": "<span></span> اكتشف المزيد",
    ".intro-strip p": "« تبدأ الرعاية الجيدة بالاستماع والفهم وتقديم طريق واضح إلى الأمام. »",
    ".intro-strip span": "— الدكتور بن طاهر شفيق",
    ".about-section .eyebrow": "01 — نهج مدروس",
    ".about-section h2": "رعاية واثقة،<br /><em>مرتكزة على الوضوح.</em>",
    ".about-copy .lead": "الجراحة قرار مهم. دوري هو أن أجعل كل خطوة مفهومة وهادئة وشخصية.",
    ".about-copy p:nth-of-type(2)": "اختصاصي في الجراحة العامة وجراحة الجهاز الهضمي، بما في ذلك جراحة السمنة والسكري والكبد والطرق الصفراوية والمعدة والبنكرياس والأمعاء والقولون والمستقيم والفتوق والجراحة بالمنظار وجراحة الأورام.",
    ".about-copy p:nth-of-type(3)": "طبيب سابق في مستشفيات فرنسا ومساعد جامعي استشفائي سابق بكلية الطب.",
    "#doctor-portrait": { alt: "صورة الدكتور بن طاهر شفيق، اختصاصي في الجراحة العامة وجراحة الجهاز الهضمي" },
    ".doctor-caption strong": "الدكتور بن طاهر شفيق",
    ".doctor-caption span": "اختصاصي في الجراحة العامة وجراحة الجهاز الهضمي",
    ".text-link": "ابدأ محادثة <span aria-hidden=\"true\">→</span>",
    ".stats-card span": ["مجالات الاختصاص", "موقع العيادة", "نهج الجزائر"],
    ".care-section .eyebrow": "02 — مجالات الرعاية",
    ".care-section h2": "خبرة مع<br /><em>اهتمام إنساني.</em>",
    ".heading-aside": "نهج هادئ وتعاوني للتعامل مع الحالات الجراحية الشائعة والأسئلة المرتبطة بها.",
    ".care-card h3": ["جراحة<br />السمنة والسكري", "الكبد والطرق الصفراوية<br />والمعدة والبنكرياس<br />والأمعاء", "الجراحة بالمنظار<br />وجراحة الأورام"],
    ".care-card p": ["رعاية متخصصة للخيارات الجراحية المتعلقة بالسمنة والسكري.", "جراحة الجهاز الهضمي للكبد والطرق الصفراوية والمعدة والبنكرياس والأمعاء، إضافة إلى جراحة القولون والمستقيم والفتوق.", "جراحة بالمنظار ورعاية جراحية متخصصة للأورام."],
    ".care-card a": ["اكتشف <span aria-hidden=\"true\">↗</span>", "اكتشف <span aria-hidden=\"true\">↗</span>", "اكتشف <span aria-hidden=\"true\">↗</span>"],
    ".experience-section .eyebrow": "03 — المسار والخبرة",
    ".experience-section h2": "أساس من الخبرة<br /><em>يمكنك الوثوق به.</em>",
    ".timeline-item span": ["الاختصاص", "الخبرة", "المسار المهني", "الدور الأكاديمي", "موقع العيادة"],
    ".timeline-item strong": ["الجراحة العامة وجراحة الجهاز الهضمي", "جراحة السمنة والسكري", "طبيب سابق في مستشفيات فرنسا", "مساعد جامعي استشفائي سابق", "بيزرتي ميديكال"],
    ".timeline-item small": ["ممارسة متخصصة", "جراحة الجهاز الهضمي والتمثيل الغذائي", "خبرة استشفائية في فرنسا", "كلية الطب", "فوق بنك BIAT، بنزرت"],
    ".expect-section .eyebrow": "04 — ما يمكن توقعه",
    ".expect-section h2": "نستعد لكل<br /><em>خطوة معًا.</em>",
    ".expect-grid h3": ["الاستشارة", "التحضير", "المتابعة"],
    ".expect-grid p": ["ناقش مع الجراح الأعراض والتشخيص والأهداف وخيارات العلاج.", "احصل على تعليمات واضحة وإرشادات عملية قبل العملية.", "واصل التعافي من خلال المتابعة والدعم بعد العملية."],
    ".appointment-copy .eyebrow": "خطوة واضحة إلى الأمام",
    ".appointment-copy h2": "لنبدأ<br /><em>بمحادثة.</em>",
    ".appointment-copy > p:not(.eyebrow):not(.privacy-note)": "شارك بياناتك وسيتصل بك فريق العيادة لترتيب موعدك أو تأكيده.",
    ".privacy-note": "تُستخدم معلوماتك فقط للرد على هذا الطلب. يرجى عدم إدخال تفاصيل طبية في هذا النموذج.",
    ".form-field label": ["الاسم الكامل", "رقم الهاتف"],
    "#full-name": { placeholder: "اسمك" },
    "#phone": { placeholder: "+216 00 000 000" },
    ".consent span": "أوافق على أن تتصل بي العيادة بخصوص طلب الموعد.",
    ".appointment-form .button": "حجز موعد <span aria-hidden=\"true\">↗</span>",
    ".contact-main .eyebrow": "05 — زيارة العيادة",
    ".contact-main h2": "نحن هنا<br /><em>عندما تحتاجنا.</em>",
    ".contact-details span": ["العنوان", "الهاتف", "المواعيد"],
    ".contact-details strong": ["بيزرتي ميديكال (فوق بنك BIAT)<br />21 شارع الجزائر، 7000 بنزرت", "72 420 022<br />الهاتف الجوال: 97 246 974", "بموعد مسبق"],
    ".map-card span": "فتح الموقع في خرائط Google ↗",
    ".site-footer p:nth-of-type(1)": "الجراحة العامة وجراحة الجهاز الهضمي · بيزرتي ميديكال",
    ".emergency": "<strong>ليس لحالات الطوارئ.</strong> في الحالات العاجلة، اتصل بخدمات الطوارئ المحلية."
  }
};

let currentLanguage = "fr";

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : "fr";
  const dictionary = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
  languageOptions.forEach((option) => {
    const isActive = option.dataset.language === currentLanguage;
    option.classList.toggle("is-active", isActive);
    option.setAttribute("aria-pressed", String(isActive));
  });
  Object.entries(dictionary).forEach(([selector, value]) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
      const content = Array.isArray(value) ? value[index] ?? value[0] : value;
      if (content && typeof content === "object") {
        Object.entries(content).forEach(([attribute, attributeValue]) => element.setAttribute(attribute, attributeValue));
      } else {
        element.innerHTML = content;
      }
    });
  });
  document.title = currentLanguage === "fr" ? "Dr Ben Taher Chafik | Chirurgie générale" : currentLanguage === "ar" ? "الدكتور بن طاهر شفيق | الجراحة العامة" : "Dr Ben Taher Chafik | General Surgery";
  document.querySelector(".language-switcher")?.setAttribute("aria-label", currentLanguage === "fr" ? "Choisir la langue" : currentLanguage === "ar" ? "اختر اللغة" : "Choose language");
  window.localStorage.setItem("surgeon-booking-language", currentLanguage);
};

languageOptions.forEach((option) => {
  option.addEventListener("click", () => applyLanguage(option.dataset.language));
});

const savedLanguage = window.localStorage.getItem("surgeon-booking-language");
applyLanguage(savedLanguage && translations[savedLanguage] ? savedLanguage : "fr");

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  siteNav.classList.toggle("is-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.fullName;
  const phone = form.elements.phone;
  const consent = form.elements.consent;
  let valid = true;

  const setError = (input, message) => {
    const error = input.closest(".form-field")?.querySelector(".field-error");
    if (error) error.textContent = message;
    input.setAttribute("aria-invalid", "true");
    valid = false;
  };

  form.querySelectorAll(".field-error").forEach((error) => (error.textContent = ""));
  form.querySelectorAll("input").forEach((input) => input.removeAttribute("aria-invalid"));
  status.textContent = "";

  const messages = {
    fr: { name: "Veuillez saisir votre nom complet.", phone: "Veuillez saisir votre numéro de téléphone.", invalidPhone: "Veuillez vérifier votre numéro de téléphone.", consent: "Veuillez accepter d’être contacté(e) avant l’envoi.", success: "Merci. Notre cabinet vous contactera prochainement pour organiser ou confirmer votre rendez-vous." },
    en: { name: "Please enter your full name.", phone: "Please enter your phone number.", invalidPhone: "Please check your phone number.", consent: "Please agree to be contacted before submitting.", success: "Thank you. Our clinic will contact you shortly to arrange or confirm your appointment." },
    ar: { name: "يرجى إدخال اسمك الكامل.", phone: "يرجى إدخال رقم هاتفك.", invalidPhone: "يرجى التحقق من رقم الهاتف.", consent: "يرجى الموافقة على الاتصال بك قبل الإرسال.", success: "شكرًا لك. ستتصل بك العيادة قريبًا لترتيب موعدك أو تأكيده." }
  }[currentLanguage];

  if (!name.value.trim()) setError(name, messages.name);
  if (!phone.value.trim()) setError(phone, messages.phone);
  else if (!/^[\d\s()+-]{7,}$/.test(phone.value.trim())) setError(phone, messages.invalidPhone);
  if (!consent.checked) {
    status.textContent = messages.consent;
    valid = false;
  }

  if (!valid) return;
  form.reset();
  status.textContent = messages.success;
});

document.querySelector("#year").textContent = new Date().getFullYear();
