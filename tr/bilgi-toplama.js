// on-kayit-formu.js'deki countries objesini kullan

// Dosya önizleme fonksiyonu (küçük önizleme)
function previewFile(inputId) {
    const input = document.getElementById(inputId);
    const previewDiv = document.getElementById(inputId + 'Preview');
    
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const fileSize = (file.size / 1024 / 1024).toFixed(2);
        const fileType = file.type;
        
        let previewContent = `
            <div class="file-name">${file.name}</div>
            <div class="file-size">Boyut: ${fileSize} MB</div>
        `;
        
        if (fileType.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                previewContent += `<img src="${e.target.result}" style="max-width: 200px; max-height: 200px; margin-top: 10px; border: 1px solid #ddd; border-radius: 5px;" alt="Önizleme">`;
                previewDiv.innerHTML = previewContent;
            };
            reader.readAsDataURL(file);
        } else if (fileType === 'application/pdf') {
            previewContent += `<div style="margin-top: 10px; padding: 10px; background: #f0f0f0; border-radius: 5px;"><i class="fas fa-file-pdf" style="color: #dc3545;"></i> PDF Dosyası</div>`;
            previewDiv.innerHTML = previewContent;
        } else {
            previewDiv.innerHTML = previewContent;
        }
        
        previewDiv.style.display = 'block';
    }
}

// Dosyayı modal'da büyük görüntüleme fonksiyonu
function viewFileInModal(inputId) {
    const input = document.getElementById(inputId);
    const modal = document.getElementById('fileViewModal');
    const modalBody = document.getElementById('file-view-modal-body');
    
    if (input.files && input.files[0]) {
        const file = input.files[0];
        const fileType = file.type;
        
        if (fileType.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                modalBody.innerHTML = `
                    <h3>${file.name}</h3>
                    <img src="${e.target.result}" alt="${file.name}">
                `;
                modal.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else if (fileType === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = function(e) {
                modalBody.innerHTML = `
                    <h3>${file.name}</h3>
                    <embed src="${e.target.result}" type="application/pdf" width="100%" height="600px">
                `;
                modal.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            alert('Bu dosya türü görüntülenemiyor.');
        }
    } else {
        alert('Lütfen önce bir dosya seçiniz.');
    }
}

// Dosya seçildiğinde otomatik önizleme
document.addEventListener('DOMContentLoaded', function() {
    const fileInputs = document.querySelectorAll('.file-input');
    
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            previewFile(this.id);
        });
    });
    
    // Görüntüleme butonları için event listener
    const previewButtons = document.querySelectorAll('button[onclick*="previewFile"]');
    previewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const inputId = this.getAttribute('onclick').match(/previewFile\('(.+?)'\)/)[1];
            viewFileInModal(inputId);
        });
    });
    
    // Modal kapatma
    const fileViewModal = document.getElementById('fileViewModal');
    const fileViewModalClose = document.querySelector('.file-view-modal-close');
    
    if (fileViewModalClose) {
        fileViewModalClose.addEventListener('click', function() {
            fileViewModal.style.display = 'none';
        });
    }
    
    // Modal dışına tıklayınca kapat
    window.addEventListener('click', function(e) {
        if (e.target === fileViewModal) {
            fileViewModal.style.display = 'none';
        }
    });
    
    // Form gönderimi
    document.getElementById('participantForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Form validasyonu
        if (validateForm()) {
            // Form verilerini topla
            const formData = new FormData(this);
            
            // Ürün gruplarını topla
            const selectedProducts = [];
            const productCheckboxes = document.querySelectorAll('input[name="urunGruplari[]"]:checked');
            productCheckboxes.forEach(checkbox => {
                selectedProducts.push(checkbox.value);
            });
            
            // Başarı mesajı
            alert('Form başarıyla gönderildi! Bilgileriniz kaydedilmiştir.');
            
            // Form sıfırlama (isteğe bağlı)
            // this.reset();
        }
    });
});

// Form validasyon fonksiyonu
function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            field.style.borderColor = '#ddd';
        }
    });
    
    // Dosya boyutu kontrolü (5MB)
    const fileInputs = document.querySelectorAll('.file-input[required]');
    fileInputs.forEach(input => {
        if (input.files && input.files[0]) {
            const fileSize = input.files[0].size / 1024 / 1024; // MB
            if (fileSize > 5) {
                alert(`${input.previousElementSibling.textContent} dosyası 5MB'dan büyük olamaz.`);
                isValid = false;
            }
        }
    });
    
    if (!isValid) {
        alert('Lütfen tüm zorunlu alanları doldurunuz ve dosya boyutlarını kontrol ediniz.');
    }
    
    return isValid;
}