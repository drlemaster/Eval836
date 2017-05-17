define(
    "Sage/MainView/EntityMgr/nls/de/_BaseEntityDetailContent", {
        //tab names
        FilterTabTitle: 'Filter',
        MetricTabTitle: 'Kennzahlen',
        PropertyTabTitle: 'Felder',
        CalcFieldTabTitle: 'Berechnete Felder',
        EntityTabTitle: 'Entitäten',
        RelationTabTitle: 'Beziehungen',

        //Dialog Names
        // Add <Dialogue Name> to <Entity Name> Entity.
        dialogTitleAddField: 'Add Field to ${0} Entity',
        dialogTitleAddFilter: 'Add Filter to ${0} Entity',
        dialogTitleAddMetric: 'Add Metric to ${0} Entity',
        dialogTitleAddRelationship: 'Add Relationship to ${0} Entity',
        // Edit <Field Name> in <Entity Name> Entity.
        editDialogTitle: 'Edit ${0} in ${1} Entity',

        FilterDialogTitle: 'Filter',
        MetricDialogTitle: 'Metrik',
        PropertyDialogTitle: 'Feld',
        RelationDialogTitle: 'Beziehung',

        //filter grid column names
        FilterGridColumnFilter: 'Filtername',
        MetricGridColumnMetric: 'Kennzahlname',
        FilterGridColumnDisplay: 'Anzeigename',
        FilterGridColumnProperty: 'Feld',
        FilterGridColumnType: 'Kennzahl oder Filter',
        FilterGridColumnIsMetric: 'Im Cockpit',
        FilterGridColumnLastUpdated: 'Zuletzt geändert',
        FilterGridColumnDetails: 'Typ',

        //filter grid detail columns Formats
        FilterGridDetailsDistinctFilter: "Eindeutig",
        FilterGridDetailsDateDiffMetricFilter: "Kennzahl zum Datumsunterschied",
        FilterGridDetailsRangeFilter: "Bereich",
        FilterGridDetailsMetricFilter: "Metrik",
        FilterGridDetailsUserLookupFilter: "Benutzersuche",
        FilterGridDetailsLookupFilter: "Suchen",
        FilterGridDetailsCustom: "Benutzerdefiniert",

        //grid icons titles
        GridHelp: 'Hilfe',

        //filter grid icon titles
        FilterGridAdd: 'Filter hinzufügen',
        FilterGridRemove: 'Filter entfernen',
        FilterGridEdit: 'Filter bearbeiten',

        MetricGridAdd: 'Kennzahl hinzufügen',
        MetricGridRemove: 'Kennzahl entfernen',
        MetricGridEdit: 'Kennzahl bearbeiten',

        PropertyGridAdd: 'Feld hinzufügen',
        PropertyGridRemove: 'Feld entfernen',
        PropertyGridEdit: 'Feld bearbeiten',

        CalculatedGridAdd: 'Berechnetes Feld hinzufügen',
        CalculatedGridRemove: 'Berechnetes Feld entfernen',
        CalculatedGridEdit: 'Berechnetes Feld bearbeiten',

        // Add/Edit labels
        lblFilterName: "Filtername",
        lblDisplayName: "Anzeigename",
        lblFilterDp: "Felder",
        lblTypeDp: "Typ",
        lblCharacter: "Zeichen",
        lblTypeSpecificContentBox: "Typspezifischer Inhaltsbereich",
        lblSaveButton: "Speichern",
        lblCancelButton: "Abbrechen",
        lblOkButton: "OK",
        lblWarning: "Wählen Sie ein Element aus.",
        confirmDeleteFmtTxt: "Möchten Sie diese ${0} Elemente wirklich löschen?",
        filtersFor: "Filter für",
        metricsFor: "Kennzahlen für",
        propertyFor: "Felder für",
        calculatedFor: "Berechnete Felder für",
        defaultRangeRowValue: "Wert eingeben",

        //range column names
        customSql: 'Benutzerdefinierter SQL-Befehl',
        displayName: 'Anzeigename',
        "Unterer": 'Unterer',
        rangeId: 'Bereichs-ID',
        rangeName: 'Bereichsname',
        "Obergrenze": 'Obergrenze',

        //operations
        SUM: 'Gesamt (Summe)',
        "Enthält": 'Enthält',
        StartsWith: 'Beginnt mit',
        EndsWith: 'Endet mit',
        LessThan: 'Kleiner als',
        GreaterThan: 'Größer als',
        LessThanEqual: 'Kleiner gleich',
        GreaterThanEqual: 'Größer gleich',
        "Gleich": 'Gleich',
        NotEqual: 'Ist ungleich',
        COUNT: 'Anzahl',
        AVG: 'Durchschnitt',
        MIN: 'Minimum',
        MAX: 'Maximalwert',
        totalRecordCountLabel: "Gesamtzahl Datensätze: ${0}",

        // property and calculated fields grid
        propertyName: 'Name',
        Description: 'Beschreibung',
        propertyType: 'Typ',
        "Enthalten": 'Enthalten',
        calculatedFields: 'Berechnet',
        generate: 'Erstellen',
        key: 'Key',


        //relationships
        relationFor: 'Beziehung für',
        childEntity: 'Untergeordnet',
        childProperty: "Child's Field",
        parentEntity: 'Übergeordnet',
        parentProperty: "Parent's Field",
        editable: "Bearbeitbar",
        cardinality: "Kardinalität",
        relationship: "Beziehung",

        // data types
        "Text": 'Text',
        memo: 'Memo',
        unicodeText: 'Unicode-Text',
        unicodeMemo: 'Unicode-Memo',
        "Ganzzahl": 'Ganzzahl',
        "Double": 'Double',
        single: 'Single',
        "Dezimal": 'Dezimal',
        "kurz": 'kurz',
        standardId: 'Standard-ID',
        trueFalse: 'Wahr/Falsch',
        yesNo: 'Ja/Nein',
        "Boolesch": 'Boolesch',
        dateTime: 'Datum/Zeit',
        email: 'E-Mail',
        phone: 'Telefon',
        pickList: 'Auswahlliste',
        owner: 'Zugriffsberechtigter',
        lookup: 'Suchen',
        dependencyLookup: 'Abhängigkeitensuche',
        "Zeichen": 'Zeichen',
        enum_: 'Enum',
        "GUID": 'GUID',
        "Byte": 'Byte',
        "Binär": 'Binär',
        "URL": 'URL',
        "Zeichenfolge": 'Zeichenfolge',
        "Zahl": 'Zahl',

        //errors
        notUniqueFor: 'ist nicht eindeutig für',

        lblPluralName: "Display Plural Name",
        lblTitle: 'Titel',
        IsExtension: 'Ist Erweiterung',
        AdvOptions: 'Erweiterte Optionen',
        lblImport: 'Importieren',
        lblMatch: 'Abgleichen',
        lblBulkUpdate: 'Sammelaktualisierung',
        lblAudited: 'Geprüft',
        lblPut: 'Put',
        lblPost: 'Post',
        lblDelete: 'Löschen',
        lblHistory: 'Historie nachverfolgen in',
        metricNotEditable: 'This metric is not editable.'

    });