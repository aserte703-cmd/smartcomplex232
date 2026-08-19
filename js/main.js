document.getElementById('year').textContent = new Date().getFullYear();

  const header = document.getElementById('siteHeader');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll); onScroll();

  const dict = {
    ru: {
      nav:{about:"О проекте", presentation:"Презентация", complexes:"Комплексы", house:"Дизайн дома", gallery:"Фото", contacts:"Контакты", cta:"Консультация"},
      house:{eyebrow:"Smart Complex", title:"Дизайн дома",
        desc:"Двухэтажный современный дом с панорамным остеклением, тёплой фактурой дерева и приватным двором. Именно по этому проекту строится каждый из трёх комплексов Smart Complex.",
        caption:"Современный дом",
        spec1l:"Площадь", spec1v:"250 м²", spec2l:"Этажей", spec2v:"2", spec3l:"Спальни", spec3v:"3", spec4l:"Парковка", spec4v:"2 авто"},
      plans:{eyebrow:"Планировки", title:"Каждый квадратный метр продуман заранее",
        desc:"Свободная планировка первого этажа объединяет кухню, гостиную и общую комнату в единое пространство, а второй этаж полностью приватный — спальни, детские и гардеробная.",
        f1label:"1 этаж", f2label:"2 этаж",
        cta:"Скачать планировку PDF",
        floors:[
          {rooms:[{name:"Кухня",value:"18 м²"},{name:"Гостиная",value:"27 м²"},{name:"Общая комната",value:"12 м²"},{name:"Санузел",value:"5 м²"}]},
          {rooms:[{name:"Спальня",value:"20 м²"},{name:"Детская",value:"16 м²"},{name:"Детская",value:"15 м²"},{name:"Гардероб",value:"6 м²"}]}
        ]},
      hero:{eyebrow:"SMART COMPLEX • UZBEKISTAN",
        title:"Дорога, которая ведёт\nк <em>трём комплексам</em>",
        desc:"Smart Complex объединяет три жилых комплекса — Вобкент, Шейхонча и Сафкарда. Разные локации, один стандарт архитектуры, качества и сервиса.",
        cta1:"Смотреть комплексы", cta2:"Получить консультацию",
        stat1:"Комплекса", stat2:"Эко-среда", stat3:"Охрана", scroll:"Scroll"},
      about:{eyebrow:"Smart Complex", title:"Один застройщик —\nтри адреса, где вам\nбудет спокойно",
        desc:"Мы строим так, чтобы, переезжая из одного нашего комплекса в другой, человек не терял привычный уровень комфорта: те же материалы, та же служба эксплуатации, та же забота о дворе и соседях.",
        s1:"жилых комплекса", s2:"домов в портфеле", s3:"охрана территорий", s4:"солнечные панели",
        p1t:"Единые стандарты строительства", p1d:"Одни и те же подрядчики, материалы и технадзор во всех трёх комплексах.",
        p2t:"Прозрачные сроки и документы", p2d:"Договор долевого участия и регулярные отчёты о ходе строительства.",
        p3t:"Сервис после заселения", p3d:"Единая управляющая компания ведёт все три комплекса после сдачи."},
      pres:{eyebrow:"Полная информация", title:"Презентация\nпроекта Smart Complex",
        desc:"Подробнее о концепции, генплане, инфраструктуре и планировках всех трёх комплексов — в единой презентации проекта. Изучите материалы в удобном темпе или сохраните файл себе.",
        cta:"Смотреть презентацию", hint:"Откроется в новой вкладке"},
      cx:{eyebrow:"Выберите комплекс", title:"Вобкент, Шейхонча,\nСафкарда",
        desc:"Коротко о каждом — локация, статус и что внутри. Полные страницы с планировками и генпланом откроются позже.",
        homes:"домов", area:"площадь", handover:"сдача", more:"Подробнее о комплексе",
        sh:{name:"ЖК «Шейхонча»", loc:"📍 Шайхонча, Бухарская область", desc:"Флагманский эко-комплекс: закрытая территория, солнечные панели на крышах, детская площадка и футбольное поле внутри квартала."},
        vb:{name:"ЖК «Вобкент»", loc:"📍 Вобкентский район, Бухарская область", desc:"Малоэтажный квартал у трассы М37 — просторные участки, ветрогенераторы и собственная зелёная буферная зона по периметру."},
        sf:{name:"ЖК «Сафкарда»", loc:"📍 Сафкарда, Бухарская область", desc:"Комплекс премиум-класса: архитектура с панорамным остеклением, приватные дворы и озеленённая набережная вдоль пруда."}},
      gal:{eyebrow:"Из наших комплексов", title:"Как это выглядит вживую",
        note:"Это часть отснятого материала — фотографии и рендеры каждого комплекса будут дополняться по мере готовности."},
      cta:{title:"Не уверены, какой комплекс подходит вам? Поможем сравнить и выбрать за один звонок.", btn:"Получить консультацию"},
      footer:{addr:"Бухарская область, Узбекистан · +998 99 999-99-99 · info@smartcomplex.uz", rights:"Все права защищены."}
    },
    uz: {
      nav:{about:"Loyiha haqida", presentation:"Taqdimot", complexes:"Majmualar", house:"Uy dizayni", gallery:"Foto", contacts:"Aloqa", cta:"Konsultatsiya"},
      house:{eyebrow:"Smart Complex", title:"Uy dizayni",
        desc:"Panoramik oynalari, issiq yog‘och fakturasi va maxfiy hovlisi bo‘lgan zamonaviy ikki qavatli uy. Aynan shu loyiha asosida Smart Complex uchala majmuasi quriladi.",
        caption:"Zamonaviy uy",
        spec1l:"Maydon", spec1v:"250 m²", spec2l:"Qavatlar", spec2v:"2", spec3l:"Yotoq xonalar", spec3v:"3", spec4l:"Parkovka", spec4v:"2 avto"},
      plans:{eyebrow:"Rejalar", title:"Har bir kvadrat metr oldindan o‘ylangan",
        desc:"Birinchi qavatning erkin rejasi oshxona, mehmonxona va umumiy xonani yagona makonga birlashtiradi, ikkinchi qavat esa to‘liq maxfiy — yotoq xonalar, bolalar xonalari va garderob.",
        f1label:"1-qavat", f2label:"2-qavat",
        cta:"Reja PDF-ni yuklab olish",
        floors:[
          {rooms:[{name:"Oshxona",value:"18 m²"},{name:"Mehmonxona",value:"27 m²"},{name:"Umumiy xona",value:"12 m²"},{name:"Hammom",value:"5 m²"}]},
          {rooms:[{name:"Yotoq xona",value:"20 m²"},{name:"Bolalar xonasi",value:"16 m²"},{name:"Bolalar xonasi",value:"15 m²"},{name:"Garderob",value:"6 m²"}]}
        ]},
      hero:{eyebrow:"SMART COMPLEX • O‘ZBEKISTON",
        title:"Uchta majmuaga\nolib boradigan <em>yo‘l</em>",
        desc:"Smart Complex uchta turar-joy majmuasini birlashtiradi — Vobkent, Shayxoncha va Safkarda. Turli joylashuv, bitta arxitektura, sifat va servis standarti.",
        cta1:"Majmualarni ko‘rish", cta2:"Konsultatsiya olish",
        stat1:"Majmua", stat2:"Eko-muhit", stat3:"Xavfsizlik", scroll:"Pastga"},
      about:{eyebrow:"Smart Complex", title:"Bitta quruvchi —\ntinch bo‘ladigan\nuchta manzil",
        desc:"Biz shunday quramizki, bizning bir majmuadan ikkinchisiga ko‘chib o‘tganda odam odatdagi qulaylik darajasini yo‘qotmaydi: bir xil materiallar, bir xil ekspluatatsiya xizmati, hovli va qo‘shnilarga bir xil g‘amxo‘rlik.",
        s1:"turar-joy majmuasi", s2:"portfeldagi uylar", s3:"hudud qo‘riqlanadi", s4:"quyosh panellari",
        p1t:"Qurilishning yagona standartlari", p1d:"Uchala majmuada ham bir xil pudratchilar, materiallar va texnazorat.",
        p2t:"Shaffof muddat va hujjatlar", p2d:"Ulushli ishtirok shartnomasi va qurilish borishi haqida muntazam hisobotlar.",
        p3t:"Ko‘chib o‘tgandan keyingi xizmat", p3d:"Yagona boshqaruv kompaniyasi uchala majmuani ham topshirilgandan keyin boshqaradi."},
      pres:{eyebrow:"To‘liq ma’lumot", title:"Smart Complex\nloyihasi taqdimoti",
        desc:"Konsepsiya, bosh reja, infratuzilma va uchala majmuaning rejalari haqida — yagona loyiha taqdimotida. Materiallarni o‘zingizga qulay tarzda ko‘ring yoki faylni saqlab qo‘ying.",
        cta:"Taqdimotni ko‘rish", hint:"Yangi oynada ochiladi"},
      cx:{eyebrow:"Majmuani tanlang", title:"Vobkent, Shayxoncha,\nSafkarda",
        desc:"Har biri haqida qisqacha — joylashuvi, holati va ichida nima bor. To‘liq sahifalar rejalar va bosh reja bilan keyinroq ochiladi.",
        homes:"uy", area:"maydon", handover:"topshirish", more:"Majmua haqida batafsil",
        sh:{name:"«Shayxoncha» MJ", loc:"📍 Shayxoncha, Buxoro viloyati", desc:"Bayroqdor eko-majmua: yopiq hudud, tomlarda quyosh panellari, bolalar maydonchasi va futbol maydoni."},
        vb:{name:"«Vobkent» MJ", loc:"📍 Vobkent tumani, Buxoro viloyati", desc:"M37 trassasi yaqinidagi pastqavat kvartal — keng uchastkalar, shamol generatorlari va perimetr bo‘ylab yashil bufer zona."},
        sf:{name:"«Safkarda» MJ", loc:"📍 Safkarda, Buxoro viloyati", desc:"Premium klass majmua: panoramali oynalar, maxfiy hovlilar va ko‘lcha bo‘ylab ko‘kalamzorlashtirilgan sohil."}},
      gal:{eyebrow:"Bizning majmualardan", title:"Bu qanday ko‘rinishda",
        note:"Bu suratga olingan materialning bir qismi — har bir majmuaning foto va renderlari tayyor bo‘lgani sayin qo‘shiladi."},
      cta:{title:"Qaysi majmua sizga mos ekanligiga ishonchingiz komil emasmi? Bir qo‘ng‘iroqda solishtirib, tanlab beramiz.", btn:"Konsultatsiya olish"},
      footer:{addr:"Buxoro viloyati, O‘zbekiston · +998 99 999-99-99 · info@smartcomplex.uz", rights:"Barcha huquqlar himoyalangan."}
    },
    en: {
      nav:{about:"About", presentation:"Presentation", complexes:"Complexes", house:"House Design", gallery:"Gallery", contacts:"Contact", cta:"Consultation"},
      house:{eyebrow:"Smart Complex", title:"House Design",
        desc:"A modern two-storey house with panoramic glazing, warm wood texture and a private yard. Each of the three Smart Complex sites is built to this exact design.",
        caption:"Modern house",
        spec1l:"Area", spec1v:"250 m²", spec2l:"Floors", spec2v:"2", spec3l:"Bedrooms", spec3v:"3", spec4l:"Parking", spec4v:"2 cars"},
      plans:{eyebrow:"Floor Plans", title:"Every square metre planned in advance",
        desc:"The open-plan ground floor unites the kitchen, living room and family room into a single space, while the second floor is fully private — bedrooms, kids' rooms and a walk-in closet.",
        f1label:"1st floor", f2label:"2nd floor",
        cta:"Download floor plan PDF",
        floors:[
          {rooms:[{name:"Kitchen",value:"18 m²"},{name:"Living room",value:"27 m²"},{name:"Family room",value:"12 m²"},{name:"Bathroom",value:"5 m²"}]},
          {rooms:[{name:"Bedroom",value:"20 m²"},{name:"Kids' room",value:"16 m²"},{name:"Kids' room",value:"15 m²"},{name:"Walk-in closet",value:"6 m²"}]}
        ]},
      hero:{eyebrow:"SMART COMPLEX • UZBEKISTAN",
        title:"The road that leads\nto <em>three complexes</em>",
        desc:"Smart Complex brings together three residential complexes — Vobkent, Sheykhoncha and Safkarda. Different locations, one standard of architecture, quality and service.",
        cta1:"View complexes", cta2:"Get a consultation",
        stat1:"Complexes", stat2:"Eco environment", stat3:"Security", scroll:"Scroll"},
      about:{eyebrow:"Smart Complex", title:"One developer —\nthree addresses\nwhere you'll feel at ease",
        desc:"We build so that moving from one of our complexes to another, people never lose their usual level of comfort: the same materials, the same maintenance service, the same care for the yard and neighbours.",
        s1:"residential complexes", s2:"homes in the portfolio", s3:"territory security", s4:"solar panels",
        p1t:"Unified construction standards", p1d:"The same contractors, materials and technical supervision across all three complexes.",
        p2t:"Transparent timelines and documents", p2d:"A share-participation agreement and regular construction-progress reports.",
        p3t:"Service after move-in", p3d:"One management company runs all three complexes once they are handed over."},
      pres:{eyebrow:"Full information", title:"Smart Complex\nproject presentation",
        desc:"Learn more about the concept, master plan, infrastructure and floor plans of all three complexes in a single project presentation. Explore it at your own pace or save the file for later.",
        cta:"View presentation", hint:"Opens in a new tab"},
      cx:{eyebrow:"Choose a complex", title:"Vobkent, Sheykhoncha,\nSafkarda",
        desc:"A short overview of each — location, status and what's inside. Full pages with floor plans and masterplan will open later.",
        homes:"houses", area:"area", handover:"handover", more:"More about this complex",
        sh:{name:"Sheykhoncha Complex", loc:"📍 Sheykhoncha, Bukhara region", desc:"The flagship eco-complex: gated territory, rooftop solar panels, a playground and a football field within the block."},
        vb:{name:"Vobkent Complex", loc:"📍 Vobkent district, Bukhara region", desc:"A low-rise block by the M37 highway — spacious plots, wind turbines and its own green buffer zone around the perimeter."},
        sf:{name:"Safkarda Complex", loc:"📍 Safkarda, Bukhara region", desc:"A premium-class complex: panoramic glazing architecture, private yards and a landscaped promenade along the pond."}},
      gal:{eyebrow:"From our complexes", title:"What it actually looks like",
        note:"This is a part of the material shot so far — photos and renders for each complex will be added as they become ready."},
      cta:{title:"Not sure which complex suits you? We'll help compare and choose in a single call.", btn:"Get a consultation"},
      footer:{addr:"Bukhara region, Uzbekistan · +998 99 999-99-99 · info@smartcomplex.uz", rights:"All rights reserved."}
    }
  };

  function get(obj, path){ return path.split('.').reduce((o,k)=> (o && o[k] !== undefined) ? o[k] : null, obj); }

  function applyLang(lang){
    const d = dict[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const v = get(d, el.getAttribute('data-i18n'));
      if(v != null) el.innerHTML = v;
    });
    document.querySelectorAll('[data-i18n-lines]').forEach(el=>{
      const v = get(d, el.getAttribute('data-i18n-lines'));
      if(v != null) el.innerHTML = v.replace(/\n/g,'<br>');
    });
    document.querySelectorAll('#langsw button').forEach(b=>{
      b.classList.toggle('active', b.getAttribute('data-lang') === lang);
    });
    try{ localStorage.setItem('sc_lang', lang); }catch(e){}
  }

  document.getElementById('langsw').addEventListener('click', (e)=>{
    const btn = e.target.closest('button[data-lang]');
    if(!btn) return;
    applyLang(btn.getAttribute('data-lang'));
  });

  let initialLang = 'ru';
  try{ initialLang = localStorage.getItem('sc_lang') || 'ru'; }catch(e){}
  applyLang(initialLang);

  /* ===== HOUSE GALLERY SLIDER ===== */
  (function(){
    const slides = Array.from(document.querySelectorAll('#houseSlider .house-slide'));
    const thumbs = Array.from(document.querySelectorAll('#houseThumbs .house-thumb'));
    const countEl = document.getElementById('hsCount');
    const total = slides.length;
    let current = 0;

    function render(){
      slides.forEach((s,i)=> s.classList.toggle('active', i===current));
      thumbs.forEach((t,i)=> t.classList.toggle('active', i===current));
      countEl.textContent = (current+1) + ' / ' + total;
    }
    function go(delta){ current = (current + delta + total) % total; render(); }

    document.getElementById('hsPrev').addEventListener('click', ()=> go(-1));
    document.getElementById('hsNext').addEventListener('click', ()=> go(1));
    thumbs.forEach((t,i)=> t.addEventListener('click', ()=>{ current=i; render(); }));

    // lightbox
    const lightbox = document.getElementById('lightbox');
    const lbImg = document.getElementById('lbImg');
    const lbCount = document.getElementById('lbCount');
    function openLightbox(){
      lbImg.src = slides[current].querySelector('img').src;
      lbCount.textContent = (current+1) + ' / ' + total;
      lightbox.classList.add('open');
    }
    function closeLightbox(){ lightbox.classList.remove('open'); }
    document.getElementById('houseSlider').addEventListener('click', openLightbox);
    document.getElementById('lbClose').addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e)=>{ if(e.target === lightbox) closeLightbox(); });
    document.getElementById('lbPrev').addEventListener('click', ()=>{ go(-1); lbImg.src = slides[current].querySelector('img').src; lbCount.textContent = (current+1)+' / '+total; });
    document.getElementById('lbNext').addEventListener('click', ()=>{ go(1); lbImg.src = slides[current].querySelector('img').src; lbCount.textContent = (current+1)+' / '+total; });
    document.addEventListener('keydown', (e)=>{
      if(!lightbox.classList.contains('open')) return;
      if(e.key === 'Escape') closeLightbox();
      if(e.key === 'ArrowRight'){ go(1); lbImg.src = slides[current].querySelector('img').src; lbCount.textContent=(current+1)+' / '+total; }
      if(e.key === 'ArrowLeft'){ go(-1); lbImg.src = slides[current].querySelector('img').src; lbCount.textContent=(current+1)+' / '+total; }
    });

    render();
  })();

  /* ===== FLOOR PLAN TABS ===== */
  (function(){
    const tabs = Array.from(document.querySelectorAll('.floor-tab'));
    const rooms = Array.from(document.querySelectorAll('.room-list'));
    const plans = Array.from(document.querySelectorAll('.plan-img'));
    tabs.forEach(tab=>{
      tab.addEventListener('click', ()=>{
        const idx = tab.getAttribute('data-floor');
        tabs.forEach(t=> t.classList.toggle('active', t===tab));
        rooms.forEach(r=> r.classList.toggle('active', r.getAttribute('data-floor')===idx));
        plans.forEach(p=> p.classList.toggle('active', p.getAttribute('data-floor')===idx));
      });
    });
  })();