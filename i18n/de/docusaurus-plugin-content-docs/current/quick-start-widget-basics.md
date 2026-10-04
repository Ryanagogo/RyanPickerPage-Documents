# Widget-Grundlagen \{#widget-basics}

### Widgets erstellen \{#create-widgets}

- Um neue Widgets zu erstellen, müssen Sie sich im Bearbeitungsmodus befinden
- Rechtsklicken Sie auf eine leere Stelle der Arbeitsfläche, um das Kontextmenü zu öffnen. Es enthält die Einträge zum Erstellen der verschiedenen Picker-Widget-Typen
- Ein neues Widget wird an der Stelle platziert, an der sich der Mauszeiger beim Rechtsklick befand.
- Beim Erstellen von Widgets wird ein Rückgängig-Eintrag zum Rückgängig-Stapel hinzugefügt, sodass Sie das Erstellen rückgängig machen und wiederherstellen können

### Widgets löschen \{#delete-widgets}

- Um Widgets zu löschen, müssen Sie sich im Bearbeitungsmodus befinden
- Mit der Taste „Entf“ löschen Sie alle ausgewählten Widgets
- Ein einzelnes Widget löschen Sie, indem Sie mit der rechten Maustaste darauf klicken, um das Widget-Kontextmenü zu öffnen. Ganz unten im Menü finden Sie den Eintrag zum Löschen dieses Widgets.
- Beim Löschen von Widgets wird ein Rückgängig-Eintrag zum Rückgängig-Stapel hinzugefügt, sodass Sie das Löschen rückgängig machen und wiederherstellen können.

### Widgets auswählen \{#select-widgets}

- Widgets können Sie sowohl im Live- als auch im Bearbeitungsmodus auswählen
- Sie wählen Widgets aus, indem Sie darauf klicken oder einen Rahmen um sie ziehen
- Im Live-Modus sind einige Widgets nicht auswählbar:
  - Beschriftungs-Widgets
  - Bild-Widgets
- Im Bearbeitungsmodus sind alle Widgets auswählbar
  - Im Outliner können Sie Widgets sperren, damit sie nicht auswählbar sind. Das ist nützlich, wenn mehrere Widgets übereinanderliegen.
- Die Reihenfolge, in der Widgets ausgewählt werden, wird gespeichert. Bestimmte Funktionen im Bearbeitungsmodus verwenden diese Auswahlreihenfolge

### Widgets transformieren \{#transform-widgets}

- Um Widgets zu transformieren, müssen Sie sich im Bearbeitungsmodus befinden
- **Verschieben**
  - Bewegen Sie bei einem oder mehreren ausgewählten Widgets die Maus über eines der ausgewählten Widgets, sodass der Mauszeiger zum Verschieben-Cursor wird. Dann können Sie klicken und ziehen – alle ausgewählten Widgets bewegen sich mit der Maus.
- **Drehen**
  - Wenn sich die Maus über dem Widget befindet und der Verschieben-Cursor angezeigt wird, wechselt der Cursor durch Gedrückthalten der Alt-Taste zum Drehen-Cursor. Dann können Sie klicken und ziehen – alle ausgewählten Widgets drehen sich stufenlos um das zuletzt ausgewählte Widget.
  - Halten Sie Alt und Umschalt gleichzeitig gedrückt, erfolgt die Drehung in 15-Grad-Schritten
- Beim Transformieren von Widgets wird ein Rückgängig-Eintrag zum Rückgängig-Stapel hinzugefügt, sodass Sie die Transformationen rückgängig machen und wiederherstellen können.

### Größe von Widgets ändern \{#resize-widgets}

- Um die Größe von Widgets zu ändern, müssen Sie sich im Bearbeitungsmodus befinden
- Wenn Sie den Mauszeiger über eine Kante oder Ecke eines Widgets bewegen, wechselt er zum Kanten- bzw. Ecken-Größenänderungscursor. Dann können Sie klicken und ziehen, um die Größe des Widgets zu ändern.
- Die Größenänderung funktioniert nur bei einem Widget
- Beim Ändern der Größe wird ein Rückgängig-Eintrag zum Rückgängig-Stapel hinzugefügt, sodass Sie die Größenänderung rückgängig machen und wiederherstellen können.

### Ausschneiden, Kopieren und Einfügen \{#cut-copy-and-paste}

- Um Widgets auszuschneiden, zu kopieren und einzufügen, müssen Sie sich im Bearbeitungsmodus befinden
- Mit den üblichen Tastenkürzeln Strg + X, Strg + C und Strg + V schneiden Sie ausgewählte Widgets aus, kopieren sie und fügen sie ein
- Bei einem einzelnen Widget können Sie mit der rechten Maustaste darauf klicken, um das Kontextmenü zu öffnen. Dort finden Sie die Einträge „Ausschneiden“ und „Kopieren“
- Mit Strg + V werden die Widgets an der Mausposition eingefügt
- Wenn Sie mit der rechten Maustaste auf eine leere Stelle der Arbeitsfläche klicken, finden Sie im Kontextmenü zwei Einfügeoptionen
  - **Einfügen**
    - Fügt Widgets an der Mausposition ein
  - **An Ort und Stelle einfügen**
    - Fügt Widgets an derselben Stelle ein, an der sie kopiert oder ausgeschnitten wurden

### Widget-Kontextmenü \{#widget-popup-menu}

- Um die Widget-Kontextmenüs zu sehen, müssen Sie sich im Bearbeitungsmodus befinden
- Wenn Sie mit der rechten Maustaste auf ein Widget klicken, öffnet sich ein Kontextmenü
  - Die ersten Einträge zeigen Namen und Typ des Widgets sowie die Optionen zum Ausschneiden und Kopieren
  - Der letzte Eintrag dient zum Löschen des Widgets
  - Die übrigen Menüeinträge hängen vom Typ des angeklickten Widgets ab

### Attribut-Editor \{#attribute-editor}

- Um den Attribut-Editor zu sehen, müssen Sie sich im Bearbeitungsmodus befinden
- Der Attribut-Editor zeigt nur dann Attribute an, wenn genau ein Widget ausgewählt ist. Sind mehrere Widgets ausgewählt, wird nichts angezeigt. (Dieses Verhalten wird sich in einer künftigen Version ändern)
- Die ersten Einträge zeigen Namen und Typ des Widgets sowie die Möglichkeit, das Widget zu sperren, damit es nicht ausgewählt werden kann
  - Die übrigen Einträge hängen vom Typ des ausgewählten Widgets ab

### Outliner \{#outliner}

- Um den Outliner zu sehen, müssen Sie sich im Bearbeitungsmodus befinden
- Der Outliner zeigt alle Widgets der Picker Page, gruppiert nach Anzeigeebene, nach Widget-Typ oder nach Gruppe (dies betrifft Toggle-Widget-Gruppen)
- Ist ein Widget auf der Arbeitsfläche ausgewählt, ist auch sein Eintrag im Outliner ausgewählt – und umgekehrt.
- Mit einem Doppelklick auf einen Widget-Eintrag im Outliner können Sie das Widget umbenennen
- In der Ansicht nach Anzeigeebene gibt es Kontrollkästchen, mit denen Sie Widgets sperren oder entsperren können. Gesperrte Widgets können im Bearbeitungsmodus nicht ausgewählt werden. Das ist nützlich, wenn mehrere Widgets übereinanderliegen.
- Wenn Sie ein Widget im Outliner auswählen, können Sie mit dem Tastenkürzel „F“ die Ansicht auf das Widget fokussieren. Das hilft, wenn Sie ein bestimmtes Widget nur schwer finden
