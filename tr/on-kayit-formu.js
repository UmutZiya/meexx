/* Form Section */
// Ülke bilgileri (şehirler, telefon kodu ve bayrak)
const countries = {
    turkiye: {
        cities: [
            { value: "01", text: "Adana" },
            { value: "02", text: "Adıyaman" },
            { value: "03", text: "Afyonkarahisar" },
            { value: "04", text: "Ağrı" },
            { value: "05", text: "Amasya" },
            { value: "06", text: "Ankara" },
            { value: "07", text: "Antalya" },
            { value: "08", text: "Artvin" },
            { value: "09", text: "Aydın" },
            { value: "10", text: "Balıkesir" },
            { value: "11", text: "Bilecik" },
            { value: "12", text: "Bingöl" },
            { value: "13", text: "Bitlis" },
            { value: "14", text: "Bolu" },
            { value: "15", text: "Burdur" },
            { value: "16", text: "Bursa" },
            { value: "17", text: "Çanakkale" },
            { value: "18", text: "Çankırı" },
            { value: "19", text: "Çorum" },
            { value: "20", text: "Denizli" },
            { value: "21", text: "Diyarbakır" },
            { value: "22", text: "Edirne" },
            { value: "23", text: "Elazığ" },
            { value: "24", text: "Erzincan" },
            { value: "25", text: "Erzurum" },
            { value: "26", text: "Eskişehir" },
            { value: "27", text: "Gaziantep" },
            { value: "28", text: "Giresun" },
            { value: "29", text: "Gümüşhane" },
            { value: "30", text: "Hakkari" },
            { value: "31", text: "Hatay" },
            { value: "32", text: "Isparta" },
            { value: "33", text: "Mersin" },
            { value: "34", text: "İstanbul" },
            { value: "35", text: "İzmir" },
            { value: "36", text: "Kars" },
            { value: "37", text: "Kastamonu" },
            { value: "38", text: "Kayseri" },
            { value: "39", text: "Kırklareli" },
            { value: "40", text: "Kırşehir" },
            { value: "41", text: "Kocaeli" },
            { value: "42", text: "Konya" },
            { value: "43", text: "Kütahya" },
            { value: "44", text: "Malatya" },
            { value: "45", text: "Manisa" },
            { value: "46", text: "Kahramanmaraş" },
            { value: "47", text: "Mardin" },
            { value: "48", text: "Muğla" },
            { value: "49", text: "Muş" },
            { value: "50", text: "Nevşehir" },
            { value: "51", text: "Niğde" },
            { value: "52", text: "Ordu" },
            { value: "53", text: "Rize" },
            { value: "54", text: "Sakarya" },
            { value: "55", text: "Samsun" },
            { value: "56", text: "Siirt" },
            { value: "57", text: "Sinop" },
            { value: "58", text: "Sivas" },
            { value: "59", text: "Tekirdağ" },
            { value: "60", text: "Tokat" },
            { value: "61", text: "Trabzon" },
            { value: "62", text: "Tunceli" },
            { value: "63", text: "Şanlıurfa" },
            { value: "64", text: "Uşak" },
            { value: "65", text: "Van" },
            { value: "66", text: "Yozgat" },
            { value: "67", text: "Zonguldak" },
            { value: "68", text: "Aksaray" },
            { value: "69", text: "Bayburt" },
            { value: "70", text: "Karaman" },
            { value: "71", text: "Kırıkkale" },
            { value: "72", text: "Batman" },
            { value: "73", text: "Şırnak" },
            { value: "74", text: "Bartın" },
            { value: "75", text: "Ardahan" },
            { value: "76", text: "Iğdır" },
            { value: "77", text: "Yalova" },
            { value: "78", text: "Karabük" },
            { value: "79", text: "Kilis" },
            { value: "80", text: "Osmaniye" },
            { value: "81", text: "Düzce" }
        ],
        phoneCode: "+90",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg",
        phonePlaceholder: "501 234 56 78"
    },
    almanya: {
        cities: [
            { value: "berlin", text: "Berlin" },
            { value: "hamburg", text: "Hamburg" },
            { value: "munih", text: "Münih" },
            { value: "koln", text: "Köln" },
            { value: "frankfurt", text: "Frankfurt" },
            { value: "stuttgart", text: "Stuttgart" },
            { value: "dusseldorf", text: "Düsseldorf" },
            { value: "dortmund", text: "Dortmund" },
            { value: "essen", text: "Essen" },
            { value: "leipzig", text: "Leipzig" },
            { value: "bremen", text: "Bremen" },
            { value: "dresden", text: "Dresden" },
            { value: "hannover", text: "Hannover" },
            { value: "nuremberg", text: "Nürnberg" },
            { value: "duisburg", text: "Duisburg" }
        ],
        phoneCode: "+49",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg",
        phonePlaceholder: "170 1234567"
    },
    fransa: {
        cities: [
            { value: "paris", text: "Paris" },
            { value: "marseille", text: "Marsilya" },
            { value: "lyon", text: "Lyon" },
            { value: "toulouse", text: "Toulouse" },
            { value: "nice", text: "Nice" },
            { value: "nantes", text: "Nantes" },
            { value: "strasbourg", text: "Strasbourg" },
            { value: "montpellier", text: "Montpellier" },
            { value: "bordeaux", text: "Bordeaux" },
            { value: "lille", text: "Lille" },
            { value: "rennes", text: "Rennes" },
            { value: "reims", text: "Reims" },
            { value: "toulon", text: "Toulon" },
            { value: "grenoble", text: "Grenoble" },
            { value: "dijon", text: "Dijon" }
        ],
        phoneCode: "+33",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
        phonePlaceholder: "6 12 34 56 78"
    },
    ingiltere: {
        cities: [
            { value: "london", text: "Londra" },
            { value: "manchester", text: "Manchester" },
            { value: "birmingham", text: "Birmingham" },
            { value: "leeds", text: "Leeds" },
            { value: "liverpool", text: "Liverpool" },
            { value: "newcastle", text: "Newcastle" },
            { value: "sheffield", text: "Sheffield" },
            { value: "bristol", text: "Bristol" },
            { value: "nottingham", text: "Nottingham" },
            { value: "southampton", text: "Southampton" },
            { value: "portsmouth", text: "Portsmouth" },
            { value: "oxford", text: "Oxford" },
            { value: "cambridge", text: "Cambridge" },
            { value: "york", text: "York" },
            { value: "brighton", text: "Brighton" }
        ],
        phoneCode: "+44",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
        phonePlaceholder: "7911 123456"
    },
    rusya: {
        cities: [
            { value: "moscow", text: "Moskova" },
            { value: "saint-petersburg", text: "St. Petersburg" },
            { value: "novosibirsk", text: "Novosibirsk" },
            { value: "yekaterinburg", text: "Yekaterinburg" },
            { value: "nizhny-novgorod", text: "Nizhny Novgorod" },
            { value: "kazan", text: "Kazan" },
            { value: "chelyabinsk", text: "Chelyabinsk" },
            { value: "omsk", text: "Omsk" },
            { value: "samara", text: "Samara" },
            { value: "rostov-on-don", text: "Rostov-on-Don" },
            { value: "ufa", text: "Ufa" },
            { value: "krasnoyarsk", text: "Krasnoyarsk" },
            { value: "voronezh", text: "Voronezh" },
            { value: "perm", text: "Perm" },
            { value: "volgograd", text: "Volgograd" },
            { value: "krasnodar", text: "Krasnodar" },
            { value: "saratov", text: "Saratov" },
            { value: "tyumen", text: "Tyumen" },
            { value: "tolyatti", text: "Tolyatti" },
            { value: "izhevsk", text: "Izhevsk" }
        ],
        phoneCode: "+7",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg",
        phonePlaceholder: "999 123-45-67"
    },
    italya: {
        cities: [
            { value: "roma", text: "Roma" },
            { value: "milano", text: "Milano" },
            { value: "napoli", text: "Napoli" },
            { value: "torino", text: "Torino" },
            { value: "palermo", text: "Palermo" },
            { value: "genova", text: "Genova" },
            { value: "bologna", text: "Bologna" },
            { value: "firenze", text: "Firenze" },
            { value: "bari", text: "Bari" },
            { value: "catania", text: "Catania" }
        ],
        phoneCode: "+39",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg",
        phonePlaceholder: "312 345 6789"
    },
    ispanya: {
        cities: [
            { value: "madrid", text: "Madrid" },
            { value: "barselona", text: "Barselona" },
            { value: "valensiya", text: "Valensiya" },
            { value: "sevilla", text: "Sevilla" },
            { value: "zaragoza", text: "Zaragoza" },
            { value: "malaga", text: "Malaga" },
            { value: "murcia", text: "Murcia" },
            { value: "palma", text: "Palma" },
            { value: "laspalmas", text: "Las Palmas" },
            { value: "bilbao", text: "Bilbao" }
        ],
        phoneCode: "+34",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
        phonePlaceholder: "612 34 56 78"
    },
    hollanda: {
        cities: [
            { value: "amsterdam", text: "Amsterdam" },
            { value: "rotterdam", text: "Rotterdam" },
            { value: "lahey", text: "Lahey" },
            { value: "utrecht", text: "Utrecht" },
            { value: "eindhoven", text: "Eindhoven" },
            { value: "tilburg", text: "Tilburg" },
            { value: "groningen", text: "Groningen" },
            { value: "almere", text: "Almere" },
            { value: "breda", text: "Breda" },
            { value: "nijmegen", text: "Nijmegen" }
        ],
        phoneCode: "+31",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg",
        phonePlaceholder: "6 12345678"
    },
    belcika: {
        cities: [
            { value: "bruksell", text: "Brüksel" },
            { value: "anvers", text: "Anvers" },
            { value: "gent", text: "Gent" },
            { value: "charleroi", text: "Charleroi" },
            { value: "liege", text: "Liège" },
            { value: "brugge", text: "Brugge" },
            { value: "namur", text: "Namur" },
            { value: "leuven", text: "Leuven" },
            { value: "mons", text: "Mons" },
            { value: "aalst", text: "Aalst" }
        ],
        phoneCode: "+32",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg",
        phonePlaceholder: "470 12 34 56"
    },
    isvicre: {
        cities: [
            { value: "zuri", text: "Zürih" },
            { value: "cenevre", text: "Cenevre" },
            { value: "basel", text: "Basel" },
            { value: "bern", text: "Bern" },
            { value: "lausanne", text: "Lausanne" },
            { value: "luzern", text: "Luzern" },
            { value: "stgallen", text: "St. Gallen" },
            { value: "lugano", text: "Lugano" },
            { value: "biel", text: "Biel/Bienne" },
            { value: "thun", text: "Thun" }
        ],
        phoneCode: "+41",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
        phonePlaceholder: "79 123 45 67"
    },
    avusturya: {
        cities: [
            { value: "vienna", text: "Viyana" },
            { value: "graz", text: "Graz" },
            { value: "linz", text: "Linz" },
            { value: "salzburg", text: "Salzburg" },
            { value: "innsbruck", text: "Innsbruck" },
            { value: "klagenfurt", text: "Klagenfurt" },
            { value: "villach", text: "Villach" },
            { value: "wels", text: "Wels" },
            { value: "stpoelten", text: "St. Pölten" },
            { value: "dornbirn", text: "Dornbirn" }
        ],
        phoneCode: "+43",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
        phonePlaceholder: "660 1234567"
    },
    polonya: {
        cities: [
            { value: "warszawa", text: "Varşova" },
            { value: "krakow", text: "Krakow" },
            { value: "lodz", text: "Lodz" },
            { value: "wroclaw", text: "Wroclaw" },
            { value: "poznan", text: "Poznan" },
            { value: "gdansk", text: "Gdansk" },
            { value: "szczecin", text: "Szczecin" },
            { value: "bydgoszcz", text: "Bydgoszcz" },
            { value: "lublin", text: "Lublin" },
            { value: "katowice", text: "Katowice" }
        ],
        phoneCode: "+48",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg",
        phonePlaceholder: "501 234 567"
    },
    cekya: {
        cities: [
            { value: "prag", text: "Prag" },
            { value: "brno", text: "Brno" },
            { value: "ostrava", text: "Ostrava" },
            { value: "plzen", text: "Plzen" },
            { value: "liberec", text: "Liberec" },
            { value: "olomouc", text: "Olomouc" },
            { value: "usti", text: "Usti nad Labem" },
            { value: "hradec", text: "Hradec Králové" },
            { value: "pardubice", text: "Pardubice" },
            { value: "zlin", text: "Zlín" }
        ],
        phoneCode: "+420",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg",
        phonePlaceholder: "601 123 456"
    },
    macaristan: {
        cities: [
            { value: "budapest", text: "Budapeşte" },
            { value: "debrecen", text: "Debrecen" },
            { value: "szeged", text: "Szeged" },
            { value: "miskolc", text: "Miskolc" },
            { value: "pecs", text: "Pécs" },
            { value: "gyor", text: "Győr" },
            { value: "nyiregyhaza", text: "Nyíregyháza" },
            { value: "kecskemet", text: "Kecskemét" },
            { value: "szombathely", text: "Szombathely" },
            { value: "szolnok", text: "Szolnok" }
        ],
        phoneCode: "+36",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg",
        phonePlaceholder: "20 123 4567"
    },
    bulgaristan: {
        cities: [
            { value: "sofya", text: "Sofya" },
            { value: "plovdiv", text: "Plovdiv" },
            { value: "varna", text: "Varna" },
            { value: "burgaz", text: "Burgaz" },
            { value: "ruse", text: "Ruse" },
            { value: "stara", text: "Stara Zagora" },
            { value: "pleven", text: "Pleven" },
            { value: "dobrich", text: "Dobrich" },
            { value: "shumen", text: "Shumen" },
            { value: "pernik", text: "Pernik" }
        ],
        phoneCode: "+359",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg",
        phonePlaceholder: "87 123 4567"
    },
    romanya: {
        cities: [
            { value: "bükreş", text: "Bükreş" },
            { value: "cluj", text: "Cluj-Napoca" },
            { value: "timisoara", text: "Timişoara" },
            { value: "iasi", text: "Iaşi" },
            { value: "constanta", text: "Constanţa" },
            { value: "craiova", text: "Craiova" },
            { value: "brasov", text: "Braşov" },
            { value: "galati", text: "Galaţi" },
            { value: "ploiesti", text: "Ploieşti" },
            { value: "oradea", text: "Oradea" }
        ],
        phoneCode: "+40",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
        phonePlaceholder: "721 234 567"
    },
    yunanistan: {
        cities: [
            { value: "atina", text: "Atina" },
            { value: "selanik", text: "Selanik" },
            { value: "patras", text: "Patras" },
            { value: "kandiye", text: "Kandiye" },
            { value: "larisa", text: "Larisa" },
            { value: "volos", text: "Volos" },
            { value: "yoannina", text: "Yoannina" },
            { value: "trikala", text: "Trikala" },
            { value: "serres", text: "Serres" },
            { value: "kavala", text: "Kavala" }
        ],
        phoneCode: "+30",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg",
        phonePlaceholder: "691 234 5678"
    },
    ukrayna: {
        cities: [
            { value: "kiev", text: "Kiev" },
            { value: "lviv", text: "Lviv" },
            { value: "odessa", text: "Odessa" },
            { value: "dnipro", text: "Dnipro" },
            { value: "kharkiv", text: "Kharkiv" },
            { value: "zaporizhia", text: "Zaporizhia" },
            { value: "kryvyi", text: "Kryvyi Rih" },
            { value: "mykolaiv", text: "Mykolaiv" },
            { value: "mariupol", text: "Mariupol" },
            { value: "vinnitsa", text: "Vinnitsa" }
        ],
        phoneCode: "+380",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg",
        phonePlaceholder: "50 123 4567"
    },
    abd: {
        cities: [
            { value: "newyork", text: "New York" },
            { value: "losangeles", text: "Los Angeles" },
            { value: "chicago", text: "Chicago" },
            { value: "houston", text: "Houston" },
            { value: "phoenix", text: "Phoenix" },
            { value: "philadelphia", text: "Philadelphia" },
            { value: "sanantonio", text: "San Antonio" },
            { value: "sandiego", text: "San Diego" },
            { value: "dallas", text: "Dallas" },
            { value: "sanjose", text: "San Jose" }
        ],
        phoneCode: "+1",
        flagUrl: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
        phonePlaceholder: "201 123 4567"
    },
    kanada: {
        cities: [
            { value: "toronto", text: "Toronto" },
            { value: "vancouver", text: "Vancouver" },
            { value: "montreal", text: "Montreal" },
            { value: "calgary", text: "Calgary" },
            { value: "edmonton", text: "Edmonton" },
            { value: "ottawa", text: "Ottawa" },
            { value: "winnipeg", text: "Winnipeg" },
            { value: "quebec", text: "Quebec City" },
            { value: "hamilton", text: "Hamilton" },
            { value: "kitchener", text: "Kitchener" }
        ],
        phoneCode: "+1",
        flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
        phonePlaceholder: "416 123 4567"
    }
};

