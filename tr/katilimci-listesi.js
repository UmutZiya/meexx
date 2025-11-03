document.addEventListener("DOMContentLoaded", () => {
  // Katılımcı verileri
  const participantsData = [
    { firmaAdi: "KARMAK TASARIM METAL MAKİNA SANAYİ TİCARET ANONİM ŞİRKETİ", salon: "3", stantNo: "3-A02" },
    { firmaAdi: "ZİGANA VİNÇ MAKİNA TEKNİK HIRDAVAT SAN. TİC. LTD. ŞTİ.", salon: "2", stantNo: "2-A01" },
    { firmaAdi: "DİSPA MAKİNA SANAYİ VE TİCARET LİMİTED ŞİRKETİ", salon: "1", stantNo: "1-A08" },
    { firmaAdi: "NUKON LAZER MAKİNA METAL SAN. ve TİC. A.Ş.", salon: "2", stantNo: "2-A07" },
    { firmaAdi: "LİVMAK MAKİNE MÜHENDİSLİK İTH. İHR. SAN. VE TİC. LTD. ŞTİ.", salon: "1", stantNo: "1-A17" },
    { firmaAdi: "ERMAKSAN MAKİNA SANAYİ ve TİCARET A.Ş.", salon: "2", stantNo: "2-A04" },
    { firmaAdi: "HİLALSAN MAKİNA ENDÜSTRİYEL ve TİCARET LTD. ŞTİ.", salon: "1", stantNo: "1-A06" },
    { firmaAdi: "SEZGİN LAZER MAKİNE SAN. VE TİC. LTD. ŞTİ.", salon: "2", stantNo: "2-A11" },
    { firmaAdi: "TESLAMAK MAKİNA METAL OTOMASYON SERVİS HİZMETLERİ TİC. LTD. ŞTİ.", salon: "1", stantNo: "1-A15" },
    { firmaAdi: "ŞAHİNLER METAL MAKİNA ENDÜSTRİ A.Ş.", salon: "1", stantNo: "1-A07" },
    { firmaAdi: "T.Ş.T. LİFT AMORTİSÖR OTOM. YED. PAR. MET. SAN. TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-B01" },
    { firmaAdi: "LEVENT ÇELİK ÇELİK SANAYİ VE TİCARET ANONİM ŞİRKETİ", salon: "1", stantNo: "1-A01" },
    { firmaAdi: "BBEND MAKİNA İTHALAT İHRACAT SAN. VE TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-C07" },
    { firmaAdi: "HASMAK VİNÇ MAKİNA MÜHENDİSLİK SAN VE TİC. LTD. ŞTİ.", salon: "5", stantNo: "5-A01" },
    { firmaAdi: "AKSİYON ÇELİK YAPI SANAYİ VE TİCARET ANONİM ŞİRKETİ", salon: "3", stantNo: "3-A01" },
    { firmaAdi: "COMPONENT MONTAJ SİSTEMLERİ VE ENDÜSTRİYEL ALETLER SAN. TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-A07" },
    { firmaAdi: "DENER MAKİNE SANAYİ ve TİCARET A.Ş.", salon: "1", stantNo: "1-A09" },
    { firmaAdi: "FRESAN MAKİNA SAN. ve TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-B09" },
    { firmaAdi: "TUBEND MAKİNA SAN. VE TİC. A.Ş.", salon: "3", stantNo: "3- C05" },
    { firmaAdi: "Pİ DİJİTAL ENDÜSTRİ ANONİM ŞİRKETİ", salon: "1", stantNo: "1-A08" },
    { firmaAdi: "DURO MAKİNA KALIP SAN. TİC. LTD. ŞTİ.", salon: "4", stantNo: "4-A02" },
    { firmaAdi: "NİK MAKİNA SAN. TİC. A.Ş.", salon: "3", stantNo: "3-C03" },
    { firmaAdi: "EMKO ELEKTRONİK SANAYİ VE TİCARET A.Ş.", salon: "2", stantNo: "2-A02" },
    { firmaAdi: "SAĞLAMLAR PUNTA KAYNAK OTOMASYON MAK. SAN. ve TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-B12" },
    { firmaAdi: "BİLMER KAYNAK MAKİNELERİ VE YEDEK PARÇA İTH. İHR. SAN. TİC. LTD. ŞTİ.", salon: "6", stantNo: "6-B02" },
    { firmaAdi: "BURPRES METAL SANAYİ A.Ş.", salon: "4", stantNo: "4-A01" },
    { firmaAdi: "BEKAMAK MAKİNA SANAYİ TİCARET A.Ş.", salon: "1", stantNo: "1-A11" },
    { firmaAdi: "ATİK ENDÜSTRİYEL KAYNAK TEKNOLOJİLERİ SAN VE TİC.A.Ş.", salon: "6", stantNo: "6-A04" },
    { firmaAdi: "BAYKAL MAKİNA SANAYİ ve TİCARET A.Ş.", salon: "1", stantNo: "1-A04" },
    { firmaAdi: "CKB MAKİNA KALIP SANAYİ TİCARET LİMİTED ŞİRKETİ", salon: "1", stantNo: "1-A05" },
    { firmaAdi: "LFSS MAKİNA SAN. VE TİC. A.Ş.", salon: "1", stantNo: "1-A13" },
    { firmaAdi: "TEKNOMASYON MAK. MET. EL. TUR. SAN. VE TİC.LTD.ŞTİ.", salon: "3", stantNo: "3-B02" },
    { firmaAdi: "SARIGÖL KONVEYÖR SİSTEMLERİ MAKİNA YEDEK PARÇA NAKLİYAT İTHALAT İHRACAT SAN. ve TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-B08" },
    { firmaAdi: "CLOOS KAYNAK TEKNİK SANAYİ LİMİTED ŞİRKETİ", salon: "6", stantNo: "6-A02" },
    { firmaAdi: "ALP GÜÇ AKTARMA TEKNOLOJİLERİ SANAYİ VE TİCARET ANONİM ŞİRKETİ", salon: "3", stantNo: "3-A03" },
    { firmaAdi: "ERBEND MAKİNA SAN. ve TİC A.Ş.", salon: "2", stantNo: "2-A05" },
    { firmaAdi: "HİDROPRES MAKİNA SANAYİ VE TİCARET ANONİM ŞİRKETİ", salon: "3", stantNo: "3-B10" },
    { firmaAdi: "BAYRAKTAR KESİCİ TAKIM TİC VE SAN. LTD. ŞTİ.", salon: "3", stantNo: "3-A05" },
    { firmaAdi: "BOSMECH MAKİNA SAN. TİC. LTD. ŞTİ.", salon: "6", stantNo: "6-A08" },
    { firmaAdi: "AKYAPAK MAKİNA SAN. VE TİC. A.Ş.", salon: "4", stantNo: "4-A07" },
    { firmaAdi: "HİDKOM MÜHENDİSLİK MÜMESSİLLİK TAAHHÜT MAKİNA SANAYİ VE TİCARET LİMİTED ŞİRKETİ", salon: "3", stantNo: "3-B04/A" },
    { firmaAdi: "ATLAS HİDROLİK LİFT SİSTEMLERİ SAN VE TİC. A.Ş.", salon: "3", stantNo: "3-B04/B" },
    { firmaAdi: "İĞREK MAKİNA SAN. ve TİC. A.Ş.", salon: "3", stantNo: "3-B03" },
    { firmaAdi: "HİD-TEK MAKİNA SANAYİ VE TİCARET LİMİTED ŞİRKETİ", salon: "3", stantNo: "3-B07" },
    { firmaAdi: "HÜRSAN HİDROLİK PRES ve TAKIM TEZGAHLARI SANAYİ TİCARET A. Ş.", salon: "4", stantNo: "4-A12" },
    { firmaAdi: "KAR METAL MAKİNE SANAYİ VE TİCARET A. Ş.", salon: "3", stantNo: "3-B05" },
    { firmaAdi: "BİRLİKSAN KESİCİ TAKIMLARSAN. VE TİC. LTD. ŞTİ.", salon: "6", stantNo: "6-B10" },
    { firmaAdi: "RETA OTOMASYON YEDEK PAR. MAK. HIRD. OTOM.İTH. İHR. SAN. TİC. LTD. ŞTİ", salon: "5", stantNo: "5-A07" },
    { firmaAdi: "KESMAK MAKİNA SANAYİ TİCARET LTD. ŞTİ.", salon: "3", stantNo: "3-A04" },
    { firmaAdi: "VARF YÜKSEKTE ÇALIŞMA ÇÖZÜMLERİ A.Ş.", salon: "6", stantNo: "6-A06" },
    { firmaAdi: "METSAN MAKİNE SANAYİ VE TİCARET A.Ş.", salon: "3", stantNo: "3-A15" },
    { firmaAdi: "WASTECH MAKİNE SANAYİ VE TİCARET LİMİTED ŞİRKETİ", salon: "5", stantNo: "5-A02" },
    { firmaAdi: "DCB LAZERTEKNOLOJİLERİ SAN TİC LTD ŞTİ", salon: "2", stantNo: "2-A03" },
    { firmaAdi: "HİDRONEST HİDROLİK PNOMATİK SİST. VE ELEMANLARI SAN.TİC.LTD.ŞTİ.", salon: "3", stantNo: "3-B11" },
    { firmaAdi: "POVVER PNOMATİK PROSES LTD ŞTİ", salon: "3", stantNo: "3-B06" },
    { firmaAdi: "YILDIZ ODS MAKİNA SAN VE TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-B14" },
    { firmaAdi: "BURSA IŞIK TASARIM KALIP VE PLASTİK ENJ. İMAL. SAN. LTD. ŞTİ.", salon: "6", stantNo: "6-B06" },
    { firmaAdi: "ER-EL MAKİNA YEDEK PARÇA İMALATI SAN. TİC. LTD. ŞTİ.", salon: "6", stantNo: "6-A01" },
    { firmaAdi: "ENİGMA HIZLI BAĞLANTI SİSTEMLERİ SAN. VE TİC. LTD. ŞTİ.", salon: "5", stantNo: "5-B02" },
    { firmaAdi: "BERLEV DİŞLİ MAKİNA SAN. TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-C11" },
    { firmaAdi: "HAWE HİDROLİK VE OTOMASYON SİSTEMLERİ A.Ş.", salon: "3", stantNo: "3-C02" },
    { firmaAdi: "OK ENERJİ RULMAN SANAYİ DAĞITIM BOBİN OTO İNŞ. TAAH. TURİZM. MOT SAN. TİC. LTD ŞTİ", salon: "6", stantNo: "6-B12" },
    { firmaAdi: "RASYO MAKİNA SANAYİ VE TİCARET LTD. ŞTİ.", salon: "3", stantNo: "3-C01" },
    { firmaAdi: "GLOBAL GÜÇ SİSTEMLERİ SAN. VE TİC. LTD. ŞTİ.", salon: "6", stantNo: "6-A13" },
    { firmaAdi: "GÜRKAN GÜNERİ (GÜNERİ TARIM VE MAKİNE)", salon: "5", stantNo: "5-B04" },
    { firmaAdi: "DİRİNLER MAKİNA SANAYİ ve TİCARET A.Ş.", salon: "4", stantNo: "4-A08" },
    { firmaAdi: "İMAŞ MAKİNA SANAYİ A.Ş.", salon: "2", stantNo: "2-A08" },
    { firmaAdi: "İNANLAR MAKİNA İML. SAN. ve TİC. LTD. ŞTİ.", salon: "6", stantNo: "6-B05" },
    { firmaAdi: "SAYAL VİNÇ MAKİNA SAN. ve TİC. A.Ş.", salon: "6", stantNo: "6-B14" },
    { firmaAdi: "SAYMAK ENDÜSTRİYEL METAL MAKİNE SAN. ve TİC. A.Ş.", salon: "1", stantNo: "1-A10" },
    { firmaAdi: "TFON MAKİNE A.Ş.", salon: "2", stantNo: "2-A06" },
    { firmaAdi: "FAST MAKİNA VE OTOMASYON SİSTEMLERİ SAN.TİC. LTD. ŞTİ.", salon: "5", stantNo: "5-A11" },
    { firmaAdi: "İDRİS ÇAKMAK -ARYANTECH MAKİNE BAKIM ONARIM YEDEK PARÇA İMALAT VE SATIŞ", salon: "5", stantNo: "5-B06" },
    { firmaAdi: "YİNG HAN TEKNOLOJİ LTD ŞTİ.", salon: "3", stantNo: "3-C07" },
    { firmaAdi: "BİLKO BİLGİSAYAR OTOMASYON VE KONTROL A.Ş.", salon: "5", stantNo: "5-A03" },
    { firmaAdi: "Bio Circle Yüzey Teknolojileri Sanayi ve Licaret Limited Şirketi", salon: "6", stantNo: "6-A09" },
    { firmaAdi: "GLOBAL MEKATRONİK SİSTEMLERİ SANAYİ VE TİCARET LİMİTED ŞİRKETİ", salon: "3", stantNo: "3-A11" },
    { firmaAdi: "AHİTOZ BOYA TÜNEL TESİSLERİ SAN. TİC. LTD. ŞTİ.", salon: "3", stantNo: "3-A17" },
    { firmaAdi: "GÜRALP VİNÇ VE MAKİNE KONS. SAN. TİC. A.Ş.", salon: "6", stantNo: "6-A10" },
    { firmaAdi: "ADİL TESTERE MAKİNE A.Ş.", salon: "3", stantNo: "3-A09" },
    { firmaAdi: "SAYAL VİNÇ MAKİNA SANAYİ ve TİCARET A.Ş.", salon: "6", stantNo: "6-B14" },
    { firmaAdi: "YSF MADEN METAL ENDÜSTRİ ÜRÜNLERİ LTD. ŞTİ.", salon: "5", stantNo: "5-A08" },
    { firmaAdi: "MİLTAŞ PUNCH PRESS ABKANT PRES TAKIMLAR SAN. TİC. LTD. ŞTİ.", salon: "1", stantNo: "1-A02" },
    { firmaAdi: "SAYMAK ENDÜSTRİYEL METAL MAKİNE SAN. VE TİC.A.Ş", salon: "1", stantNo: "1-A10" },
    { firmaAdi: "AFRAN ELEKTROSTATİK TOZ VE YAŞ BOYA EKİPMANLARI SANAYİ TİCARET LTD. ŞTİ.", salon: "4", stantNo: "4-A04" },
    { firmaAdi: "SOLEM ENDÜSTRİYEL ÜRÜN TEM. KİM. GIDA SAN TİC LTD ŞTİ", salon: "5", stantNo: "5-B12" }
  ]

  // Verileri A-Z sıralı olarak başlat
  const sortedInitialData = [...participantsData].sort((a, b) => a.firmaAdi.localeCompare(b.firmaAdi, 'tr'))
  
  // Tabloyu doldur
  populateTable(sortedInitialData)

  // Firma adı filtreleme
  const firmaAdiInput = document.getElementById("firma-adi")
  firmaAdiInput.addEventListener("input", filterParticipants)

  // Alfabetik sıralama
  let isAscending = true
  const sortButton = document.getElementById("sort-button")
  sortButton.addEventListener("click", sortParticipants)

  // Salon sıralama
  let isSalonAscending = true
  const sortSalonButton = document.getElementById("sort-salon-button")
  sortSalonButton.addEventListener("click", sortParticipantsBySalon)

  function sortParticipants() {
    const sortedData = [...participantsData].sort((a, b) => {
      if (isAscending) {
        return a.firmaAdi.localeCompare(b.firmaAdi, 'tr')
      } else {
        return b.firmaAdi.localeCompare(a.firmaAdi, 'tr')
      }
    })
    
    // Buton ikonunu güncelle
    const icon = sortButton.querySelector('i')
    if (isAscending) {
      icon.className = 'fas fa-sort-alpha-up'
    } else {
      icon.className = 'fas fa-sort-alpha-down'
    }
    
    isAscending = !isAscending
    populateTable(sortedData)
  }

  function sortParticipantsBySalon() {
    const sortedData = [...participantsData].sort((a, b) => {
      const salonA = parseInt(a.salon)
      const salonB = parseInt(b.salon)
      
      if (isSalonAscending) {
        return salonA - salonB
      } else {
        return salonB - salonA
      }
    })
    
    // Buton ikonunu güncelle
    const icon = sortSalonButton.querySelector('i')
    if (isSalonAscending) {
      icon.className = 'fas fa-sort-numeric-up'
    } else {
      icon.className = 'fas fa-sort-numeric-down'
    }
    
    isSalonAscending = !isSalonAscending
    populateTable(sortedData)
  }

  // Filtreleme fonksiyonu
  function filterParticipants() {
    const firmaAdiFilter = firmaAdiInput.value.toLowerCase()

    let filteredData = participantsData.filter((participant) => {
      return participant.firmaAdi.toLowerCase().includes(firmaAdiFilter)
    })

    populateTable(filteredData)
  }

  // Tabloyu doldurma fonksiyonu
  function populateTable(data) {
    const tableBody = document.querySelector("#participants-table tbody")
    tableBody.innerHTML = ""

    if (data.length === 0) {
      const row = document.createElement("tr")
      const cell = document.createElement("td")
      cell.colSpan = 3
      cell.textContent = "Sonuç bulunamadı"
      cell.style.textAlign = "center"
      row.appendChild(cell)
      tableBody.appendChild(row)
      return
    }

    data.forEach((participant) => {
      const row = document.createElement("tr")

      const firmaAdiCell = document.createElement("td")
      firmaAdiCell.textContent = participant.firmaAdi

      const salonCell = document.createElement("td")
      salonCell.textContent = participant.salon

      const stantNoCell = document.createElement("td")
      stantNoCell.textContent = participant.stantNo

      row.appendChild(firmaAdiCell)
      row.appendChild(salonCell)
      row.appendChild(stantNoCell)

      tableBody.appendChild(row)
    })
  }
})
