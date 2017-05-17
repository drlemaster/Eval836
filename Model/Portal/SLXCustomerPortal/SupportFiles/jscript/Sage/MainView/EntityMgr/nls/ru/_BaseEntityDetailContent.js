define(
    "Sage/MainView/EntityMgr/nls/ru/_BaseEntityDetailContent", {
        //tab names
        FilterTabTitle: 'Фильтры',
        MetricTabTitle: 'Метрики',
        PropertyTabTitle: 'Поля',
        CalcFieldTabTitle: 'Вычисляемые поля',
        EntityTabTitle: 'Сущности',
        RelationTabTitle: 'Отношения',

        //Dialog Names
        // Add <Dialogue Name> to <Entity Name> Entity.
        dialogTitleAddField: 'Add Field to ${0} Entity',
        dialogTitleAddFilter: 'Add Filter to ${0} Entity',
        dialogTitleAddMetric: 'Add Metric to ${0} Entity',
        dialogTitleAddRelationship: 'Add Relationship to ${0} Entity',
        // Edit <Field Name> in <Entity Name> Entity.
        editDialogTitle: 'Edit ${0} in ${1} Entity',

        FilterDialogTitle: 'Фильтр',
        MetricDialogTitle: 'Метрика',
        PropertyDialogTitle: 'Поле',
        RelationDialogTitle: 'Связь',

        //filter grid column names
        FilterGridColumnFilter: 'Название фильтра',
        MetricGridColumnMetric: 'Название метрики',
        FilterGridColumnDisplay: 'Название',
        FilterGridColumnProperty: 'Поле',
        FilterGridColumnType: 'Метрика или фильтр',
        FilterGridColumnIsMetric: 'На инф. панели',
        FilterGridColumnLastUpdated: 'Последнее изменение',
        FilterGridColumnDetails: 'Тип',

        //filter grid detail columns Formats
        FilterGridDetailsDistinctFilter: "Уникальный",
        FilterGridDetailsDateDiffMetricFilter: "Промежуток между датами",
        FilterGridDetailsRangeFilter: "Диапазон",
        FilterGridDetailsMetricFilter: "Метрика",
        FilterGridDetailsUserLookupFilter: "Поиск пользователя",
        FilterGridDetailsLookupFilter: "Поиск",
        FilterGridDetailsCustom: "Особые",

        //grid icons titles
        GridHelp: 'Помощь',

        //filter grid icon titles
        FilterGridAdd: 'Добавить фильтр',
        FilterGridRemove: 'Убрать фильтр',
        FilterGridEdit: 'Редактировать фильтр',

        MetricGridAdd: 'Добавить метрику',
        MetricGridRemove: 'Убрать метрику',
        MetricGridEdit: 'Редактировать метрику',

        PropertyGridAdd: 'Добавить поле',
        PropertyGridRemove: 'Удалить поле',
        PropertyGridEdit: 'Редактировать поле',

        CalculatedGridAdd: 'Добавить вычисл. поле',
        CalculatedGridRemove: 'Удалить вычисл. поле',
        CalculatedGridEdit: 'Изменить вычисл. поле',

        // Add/Edit labels
        lblFilterName: "Название фильтра",
        lblDisplayName: "Название",
        lblFilterDp: "Поля",
        lblTypeDp: "Тип",
        lblCharacter: "Символ",
        lblTypeSpecificContentBox: "Поле данных, уникальных для типа",
        lblSaveButton: "Сохранить",
        lblCancelButton: "Отмена",
        lblOkButton: "ОК",
        lblWarning: "Выберите элемент.",
        confirmDeleteFmtTxt: "Вы уверены, что хотите удалить эти ${0} элементы?",
        filtersFor: "Фильтры для",
        metricsFor: "Метрики для",
        propertyFor: "Поля для",
        calculatedFor: "Вычисляемое поле для",
        defaultRangeRowValue: "Введите значение",

        //range column names
        customSql: 'Пользовательский SQL',
        displayName: 'Название',
        "Нижний": 'Нижний',
        rangeId: 'ИД диапазона',
        rangeName: 'Имя диапазона',
        "Верхний": 'Верхний',

        //operations
        SUM: 'Всего (Сумма)',
        "Содержит": 'Содержит',
        StartsWith: 'Начинается с',
        EndsWith: 'Заканчивается на',
        LessThan: 'Меньше чем',
        GreaterThan: 'Больше чем',
        LessThanEqual: 'Меньше чем или равно',
        GreaterThanEqual: 'Больше чем или равно',
        "Равно": 'Равно',
        NotEqual: 'Не равно',
        COUNT: 'Кол-во',
        AVG: 'Среднее',
        MIN: 'Миниммальное значение',
        MAX: 'Максимальное значение',
        totalRecordCountLabel: "Всего записей: ${0}",

        // property and calculated fields grid
        propertyName: 'Имя',
        Description: 'Описание',
        propertyType: 'Тип',
        "Включено": 'Включено',
        calculatedFields: 'Рассчитано',
        generate: 'Создать',
        key: 'key',


        //relationships
        relationFor: 'Отношение для',
        childEntity: 'Порожденный',
        childProperty: "Child's Field",
        parentEntity: 'Родитель',
        parentProperty: "Parent's Field",
        editable: "Редактируемый",
        cardinality: "Мощность",
        relationship: "Связь",

        // data types
        "Текст": 'Текст',
        memo: 'Мемо',
        unicodeText: 'Юникод Текст',
        unicodeMemo: 'Юникод МЕМО',
        "Целое число": 'Целое число',
        "Double": 'Double',
        single: 'Однобайтовое целое',
        "Десятичный": 'Десятичный',
        "краткий": 'краткий',
        standardId: 'Стандартный ИД',
        trueFalse: 'Истина/Ложь',
        yesNo: 'Да/Нет',
        "Логическое значение": 'Логическое значение',
        dateTime: 'Дата/Время',
        email: 'Эл.почта',
        phone: 'Телефон',
        pickList: 'Справочник',
        owner: 'Куратор',
        lookup: 'Поиск',
        dependencyLookup: 'Поиск зависимости',
        "Символ": 'Символ',
        enum_: 'Перечисляемый тип',
        "Глоб. идентификатор": 'Глоб. идентификатор',
        "Байт": 'Байт',
        "Двоичное": 'Двоичное',
        "URL": 'URL',
        "Строка": 'Строка',
        "Число": 'Число',

        //errors
        notUniqueFor: 'не уникально для',

        lblPluralName: "Display Plural Name",
        lblTitle: 'Название',
        IsExtension: 'Явл. расширением',
        AdvOptions: 'Расширенные параметры',
        lblImport: 'Импорт',
        lblMatch: 'Выполняются',
        lblBulkUpdate: 'Масс-обновление',
        lblAudited: 'Проверка',
        lblPut: 'Put',
        lblPost: 'Post',
        lblDelete: 'Удалить',
        lblHistory: 'Трассировать Историю в',
        metricNotEditable: 'This metric is not editable.'

    });