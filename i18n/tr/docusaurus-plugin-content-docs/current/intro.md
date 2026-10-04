---
sidebar_position: 1
---

# Giriş \{#introduction}

**Ryan Picker Page**, Unreal Engine için bir animasyon picker'ıdır: her karakter için bir kez düzenlediğiniz,
ardından Control Rig kontrollerini (ve seviyedeki aktörleri) tek tıklamayla seçmek ve yönlendirmek için kullandığınız
butonlar, slider'lar, anahtarlar, etiketler ve görsellerden oluşan bir tuval — çekimin ortasında viewport'ta,
rig hiyerarşisinde veya Sequencer ağacında arama yapmanıza gerek kalmaz.

Aynı pencere hem picker'ın kendisi hem de editörüdür. Düzeni oluşturmak için Düzenleme Moduna geçin; onunla animasyon yapmak için
Canlı Moda geri dönün. Sayfalar, projeler ve ekip arkadaşlarınız arasında paylaşabileceğiniz taşınabilir JSON dosyaları olarak
kaydedilir.

## Gereksinimler \{#requirements}

- Unreal Engine **5.6 – 5.8**
- Şu motor eklentileri etkin olmalıdır (eklenti bunları bağımlılık olarak bildirir): **Control Rig**,
  **Synthesis**, **Python Editor Script Plugin**

Eklenti yalnızca editörde çalışır. Hiçbir zaman paketlenmiş bir derlemeye girmez ve çalışma zamanında hiçbir şey eklemez.

## Kurulum \{#installation}

1. `RyanPickerPage` klasörünü projenizin `Plugins/` dizinine kopyalayın.
2. **Edit → Plugins** bölümünden etkinleştirin ve editörü yeniden başlatın.
3. **Tools → Ryan Picker Page** üzerinden bir picker açın.

## Bu belgelerde yolunuzu bulma \{#finding-your-way-around-these-docs}

Birinin sizin için hazırladığı bir sayfayı kullanan bir **animatörseniz**,
[Başlarken](./getting-started) sayfasıyla ve widget sayfalarının Canlı Mod bölümleriyle başlayın.

**Sayfa oluşturuyorsanız** şu sırayla okuyun: [Başlarken](./getting-started) →
[Control Rig ve Hedef Aktörler](./control-rig-and-targets) → widget türü sayfaları →
[Düzenleme ve Tuval Araçları](./editing-tools).

**Eklentiyi genişleten bir TD iseniz** doğrudan
[Blueprint API](./blueprint-api) ve [Python ile Betik Yazma](./python-scripting) sayfalarına gidin — kendi widget
varyantlarınızı Add Widget menüsünde görünen Blueprint alt sınıfları olarak nasıl dağıtacağınız da burada anlatılır.

### Tüm sayfalar \{#all-pages}

| Bölüm | Sayfalar |
|---|---|
| Temel Bilgiler | [Başlarken](./getting-started) |
| Widget türleri | [Seçim Butonu](./widget-select-button) · [1D Slider](./widget-1d-slider) · [2D Slider](./widget-2d-slider) · [Anahtar](./widget-toggle) · [Etiket](./widget-label) · [Görsel](./widget-image) |
| Sayfa oluşturma | [Düzenleme ve Tuval Araçları](./editing-tools) · [Pozu Yansıtma](./mirror-pose) · [Yer İmleri](./bookmarks) |
| Hedefleme nasıl çalışır | [Control Rig ve Hedef Aktörler](./control-rig-and-targets) · [Öznitelik Editörü ve Outliner](./attribute-editor-and-outliner) |
| Dosyalar ve ayarlar | [Kaydetme, Yükleme ve Dosyalar](./save-load-and-files) · [Editör Ayarları](./editor-settings) |
| Genişletme | [Blueprint API](./blueprint-api) · [Python ile Betik Yazma](./python-scripting) |