// Ülke seçildiğinde şehirleri ve telefon kodunu güncelle
document.getElementById('ulke').addEventListener('change', function () {
    const selectedCountry = this.value;
    const citySelect = document.getElementById('sehir');
    const phoneCodeElement = document.getElementById('phoneCode');
    const countryFlagElement = document.getElementById('countryFlag');
    const phoneInput = document.getElementById('telefon');

    // Şehir seçeneğini temizle
    citySelect.innerHTML = '';

    // Eğer bir ülke seçilmişse
    if (selectedCountry) {
        const countryData = countries[selectedCountry];

        // İlk seçenek olarak "Lütfen Seçiniz" ekle
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Lütfen Seçiniz';
        citySelect.appendChild(defaultOption);

        // Seçilen ülkenin şehirlerini ekle
        countryData.cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.value;
            option.text = city.text;
            citySelect.appendChild(option);
        });

        // Telefon kodu ve bayrağı güncelle
        phoneCodeElement.innerHTML = `
                    <img src="${countryData.flagUrl}" alt="${selectedCountry}" width="20" id="countryFlag">
                    ${countryData.phoneCode}
                `;

        // Telefon placeholder'ını güncelle
        phoneInput.placeholder = countryData.phonePlaceholder;
    } else {
        // Eğer ülke seçilmemişse, varsayılan mesajı göster
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Lütfen Önce Ülke Seçiniz';
        citySelect.appendChild(defaultOption);

        // Varsayılan telefon kodu ve bayrağı göster (Türkiye)
        phoneCodeElement.innerHTML = `
                    <img src="${countries.turkiye.flagUrl}" alt="TR" width="20" id="countryFlag">
                    ${countries.turkiye.phoneCode}
                `;

        // Varsayılan telefon placeholder'ı
        phoneInput.placeholder = countries.turkiye.phonePlaceholder;
    }
});



