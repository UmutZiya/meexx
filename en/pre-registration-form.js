/* Form Section */
// Country data (cities, phone code, flag)
const countries = {
    TR: { cities: [
        { value: "adana", text: "Adana" }, { value: "ankara", text: "Ankara" }, { value: "istanbul", text: "Istanbul" }, { value: "izmir", text: "Izmir" }, { value: "bursa", text: "Bursa" }, { value: "antalya", text: "Antalya" }, { value: "konya", text: "Konya" }, { value: "gaziantep", text: "Gaziantep" }, { value: "kayseri", text: "Kayseri" }, { value: "mugla", text: "Mugla" }
    ], phoneCode: "+90", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg", phonePlaceholder: "501 234 56 78" },
    DE: { cities: [
        { value: "berlin", text: "Berlin" }, { value: "hamburg", text: "Hamburg" }, { value: "munich", text: "Munich" }, { value: "cologne", text: "Cologne" }, { value: "frankfurt", text: "Frankfurt" }, { value: "stuttgart", text: "Stuttgart" }, { value: "dusseldorf", text: "Dusseldorf" }, { value: "dortmund", text: "Dortmund" }, { value: "essen", text: "Essen" }, { value: "leipzig", text: "Leipzig" }
    ], phoneCode: "+49", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg", phonePlaceholder: "170 1234567" },
    FR: { cities: [
        { value: "paris", text: "Paris" }, { value: "marseille", text: "Marseille" }, { value: "lyon", text: "Lyon" }, { value: "toulouse", text: "Toulouse" }, { value: "nice", text: "Nice" }, { value: "nantes", text: "Nantes" }, { value: "strasbourg", text: "Strasbourg" }, { value: "montpellier", text: "Montpellier" }, { value: "bordeaux", text: "Bordeaux" }, { value: "lille", text: "Lille" }
    ], phoneCode: "+33", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg", phonePlaceholder: "6 12 34 56 78" },
    GB: { cities: [
        { value: "london", text: "London" }, { value: "manchester", text: "Manchester" }, { value: "birmingham", text: "Birmingham" }, { value: "leeds", text: "Leeds" }, { value: "liverpool", text: "Liverpool" }, { value: "newcastle", text: "Newcastle" }, { value: "sheffield", text: "Sheffield" }, { value: "bristol", text: "Bristol" }, { value: "nottingham", text: "Nottingham" }, { value: "southampton", text: "Southampton" }
    ], phoneCode: "+44", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg", phonePlaceholder: "7911 123456" },
    RU: { cities: [
        { value: "moscow", text: "Moscow" }, { value: "saint-petersburg", text: "Saint Petersburg" }, { value: "novosibirsk", text: "Novosibirsk" }, { value: "yekaterinburg", text: "Yekaterinburg" }, { value: "nizhny-novgorod", text: "Nizhny Novgorod" }, { value: "kazan", text: "Kazan" }, { value: "chelyabinsk", text: "Chelyabinsk" }, { value: "omsk", text: "Omsk" }, { value: "samara", text: "Samara" }, { value: "rostov-on-don", text: "Rostov-on-Don" }
    ], phoneCode: "+7", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg", phonePlaceholder: "999 123-45-67" },
    IT: { cities: [
        { value: "rome", text: "Rome" }, { value: "milan", text: "Milan" }, { value: "naples", text: "Naples" }, { value: "turin", text: "Turin" }, { value: "palermo", text: "Palermo" }, { value: "genoa", text: "Genoa" }, { value: "bologna", text: "Bologna" }, { value: "florence", text: "Florence" }, { value: "bari", text: "Bari" }, { value: "catania", text: "Catania" }
    ], phoneCode: "+39", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg", phonePlaceholder: "312 345 6789" },
    ES: { cities: [
        { value: "madrid", text: "Madrid" }, { value: "barcelona", text: "Barcelona" }, { value: "valencia", text: "Valencia" }, { value: "seville", text: "Seville" }, { value: "zaragoza", text: "Zaragoza" }, { value: "malaga", text: "Malaga" }, { value: "murcia", text: "Murcia" }, { value: "palma", text: "Palma" }, { value: "laspalmas", text: "Las Palmas" }, { value: "bilbao", text: "Bilbao" }
    ], phoneCode: "+34", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg", phonePlaceholder: "612 34 56 78" },
    NL: { cities: [
        { value: "amsterdam", text: "Amsterdam" }, { value: "rotterdam", text: "Rotterdam" }, { value: "thehague", text: "The Hague" }, { value: "utrecht", text: "Utrecht" }, { value: "eindhoven", text: "Eindhoven" }, { value: "tilburg", text: "Tilburg" }, { value: "groningen", text: "Groningen" }, { value: "almere", text: "Almere" }, { value: "breda", text: "Breda" }, { value: "nijmegen", text: "Nijmegen" }
    ], phoneCode: "+31", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg", phonePlaceholder: "6 12345678" },
    BE: { cities: [
        { value: "brussels", text: "Brussels" }, { value: "antwerp", text: "Antwerp" }, { value: "ghent", text: "Ghent" }, { value: "charleroi", text: "Charleroi" }, { value: "liege", text: "Liege" }, { value: "bruges", text: "Bruges" }, { value: "namur", text: "Namur" }, { value: "leuven", text: "Leuven" }, { value: "mons", text: "Mons" }, { value: "aalst", text: "Aalst" }
    ], phoneCode: "+32", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg", phonePlaceholder: "470 12 34 56" },
    CH: { cities: [
        { value: "zurich", text: "Zurich" }, { value: "geneva", text: "Geneva" }, { value: "basel", text: "Basel" }, { value: "bern", text: "Bern" }, { value: "lausanne", text: "Lausanne" }, { value: "lucerne", text: "Lucerne" }, { value: "stgallen", text: "St. Gallen" }, { value: "lugano", text: "Lugano" }, { value: "biel", text: "Biel/Bienne" }, { value: "thun", text: "Thun" }
    ], phoneCode: "+41", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg", phonePlaceholder: "79 123 45 67" },
    AT: { cities: [
        { value: "vienna", text: "Vienna" }, { value: "graz", text: "Graz" }, { value: "linz", text: "Linz" }, { value: "salzburg", text: "Salzburg" }, { value: "innsbruck", text: "Innsbruck" }, { value: "klagenfurt", text: "Klagenfurt" }, { value: "villach", text: "Villach" }, { value: "wels", text: "Wels" }, { value: "stpoelten", text: "St. Poelten" }, { value: "dornbirn", text: "Dornbirn" }
    ], phoneCode: "+43", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg", phonePlaceholder: "660 1234567" },
    PL: { cities: [
        { value: "warsaw", text: "Warsaw" }, { value: "krakow", text: "Krakow" }, { value: "lodz", text: "Lodz" }, { value: "wroclaw", text: "Wroclaw" }, { value: "poznan", text: "Poznan" }, { value: "gdansk", text: "Gdansk" }, { value: "szczecin", text: "Szczecin" }, { value: "bydgoszcz", text: "Bydgoszcz" }, { value: "lublin", text: "Lublin" }, { value: "katowice", text: "Katowice" }
    ], phoneCode: "+48", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg", phonePlaceholder: "501 234 567" },
    GR: { cities: [
        { value: "athens", text: "Athens" }, { value: "thessaloniki", text: "Thessaloniki" }, { value: "patras", text: "Patras" }, { value: "heraklion", text: "Heraklion" }, { value: "larissa", text: "Larissa" }, { value: "volos", text: "Volos" }, { value: "ioannina", text: "Ioannina" }, { value: "trikala", text: "Trikala" }, { value: "serres", text: "Serres" }, { value: "kavala", text: "Kavala" }
    ], phoneCode: "+30", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg", phonePlaceholder: "691 234 5678" },
    UA: { cities: [
        { value: "kyiv", text: "Kyiv" }, { value: "lviv", text: "Lviv" }, { value: "odessa", text: "Odessa" }, { value: "dnipro", text: "Dnipro" }, { value: "kharkiv", text: "Kharkiv" }, { value: "zaporizhia", text: "Zaporizhia" }, { value: "kryvyi", text: "Kryvyi Rih" }, { value: "mykolaiv", text: "Mykolaiv" }, { value: "mariupol", text: "Mariupol" }, { value: "vinnitsa", text: "Vinnitsa" }
    ], phoneCode: "+380", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg", phonePlaceholder: "50 123 4567" },
    US: { cities: [
        { value: "newyork", text: "New York" }, { value: "losangeles", text: "Los Angeles" }, { value: "chicago", text: "Chicago" }, { value: "houston", text: "Houston" }, { value: "phoenix", text: "Phoenix" }, { value: "philadelphia", text: "Philadelphia" }, { value: "sanantonio", text: "San Antonio" }, { value: "sandiego", text: "San Diego" }, { value: "dallas", text: "Dallas" }, { value: "sanjose", text: "San Jose" }
    ], phoneCode: "+1", flagUrl: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg", phonePlaceholder: "201 123 4567" },
    CA: { cities: [
        { value: "toronto", text: "Toronto" }, { value: "vancouver", text: "Vancouver" }, { value: "montreal", text: "Montreal" }, { value: "calgary", text: "Calgary" }, { value: "edmonton", text: "Edmonton" }, { value: "ottawa", text: "Ottawa" }, { value: "winnipeg", text: "Winnipeg" }, { value: "quebec", text: "Quebec City" }, { value: "hamilton", text: "Hamilton" }, { value: "kitchener", text: "Kitchener" }
    ], phoneCode: "+1", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg", phonePlaceholder: "416 123 4567" },
    CN: { cities: [
        { value: "beijing", text: "Beijing" }, { value: "shanghai", text: "Shanghai" }, { value: "guangzhou", text: "Guangzhou" }, { value: "shenzhen", text: "Shenzhen" }, { value: "chengdu", text: "Chengdu" }, { value: "chongqing", text: "Chongqing" }, { value: "tianjin", text: "Tianjin" }, { value: "wuhan", text: "Wuhan" }, { value: "hangzhou", text: "Hangzhou" }, { value: "nanjing", text: "Nanjing" }
    ], phoneCode: "+86", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People's_Republic_of_China.svg", phonePlaceholder: "138 0013 8000" },
    JP: { cities: [
        { value: "tokyo", text: "Tokyo" }, { value: "yokohama", text: "Yokohama" }, { value: "osaka", text: "Osaka" }, { value: "nagoya", text: "Nagoya" }, { value: "sapporo", text: "Sapporo" }, { value: "fukuoka", text: "Fukuoka" }, { value: "kobe", text: "Kobe" }, { value: "kyoto", text: "Kyoto" }, { value: "kawasaki", text: "Kawasaki" }, { value: "saitama", text: "Saitama" }
    ], phoneCode: "+81", flagUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg", phonePlaceholder: "90 1234 5678" },
    KR: { cities: [
        { value: "seoul", text: "Seoul" }, { value: "busan", text: "Busan" }, { value: "incheon", text: "Incheon" }, { value: "daegu", text: "Daegu" }, { value: "daejeon", text: "Daejeon" }, { value: "gwangju", text: "Gwangju" }, { value: "suwon", text: "Suwon" }, { value: "ulsan", text: "Ulsan" }, { value: "changwon", text: "Changwon" }, { value: "seongnam", text: "Seongnam" }
    ], phoneCode: "+82", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg", phonePlaceholder: "10 1234 5678" },
    IN: { cities: [
        { value: "mumbai", text: "Mumbai" }, { value: "delhi", text: "Delhi" }, { value: "bangalore", text: "Bangalore" }, { value: "hyderabad", text: "Hyderabad" }, { value: "ahmedabad", text: "Ahmedabad" }, { value: "chennai", text: "Chennai" }, { value: "kolkata", text: "Kolkata" }, { value: "surat", text: "Surat" }, { value: "pune", text: "Pune" }, { value: "jaipur", text: "Jaipur" }
    ], phoneCode: "+91", flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg", phonePlaceholder: "98 1234 5678" },
    BR: { cities: [
        { value: "sao_paulo", text: "Sao Paulo" }, { value: "rio_de_janeiro", text: "Rio de Janeiro" }, { value: "brasilia", text: "Brasilia" }, { value: "salvador", text: "Salvador" }, { value: "fortaleza", text: "Fortaleza" }, { value: "belo_horizonte", text: "Belo Horizonte" }, { value: "manaus", text: "Manaus" }, { value: "curitiba", text: "Curitiba" }, { value: "recife", text: "Recife" }, { value: "goiania", text: "Goiania" }
    ], phoneCode: "+55", flagUrl: "https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg", phonePlaceholder: "11 91234 5678" },
    AU: { cities: [
        { value: "sydney", text: "Sydney" }, { value: "melbourne", text: "Melbourne" }, { value: "brisbane", text: "Brisbane" }, { value: "perth", text: "Perth" }, { value: "adelaide", text: "Adelaide" }, { value: "gold_coast", text: "Gold Coast" }, { value: "canberra", text: "Canberra" }, { value: "newcastle", text: "Newcastle" }, { value: "wollongong", text: "Wollongong" }, { value: "logan_city", text: "Logan City" }
    ], phoneCode: "+61", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg", phonePlaceholder: "412 345 678" },
    SE: { cities: [
        { value: "stockholm", text: "Stockholm" }, { value: "gothenburg", text: "Gothenburg" }, { value: "malmo", text: "Malmo" }, { value: "uppsala", text: "Uppsala" }, { value: "vasteras", text: "Vasteras" }, { value: "orebro", text: "Orebro" }, { value: "linkoping", text: "Linkoping" }, { value: "helsingborg", text: "Helsingborg" }, { value: "jonkoping", text: "Jonkoping" }, { value: "norrkoping", text: "Norrkoping" }
    ], phoneCode: "+46", flagUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg", phonePlaceholder: "70 123 45 67" },
    AE: { cities: [
        { value: "dubai", text: "Dubai" }, { value: "abu_dhabi", text: "Abu Dhabi" }, { value: "sharjah", text: "Sharjah" }, { value: "al_ain", text: "Al Ain" }, { value: "ajman", text: "Ajman" }, { value: "ras_al_khaimah", text: "Ras Al Khaimah" }, { value: "fujairah", text: "Fujairah" }, { value: "umm_al_quwain", text: "Umm Al Quwain" }, { value: "khor_fakkan", text: "Khor Fakkan" }, { value: "dibba_al_fujairah", text: "Dibba Al-Fujairah" }
    ], phoneCode: "+971", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg", phonePlaceholder: "50 123 4567" },
    SA: { cities: [
        { value: "riyadh", text: "Riyadh" }, { value: "jeddah", text: "Jeddah" }, { value: "mecca", text: "Mecca" }, { value: "medina", text: "Medina" }, { value: "dammam", text: "Dammam" }, { value: "khobar", text: "Khobar" }, { value: "tabuk", text: "Tabuk" }, { value: "abha", text: "Abha" }, { value: "hail", text: "Hail" }, { value: "buraydah", text: "Buraydah" }
    ], phoneCode: "+966", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg", phonePlaceholder: "50 123 4567" },
    ZA: { cities: [
        { value: "johannesburg", text: "Johannesburg" }, { value: "cape_town", text: "Cape Town" }, { value: "durban", text: "Durban" }, { value: "pretoria", text: "Pretoria" }, { value: "port_elizabeth", text: "Port Elizabeth" }, { value: "bloemfontein", text: "Bloemfontein" }, { value: "east_london", text: "East London" }, { value: "polokwane", text: "Polokwane" }, { value: "nelspruit", text: "Nelspruit" }, { value: "kimberley", text: "Kimberley" }
    ], phoneCode: "+27", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg", phonePlaceholder: "82 123 4567" },
    EG: { cities: [
        { value: "cairo", text: "Cairo" }, { value: "alexandria", text: "Alexandria" }, { value: "giza", text: "Giza" }, { value: "shubra_el_kheima", text: "Shubra El Kheima" }, { value: "port_said", text: "Port Said" }, { value: "suez", text: "Suez" }, { value: "el_mahala_el_kubra", text: "El Mahala El Kubra" }, { value: "luxor", text: "Luxor" }, { value: "mansoura", text: "Mansoura" }, { value: "tanta", text: "Tanta" }
    ], phoneCode: "+20", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg", phonePlaceholder: "100 123 4567" },
    NG: { cities: [
        { value: "lagos", text: "Lagos" }, { value: "kano", text: "Kano" }, { value: "ibadan", text: "Ibadan" }, { value: "abuja", text: "Abuja" }, { value: "port_harcourt", text: "Port Harcourt" }, { value: "benin_city", text: "Benin City" }, { value: "maiduguri", text: "Maiduguri" }, { value: "zaria", text: "Zaria" }, { value: "aba", text: "Aba" }, { value: "jos", text: "Jos" }
    ], phoneCode: "+234", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg", phonePlaceholder: "803 123 4567" },
    MA: { cities: [
        { value: "casablanca", text: "Casablanca" }, { value: "fes", text: "Fes" }, { value: "sale", text: "Sale" }, { value: "tangier", text: "Tangier" }, { value: "marrakesh", text: "Marrakesh" }, { value: "agadir", text: "Agadir" }, { value: "meknes", text: "Meknes" }, { value: "oujda", text: "Oujda" }, { value: "kenitra", text: "Kenitra" }, { value: "tetouan", text: "Tetouan" }
    ], phoneCode: "+212", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg", phonePlaceholder: "661 234567" },
    MX: { cities: [
        { value: "mexico_city", text: "Mexico City" }, { value: "guadalajara", text: "Guadalajara" }, { value: "monterrey", text: "Monterrey" }, { value: "puebla", text: "Puebla" }, { value: "toluca", text: "Toluca" }, { value: "tijuana", text: "Tijuana" }, { value: "leon", text: "Leon" }, { value: "ciudad_juarez", text: "Ciudad Juarez" }, { value: "torreon", text: "Torreon" }, { value: "san_luis_potosi", text: "San Luis Potosi" }
    ], phoneCode: "+52", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg", phonePlaceholder: "55 1234 5678" },
    AR: { cities: [
        { value: "buenos_aires", text: "Buenos Aires" }, { value: "cordoba", text: "Cordoba" }, { value: "rosario", text: "Rosario" }, { value: "mendoza", text: "Mendoza" }, { value: "la_plata", text: "La Plata" }, { value: "tucuman", text: "Tucuman" }, { value: "mar_del_plata", text: "Mar del Plata" }, { value: "salta", text: "Salta" }, { value: "santa_fe", text: "Santa Fe" }, { value: "san_juan", text: "San Juan" }
    ], phoneCode: "+54", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg", phonePlaceholder: "11 1234 5678" },
    CO: { cities: [
        { value: "bogota", text: "Bogota" }, { value: "medellin", text: "Medellin" }, { value: "cali", text: "Cali" }, { value: "barranquilla", text: "Barranquilla" }, { value: "cartagena", text: "Cartagena" }, { value: "cucuta", text: "Cucuta" }, { value: "bucaramanga", text: "Bucaramanga" }, { value: "pereira", text: "Pereira" }, { value: "santa_marta", text: "Santa Marta" }, { value: "ibague", text: "Ibague" }
    ], phoneCode: "+57", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg", phonePlaceholder: "300 1234567" },
    CL: { cities: [
        { value: "santiago", text: "Santiago" }, { value: "puente_alto", text: "Puente Alto" }, { value: "antofagasta", text: "Antofagasta" }, { value: "vina_del_mar", text: "Vina del Mar" }, { value: "valparaiso", text: "Valparaiso" }, { value: "talca", text: "Talca" }, { value: "arica", text: "Arica" }, { value: "iquique", text: "Iquique" }, { value: "rancagua", text: "Rancagua" }, { value: "concepcion", text: "Concepcion" }
    ], phoneCode: "+56", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg", phonePlaceholder: "9 1234 5678" },
    ID: { cities: [
        { value: "jakarta", text: "Jakarta" }, { value: "surabaya", text: "Surabaya" }, { value: "bandung", text: "Bandung" }, { value: "medan", text: "Medan" }, { value: "bekasi", text: "Bekasi" }, { value: "depok", text: "Depok" }, { value: "tangerang", text: "Tangerang" }, { value: "palembang", text: "Palembang" }, { value: "semarang", text: "Semarang" }, { value: "makassar", text: "Makassar" }
    ], phoneCode: "+62", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg", phonePlaceholder: "812 3456 7890" },
    MY: { cities: [
        { value: "kuala_lumpur", text: "Kuala Lumpur" }, { value: "george_town", text: "George Town" }, { value: "ipoh", text: "Ipoh" }, { value: "shah_alam", text: "Shah Alam" }, { value: "petaling_jaya", text: "Petaling Jaya" }, { value: "johor_bahru", text: "Johor Bahru" }, { value: "malacca_city", text: "Malacca City" }, { value: "alor_setar", text: "Alor Setar" }, { value: "kuching", text: "Kuching" }, { value: "kota_kinabalu", text: "Kota Kinabalu" }
    ], phoneCode: "+60", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg", phonePlaceholder: "12 345 6789" },
    TH: { cities: [
        { value: "bangkok", text: "Bangkok" }, { value: "nonthaburi", text: "Nonthaburi" }, { value: "nakhon_ratchasima", text: "Nakhon Ratchasima" }, { value: "chiang_mai", text: "Chiang Mai" }, { value: "hat_yai", text: "Hat Yai" }, { value: "pak_kret", text: "Pak Kret" }, { value: "ubon_ratchathani", text: "Ubon Ratchathani" }, { value: "udon_thani", text: "Udon Thani" }, { value: "khon_kaen", text: "Khon Kaen" }, { value: "nakhon_si_thammarat", text: "Nakhon Si Thammarat" }
    ], phoneCode: "+66", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg", phonePlaceholder: "81 234 5678" },
    SG: { cities: [
        { value: "singapore", text: "Singapore" }
    ], phoneCode: "+65", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg", phonePlaceholder: "8123 4567" },
    PT: { cities: [
        { value: "lisbon", text: "Lisbon" }, { value: "porto", text: "Porto" }, { value: "amadora", text: "Amadora" }, { value: "braga", text: "Braga" }, { value: "coimbra", text: "Coimbra" }, { value: "funchal", text: "Funchal" }, { value: "almada", text: "Almada" }, { value: "agualva_cacem", text: "Agualva-Cacem" }, { value: "queluz", text: "Queluz" }, { value: "cacem", text: "Cacem" }
    ], phoneCode: "+351", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg", phonePlaceholder: "912 345 678" },
    IE: { cities: [
        { value: "dublin", text: "Dublin" }, { value: "cork", text: "Cork" }, { value: "limerick", text: "Limerick" }, { value: "galway", text: "Galway" }, { value: "waterford", text: "Waterford" }, { value: "drogehda", text: "Drogehda" }, { value: "dundalk", text: "Dundalk" }, { value: "navan", text: "Navan" }, { value: "enni", text: "Ennis" }, { value: "kilkenny", text: "Kilkenny" }
    ], phoneCode: "+353", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg", phonePlaceholder: "87 123 4567" },
    FI: { cities: [
        { value: "helsinki", text: "Helsinki" }, { value: "espoo", text: "Espoo" }, { value: "tampere", text: "Tampere" }, { value: "vantaa", text: "Vantaa" }, { value: "oulu", text: "Oulu" }, { value: "turku", text: "Turku" }, { value: "jyvaskyla", text: "Jyvaskyla" }, { value: "lahti", text: "Lahti" }, { value: "kuopio", text: "Kuopio" }, { value: "pori", text: "Pori" }
    ], phoneCode: "+358", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg", phonePlaceholder: "40 123 4567" },
    DK: { cities: [
        { value: "copenhagen", text: "Copenhagen" }, { value: "aarhus", text: "Aarhus" }, { value: "odense", text: "Odense" }, { value: "aalborg", text: "Aalborg" }, { value: "esbjerg", text: "Esbjerg" }, { value: "randers", text: "Randers" }, { value: "kolding", text: "Kolding" }, { value: "horsens", text: "Horsens" }, { value: "vejle", text: "Vejle" }, { value: "roskilde", text: "Roskilde" }
    ], phoneCode: "+45", flagUrl: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg", phonePlaceholder: "20 12 34 56" }
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
    if (selectedCountry && countries[selectedCountry]) {
        const countryData = countries[selectedCountry];
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Please select';
        citySelect.appendChild(defaultOption);
        countryData.cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.value;
            option.text = city.text;
            citySelect.appendChild(option);
        });
        phoneCodeElement.innerHTML = `
            <img src="${countryData.flagUrl}" alt="${selectedCountry}" width="20" id="countryFlag">
            ${countryData.phoneCode}
        `;
        phoneInput.placeholder = countryData.phonePlaceholder;
    } else {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'Please select country first';
        citySelect.appendChild(defaultOption);
        phoneCodeElement.innerHTML = `
            <img src="${countries.TR.flagUrl}" alt="TR" width="20" id="countryFlag">
            ${countries.TR.phoneCode}
        `;
        phoneInput.placeholder = countries.TR.phonePlaceholder;
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