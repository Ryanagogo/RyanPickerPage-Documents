---
sidebar_position: 14
---

# Kaydetme, Yükleme ve Dosyalar \{#saving-loading--files}

Bir sayfa, diskte seçtiğiniz herhangi bir yerde tek bir **JSON dosyasına** kaydedilir. Sayfalar Unreal
asset'leri değildir: `Content/` içinde bulunmazlar, oluşturuldukları projeye ihtiyaç duymazlar ve
herhangi bir metin dosyası gibi paylaşılabilir, e-postayla gönderilebilir veya sürüm kontrolüne alınabilirler.

Tek bir kayıt tüm sayfayı taşır: tüm bağlantıları ve stilleriyle her widget,
[yer imi satırı](./bookmarks), Anahtar Grupları ve [Pose Map](./mirror-pose).

## Dosya menüsü \{#the-file-menu}

| Öğe | |
|---|---|
| **Kaydet** | sayfanın geçerli dosyasına geri yazar; hiç kaydedilmemiş bir sayfada Farklı Kaydet gibi davranır |
| **Farklı Kaydet** | yerel kaydetme iletişim kutusu |
| **Yükle** | yerel açma iletişim kutusu |
| **Son Kullanılanı Yükle** | en son kullanılan dosyalar, iletişim kutusu olmadan |
| **Yeniden Yükle** | geçerli dosyayı diskten yeniden okur |
| **Pose Map…** | [Pose Map iletişim kutusu](./mirror-pose#the-pose-map) |
| **Settings…** | [Editör Ayarları iletişim kutusu](./editor-settings) |

Kaydetme ve yükleme iletişim kutuları en son kullandığınız dizinlerde yeniden açılır.

## Yardım menüsü \{#the-help-menu}

Öğeler tamamen veriye dayalıdır — sayfanın Class Defaults panelinde düzenlenen bir Etiket/URL/İpucu
öğeleri listesi. Kod değişikliği veya yeniden derleme olmadan bir öğe ekleyin, kaldırın, yeniden sıralayın veya hedefini değiştirin;
bir öğeye tıklamak URL'sini işletim sisteminizin varsayılan tarayıcısında açar. Bir öğe veriye dayalı değil,
sabittir: eklenti sürümünü, Unreal Engine sürümünü ve yazarı basit bir bilgi
iletişim kutusunda gösteren **Hakkında**.

## Eski dosyalar yüklenmeye devam eder \{#old-files-keep-loading}

Kayıt dosyaları şema sürümlüdür. Daha eski bir dosyayı yüklemek, onu aradaki her şema değişikliğinden
otomatik olarak geçirerek taşır — eklentinin ilk sürümlerinden kalma sayfalar güncel sürüme
yüklenir ve yalnızca yeniden kaydetmek onları güncel sürümde yazar. Taşınamayan
(veya sizinkinden *daha yeni* bir eklentiden gelen) dosyalar yarım yüklenmek yerine
açık bir hatayla reddedilir.

Gizlilikle ilgili bir not: Bir Seçim Butonunun [Python betiği](./python-scripting) dosyada
Base64 ile kodlanmış olarak saklanır — kodlanmış, şifrelenmemiş. Betik içeren sayfa dosyalarına
betiklerin kendisi gibi davranın.

## Oturum durumu \{#session-state}

Sayfa dosyasının yanında — ama asla içinde değil — eklenti her dosya yolu için nerede kaldığınızı
hatırlar: tuval kaydırma/yakınlaştırması, etkin Control Rig, Düzenleme veya Canlı Mod. Aynı dosyayı
yarın yükleyin; tuval tam olarak bıraktığınız yerde olur. Bu bilgiler makinenizde dosya yoluna göre
tutulduğundan, bir sayfayı paylaşmak yalnızca düzeni paylaşır — alıcılar kendi görünüm durumlarını alır.
90 gün (yapılandırılabilir) boyunca kullanılmayan kayıtlar temizlenir.

## Eklentinin kendi dosyalarını tuttuğu yer \{#where-the-plugin-keeps-its-own-files}

```
%APPDATA%\RyanTechAnimTools\RyanPicker\
├── settings.json              # son dosyalar, son iletişim kutusu dizinleri, outliner görünümü
├── editor_settings.json       # Editör Ayarları iletişim kutusunun değerleri
└── page_session_state.json    # mutlak yola göre tutulan dosya başına oturum durumu
```

Bunlar kullanıcıya ve makineye özgüdür. Silinmeleri kolaylıkları (son dosyalar, geri yüklenen
görünümler, ayarlar) kaybettirir ama asla sayfa verilerini değil — sayfalar yalnızca kaydettiğiniz dosyalarda bulunur.