// Yeni Ekle butonları için fonksiyonlar
document.addEventListener('DOMContentLoaded', function () {
    // Çarpı butonu oluşturma fonksiyonu
    function createRemoveButton() {
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'remove-form-btn';
        removeBtn.innerHTML = '×';
        removeBtn.addEventListener('click', function () {
            this.closest('.form-row-container').remove();
        });
        return removeBtn;
    }

    // Ulusal Fuarlar için
    const addNationalFairBtn = document.getElementById('addNationalFair');
    const nationalFairsContainer = document.getElementById('nationalFairsContainer');
    let nationalFairCount = 1;

    addNationalFairBtn.addEventListener('click', function () {
        const newContainer = document.createElement('div');
        newContainer.className = 'form-row-container';
        const newRow = document.querySelector('.national-fair-row').cloneNode(true);
        nationalFairCount++;

        // Yeni input ID'lerini güncelle
        const inputs = newRow.querySelectorAll('input');
        inputs.forEach(input => {
            const oldId = input.id;
            input.id = oldId + nationalFairCount;
            input.value = ''; // Değerleri temizle
        });

        // Label'ları güncelle
        const labels = newRow.querySelectorAll('label');
        labels.forEach(label => {
            const oldFor = label.getAttribute('for');
            label.setAttribute('for', oldFor + nationalFairCount);
        });

        // Çarpı butonunu ekle
        newContainer.appendChild(createRemoveButton());
        newContainer.appendChild(newRow);
        nationalFairsContainer.appendChild(newContainer);
    });

    // Uluslararası Fuarlar için
    const addInternationalFairBtn = document.getElementById('addInternationalFair');
    const internationalFairsContainer = document.getElementById('internationalFairsContainer');
    let internationalFairCount = 1;

    addInternationalFairBtn.addEventListener('click', function () {
        const newContainer = document.createElement('div');
        newContainer.className = 'form-row-container';
        const newRow = document.querySelector('.international-fair-row').cloneNode(true);
        internationalFairCount++;

        // Yeni input ID'lerini güncelle
        const inputs = newRow.querySelectorAll('input');
        inputs.forEach(input => {
            const oldId = input.id;
            input.id = oldId + internationalFairCount;
            input.value = ''; // Değerleri temizle
        });

        // Label'ları güncelle
        const labels = newRow.querySelectorAll('label');
        labels.forEach(label => {
            const oldFor = label.getAttribute('for');
            label.setAttribute('for', oldFor + internationalFairCount);
        });

        // Çarpı butonunu ekle
        newContainer.appendChild(createRemoveButton());
        newContainer.appendChild(newRow);
        internationalFairsContainer.appendChild(newContainer);
    });
});


