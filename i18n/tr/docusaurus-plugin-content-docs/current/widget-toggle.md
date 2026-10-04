---
sidebar_position: 6
---

# Anahtar \{#toggle}

*İki durumlu bir anahtar — IK/FK bunun klasik kullanımıdır.*

## Canlı Modda \{#in-live-mode}

Bir Anahtar iki duruma sahiptir: **A** ve **B**. Tıklamak bunlar arasında geçiş yapar ve az önce
etkin hale gelen durum kendi yapılandırmasını uygular: etiketi, renkleri; atanmış rig kontrolleri
ve aktörleri seçilir ve kendi [Python betiği](./python-scripting) çalışır.
Bir Anahtar'daki her şey **durum başına** ayarlanır — bir IK/FK anahtarı bir durumda IK kontrollerini,
diğerinde FK kontrollerini seçebilir ve her biri için farklı bir renk kullanabilir.

## Anahtar Grupları \{#toggle-groups}

Birkaç Anahtarı gruplayın (iki veya daha fazlası seçiliyken sağ tık menüsü), radyo butonları gibi
davranırlar: her Anahtar, durumlarından hangisinin "açık" sayılacağını bildirir (**Açık Durumu**) ve
bir grup üyesini açmak diğer tüm üyeleri kapatır. Gruplanmış widget'lar tuvalde ayırt edici bir
kenarlıkla görünür, gruplar adlandırılabilir ve yeniden adlandırılabilir ve
[Outliner'ın **Gruba Göre** görünümü](./attribute-editor-and-outliner) her grubun üyelerini kendi
başlığı altında listeler. Bir grubu kopyalamak, onu üyeleri ve adı dahil tamamen yeni bir grup olarak yeniden oluşturan
bir yapıştırma seçeneği sunar.

## Bir rig'in bool kanalını yönlendirme \{#driving-a-rigs-bool-channel}

Kontrolleri seçmenin ötesinde, bir Anahtar doğrudan bir Control Rig kontrolündeki **bool animasyon kanalına**
bağlanabilir — örneğin rig üzerindeki asıl IK/FK geçiş özniteliğine:

- Kanalın **üst kontrolünü** ve **kanalın** kendisini belirtin ve hangi Anahtar durumunun
  kanalın *true* olduğu anlamına geldiğini seçin.
- Ardından Anahtar'a tıklamak bool değerini de yazar.
- Bağlantı çift yönlüdür: sayfa kanalın canlı değerini sorgular ve bunu Anahtar'ın görsel durumuna
  yansıtır; böylece key'lenmiş bir IK/FK geçişinin ötesine scrub yapmak, tıklama davranışını yeniden çalıştırmadan
  sayfadaki butonu değiştirir.

## Oluşturma \{#authoring}

Öznitelik Editörü alanları: durum başına etiket / arka plan rengi / yazı tipi rengi / yazı tipi boyutu / kontrol
adları / hedef aktörler / Python betiği; geçerli durum ve Açık Durumu; animasyon kanalı bool bağlantısı
(etkinleştirme, üst kontrol, kanal adı, true durumu); ve ortak
konum/boyut/döndürme/köşe yarıçapı bloğu.

## Betik Yazma \{#scripting}

`URyanPickerToggleFunctionLibrary` (kategori `Ryan Picker Page|Toggle`). Fonksiyonların çoğu bir
`ERyanPickerToggleState` alır ve bir durumun yapılandırmasını okur/yazar:

| Fonksiyon | |
|---|---|
| `GetToggleState` / `SetToggleState` | geçerli durum |
| `GetOnState` / `SetOnState` | grup dışlayıcılığı için hangi durumun "açık" olduğu |
| `GetLabelForState` / `SetLabelForState` | |
| `GetControlNamesForState` / `SetControlNamesForState` | |
| `GetTargetActorGuidsForState` / `SetTargetActorGuidsForState` | |
| `GetTargetActorBindingGuidsForState` / `SetTargetActorBindingGuidsForState` | |
| `GetColorForState` / `SetColorForState` · `GetFontColorForState` / `SetFontColorForState` | |
| `GetFontSizeForState` / `SetFontSizeForState` | |
| `GetPythonScriptForState` / `SetPythonScriptForState` | |
| `GetUseAnimChannelBool` / `SetUseAnimChannelBool` | animasyon kanalı bağlantısının ana anahtarı |
| `GetAnimChannelParentControlName` / `SetAnimChannelParentControlName` | |
| `GetAnimChannelName` / `SetAnimChannelName` | |
| `GetAnimChannelTrueState` / `SetAnimChannelTrueState` | |

Blueprint alt sınıfları `BI_RyanPickerToggle` arayüzünü uygulayabilir: `OnToggleConstructed`,
`OnToggleClicked`, `OnToggleStateChanged(ERyanPickerToggleState)`,
`OnControlRigControlsSelected`, `OnTargetActorsSelected`, ayrıca
[ortak yaşam döngüsü olayları](./blueprint-api#event-hooks).
