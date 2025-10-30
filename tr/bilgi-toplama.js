// on-kayit-formu.js'deki countries objesini kullan

// Dosya önizleme fonksiyonu (küçük önizleme)
function previewFile(inputId) {
    const input = document.getElementById(inputId);
    const previewDiv = document.getElementById(inputId + 'Preview');

    if (input && previewDiv && input.files && input.files[0]) {
        const file = input.files[0];
        const fileSize = (file.size / 1024 / 1024).toFixed(2);
        const fileType = file.type;

        let previewContent = `
            <div class="file-name">${file.name}</div>
            <div class="file-size">Boyut: ${fileSize} MB</div>
        `;

        if (fileType.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
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

    if (input && modal && modalBody && input.files && input.files[0]) {
        const file = input.files[0];
        const fileType = file.type;

        if (fileType.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                modalBody.innerHTML = `
                    <h3>${file.name}</h3>
                    <img src="${e.target.result}" alt="${file.name}">
                `;
                modal.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else if (fileType === 'application/pdf') {
            const reader = new FileReader();
            reader.onload = function (e) {
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
document.addEventListener('DOMContentLoaded', function () {
    const fileInputs = document.querySelectorAll('.file-input');

    fileInputs.forEach(input => {
        input.addEventListener('change', function () {
            previewFile(this.id);
        });
    });

    // Görüntüleme butonları için event listener
    const previewButtons = document.querySelectorAll('button[onclick*="previewFile"]');
    previewButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const onclickAttr = this.getAttribute('onclick');
            if (onclickAttr) {
                const match = onclickAttr.match(/previewFile\('(.+?)'\)/);
                if (match && match[1]) {
                    viewFileInModal(match[1]);
                }
            }
        });
    });

    // Modal kapatma
    const fileViewModal = document.getElementById('fileViewModal');
    const fileViewModalClose = document.querySelector('.file-view-modal-close');

    if (fileViewModalClose && fileViewModal) {
        fileViewModalClose.addEventListener('click', function () {
            fileViewModal.style.display = 'none';
        });
    }

    // Modal dışına tıklayınca kapat
    if (fileViewModal) {
        window.addEventListener('click', function (e) {
            if (e.target === fileViewModal) {
                fileViewModal.style.display = 'none';
            }
        });
    }

    // KVKK checkbox kontrolü
    const kvkkCheckbox = document.getElementById('kvkkConsent');
    const submitBtn = document.getElementById('submitFormBtn');
    const kvkkLink = document.getElementById('kvkkLink');

    if (kvkkCheckbox && submitBtn) {
        kvkkCheckbox.addEventListener('change', function () {
            submitBtn.disabled = !this.checked;
        });
    }

    // KVKK modal açma
    if (kvkkLink) {
        kvkkLink.addEventListener('click', function (e) {
            e.preventDefault();
            const kvkkModal = document.getElementById('kvkkModal');
            const kvkkModalTitle = document.getElementById('kvkk-modal-title');
            const kvkkModalBody = document.getElementById('kvkk-modal-body');

            if (kvkkModal && kvkkModalTitle && kvkkModalBody && typeof footerModalContents !== 'undefined' && footerModalContents.kvkk) {
                kvkkModalTitle.textContent = footerModalContents.kvkk.title;
                kvkkModalBody.innerHTML = footerModalContents.kvkk.content;
                kvkkModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    }

    // KVKK modal butonları
    const kvkkModalClose = document.getElementById('kvkkModalClose');
    const kvkkModalKapat = document.getElementById('kvkkModalKapat');
    const kvkkModalKabul = document.getElementById('kvkkModalKabul');
    const kvkkModal = document.getElementById('kvkkModal');

    if (kvkkModalClose && kvkkModal) {
        kvkkModalClose.addEventListener('click', function () {
            kvkkModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (kvkkModalKapat && kvkkModal) {
        kvkkModalKapat.addEventListener('click', function () {
            kvkkModal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }

    if (kvkkModalKabul && kvkkModal) {
        kvkkModalKabul.addEventListener('click', function () {
            kvkkModal.style.display = 'none';
            document.body.style.overflow = '';
            if (kvkkCheckbox) {
                kvkkCheckbox.checked = true;
                if (submitBtn) {
                    submitBtn.disabled = false;
                }
            }
        });
    }

    if (kvkkModal) {
        kvkkModal.addEventListener('click', function (e) {
            if (e.target === kvkkModal) {
                kvkkModal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    }

    // Form gönderimi
    const participantForm = document.getElementById('participantForm');
    if (participantForm) {
        participantForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (kvkkCheckbox && !kvkkCheckbox.checked) {
                alert('Lütfen KVKK metnini okuyup onaylayınız.');
                return;
            }

            if (validateForm()) {
                const selectedProducts = [];
                const productCheckboxes = document.querySelectorAll('input[name="urunGruplari[]"]:checked');
                productCheckboxes.forEach(checkbox => {
                    selectedProducts.push(checkbox.value);
                });

                alert('Form başarıyla gönderildi! Bilgileriniz kaydedilmiştir.');
            }
        });
    }
});

// Form validasyon fonksiyonu
function validateForm() {
    const requiredFields = document.querySelectorAll('[required]');
    let isValid = true;

    requiredFields.forEach(field => {
        if (field.type === 'checkbox') {
            if (!field.checked) {
                isValid = false;
            }
        } else if (!field.value.trim()) {
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
            const fileSize = input.files[0].size / 1024 / 1024;
            if (fileSize > 5) {
                const labelText = input.previousElementSibling ? input.previousElementSibling.textContent : 'Dosya';
                alert(`${labelText} 5MB'dan büyük olamaz.`);
                isValid = false;
            }
        }
    });

    if (!isValid) {
        alert('Lütfen tüm zorunlu alanları doldurunuz ve dosya boyutlarını kontrol ediniz.');
    }

    return isValid;
}