var picker = new Pikaday({
    field: document.getElementById('kurulusTarihi'),
    format: 'DD-MM-YYYY',
    maxDate: new Date(),
    i18n: {
        previousMonth: 'Previous Month',
        nextMonth: 'Next Month',
        months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    toString(date, format) {
        const day = (date.getDate() < 10 ? '0' : '') + date.getDate();
        const month = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var kvkkModalBody = document.getElementById('kvkk-modal-body');
    var kvkkCheckbox = document.getElementById('kabulEdiyorum');
    var kvkkLabel = document.getElementById('kvkkLabel');
    var formGonderBtn = document.getElementById('formGonderBtn');
    var kvkkModal = document.getElementById('kvkkModal');
    var kvkkModalClose = document.getElementById('kvkkModalClose');
    var kvkkModalKapat = document.getElementById('kvkkModalKapat');
    var kvkkModalKabul = document.getElementById('kvkkModalKabul');

    // Sayfa yüklendiğinde buton disabled olsun
    formGonderBtn.disabled = true;

    // KVKK metnini footer'dan al veya sabit metin koy
    kvkkModalBody.innerHTML = `
<p>Buraya KVKK aydınlatma metni gelecek. (Footer'daki metinle aynı olacak şekilde doldurunuz)</p>
`;

    // Checkbox'ı elle tıklanamaz yapıyoruz, sadece modal ile işaretlenebilir
    kvkkCheckbox.addEventListener('click', function (e) {
        e.preventDefault();
    });

    // Label'a tıklanınca modal açılır
    kvkkLabel.addEventListener('click', function (e) {
        // Sadece checkbox işaretli değilse modal aç
        if (!kvkkCheckbox.checked) {
            kvkkModal.style.display = 'block';
        } else {
            // Checkbox işaretliyse ve tekrar tıklanırsa kaldır ve butonu pasif yap
            kvkkCheckbox.checked = false;
            formGonderBtn.disabled = true;
        }
    });

    // Modal kapatma (X veya Kapat)
    kvkkModalClose.addEventListener('click', function () {
        kvkkModal.style.display = 'none';
    });
    kvkkModalKapat.addEventListener('click', function () {
        kvkkModal.style.display = 'none';
    });

    // Modalda "Kabul Ediyorum"a basınca checkbox işaretlenir ve buton aktif olur
    kvkkModalKabul.addEventListener('click', function () {
        kvkkCheckbox.checked = true;
        formGonderBtn.disabled = false;
        kvkkModal.style.display = 'none';
    });

    // Checkbox işareti kaldırılırsa buton tekrar pasif olur
    kvkkCheckbox.addEventListener('change', function () {
        if (!kvkkCheckbox.checked) {
            formGonderBtn.disabled = true;
        }
    });

    // Form gönderme kontrolü (gerekirse)
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            if (!kvkkCheckbox.checked) {
                e.preventDefault();
                alert('KVKK metnini kabul etmeden form gönderilemez!');
            }
        });
    }
});