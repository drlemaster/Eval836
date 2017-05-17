define('Sage/nls/Dashboard_zh-cn',{
'dijit/nls/loading':{"loadingState":"正在加载...","errorState":"对不起，发生了错误","_localized":{}}
,
'dijit/nls/common':{"buttonOk":"确定","buttonCancel":"取消","buttonSave":"保存","itemClose":"关闭","_localized":{}}
,
'dijit/form/nls/validate':{"invalidMessage":"输入的值无效。","missingMessage":"该值是必需的。","rangeMessage":"此值超出范围。","_localized":{}}
,
'Sage/UI/nls/Dialogs':{"yesText":"是","noText":"否","okText":"确定","cancelText":"取消","_localized":{}}
,
'Sage/Utility/nls/Utility':{"dangerousValueWarn":"检测到可能危险的窗体值。请避免无效的字符组合。示例:“&lt;script&gt;&lt;/script&gt;”。另请避免文件名中的无效字符:\\ / : * ? \" &lt; &gt; |","_localized":{}}
,
'Sage/Utility/nls/Email':{"RecipientInfoError":"尝试读取收件人信息时发生意外错误: ${0}","MailToProtocolError":"尝试使用 mailto: 协议 (href.length=${0}) 生成电子邮件时发生错误。可能需要减少电子邮件收件人的数量。浏览器错误: ${1}。","InvalidContextError":"无法处理电子邮件申请。仅对于联系人或销售线索支持此操作。","InvalidArgumentError":"无法处理电子邮件申请。参数无效。","FilteredOutMsg":"已筛选掉: 不可请求: ${0}；无效: ${1}；重复: ${2}","AllInvalidEmailError":"集合不包含一个使用有效和/或请求的电子邮件地址的实体。","EmailFieldQueried":"查询的电子邮件字段为: ${0}。","EntityInfoError":"尝试检索实体信息失败。","CapabilityModeError":"仅在列表视图中提供向所选组写电子邮件的功能。","CapabilityEntityError":"仅对于联系人或销售线索提供向所选组写电子邮件的功能。","NoRowsSelectedError":"未选择任何行。","_localized":{}}
,
'Sage/Groups/nls/GroupManager':{"ConfirmDeleteMessage":"是否确定要删除当前组?","ConfirmDeleteFmtMessage":"是否确定要删除该组: ${0}","InvalidSortStringMessage":"错误: 排序字符串无效 -","InvalidConditionStringMessage":"错误: 条件字符串无效 -","InvalidLayoutConditionStringMessage":"错误: 布局字符串无效 -","noneSelectedTitle":"未选择任何记录","noneSelectedPromptFmt":"未选择任何记录。将添加整个组中的 ${0} 条记录。是否继续?","noneSelectedRemovePromptFmt":"未选择任何记录。将移除整个组中的 ${0} 条记录。是否继续?","noRecordsInGroup":"未选择该组中的任何记录。","newGroupTitle":"向新组添加记录","newGroupNamePrompt":"将向该新组添加 ${0} 条选中的记录。<br><br>组名: <br>${1}","newGroupRePrompt":"&nbsp;&nbsp;<i>请输入组名。</i>","invalidCharMsg":"名称不得包含: / \\ : * ? \" <> | 和 '","groupNameText":"组名:","saveLookupDlgTitle":"将查找结果另存为新组","yesCaption":"是","noCaption":"否","cancelCaption":"取消","okCaption":"确定","LOCALSTORE_NAMESPACE":"SageGroups","exportToExcel":"已弃用此方法，请查看 Sage.TaskPane.CommonTasksTasklet.exportToExcel。","createAdHocGroupJob_Description":"Group: ${0}","createAdHocGroupJob_Title":"Creating Group","createAdHocGroupJobError":"Sorry an error occurred during the creation of the group: ${0}","createAdHocGroupJobProcessingJobMsg":"You may continue waiting for completion, or you may close this message.  You will receive a notification when the group is complete.","_localized":{}}
,
'Sage/Utility/nls/Jobs':{"errorMessage":"抱歉，执行作业“${0}”期间发生错误: ${1} ${2}。","jobCompletedSuccessfully":"作业已成功完成。","unexpectedErrorMessage":"抱歉，执行作业“${0}”期间发生意外错误。","repeatIndefinitely":"无限重复","cancelButtonCaption":"取消","defaultProgressDialogTitle":"正在运行作业","closeButtonCaption":"关闭","dataExpiredRefreshPage":"This job's information has expired, please refresh the page.","generalCheckJobService":"This job's information was not able to be requested, please check the job service.","JobServerviceOff":"The job service is currently not available, please turn on or restart the service.","_localized":{}}
,
'Sage/UI/Controls/nls/_DialogHelpIconMixin':{"helpTooltip":"帮助","_localized":{}}
,
'Sage/MailMerge/nls/Helper':{"destkopErrorsError":"调用 DesktopErrors() 失败。","mailMergeInfoStoreError":"调用 MailMergeInfoStore() 失败。","_localized":{}}
,
'Sage/MailMerge/nls/Service':{"selectContactCaption":"选择联系人","selectOppContactCaption":"选择销售机会联系人","selectLeadCaption":"选择销售线索","errorAttachmentUpdate":"无法更新附件记录。","errorHistoryUpdate":"无法更新历史记录。","errorXmlHttp":"处理 ${0} 的申请时发生错误。${1} (${2})。","_localized":{}}
,
'Sage/MailMerge/nls/Lookup':{"accountCaption":"客户","companyCaption":"公司","contactTitle":"选择联系人","emailCaption":"电子邮件","firstNameCaption":"名字","invalidOptionsText":"未定义选项参数或 options.onSelect，或者定义不正确。","lastNameCaption":"姓氏","leadTitle":"选择销售线索","mobileCaption":"移动电话","opportunityCaption":"销售机会","workCaption":"单位电话","okText":"确定","_localized":{}}
,
'Sage/MailMerge/nls/Loader':{"decodeFailed":"调用 DecodeMailMergeJsonFromUrl() 失败。","_localized":{}}
,
'Sage/Services/nls/ActivityActionProcessor':{"btnOkayText":"确定","btnCancelText":"取消","btnCloseText":"关闭","btnHelpText":"帮助","processingText":"正在处理申请，请稍候...","failureText":"很抱歉，操作已失败，发生了错误。","titleText":"流程","_localized":{}}
,
'Sage/Utility/nls/Activity':{"ToDo":"待办事项","PhoneCall":"电话呼叫","Meeting":"会议","Personal":"个人活动","Literature":"营销材料","Fax":"传真","Letter":"信函","Note":"备注","Email":"电子邮件","Document":"文档","DatabaseChange":"数据库变更","Event":"事件","ScheduledEvent":"已安排的事件","Contact":"联系人","Lead":"销售线索","New":"新建","Change":"更改","Deleted":"已删除","Confirm":"确认","Decline":"拒绝","Unknown":"未知","Leader":"负责人","Complete":"完成","confirmTypeChanged":"已更改","confirmTypeConfirmed":"已确认","confirmTypeDeleted":"已删除","timelessText":"timeless","_localized":{}}
,
'dijit/form/nls/ComboBox':{"previousMessage":"先前选项","nextMessage":"更多选项","_localized":{}}
,
'Sage/UI/Controls/nls/PickList':{"okText":"确定","missingPickListText":"找不到 PickList","_localized":{}}
,
'Sage/UI/nls/SearchConditionWidget':{"trueText":"真","falseText":"假","networkText":"网络","remoteText":"远程","webText":"网站","webViewerText":"Web 查看者","concurrentText":"并发","retiredText":"已引退","templateText":"模板","addonText":"加载项","adminText":"管理员","userText":"用户","teamText":"团队","departmentText":"部门","systemText":"系统","_localized":{}}
,
'Sage/UI/nls/ConditionManager':{"addimgalttext":"添加条件","hideimgalttext":"移除条件","addrowlabel":"查找依据:","hiderowlabel":"和:","srchBtnCaption":"搜索","errorOperatorRequiresValue":"运算符需要值","startingWith":"开始于","endsWith":"结束于","contains":"包含","equalTo":"等于","notEqualTo":"不等于","equalOrLessThan":"等于或小于","equalOrGreaterThan":"等于或大于","lessThan":"小于","greaterThan":"大于","_localized":{}}
,
'Sage/UI/nls/SDataLookup':{"closeText":"关闭","cancelText":"取消","loadingText":"正在加载...","noDataText":"未返回任何记录","_localized":{}}
,
'dgrid/extensions/nls/columnHider':{"popupTriggerLabel":"Show or hide columns","popupLabel":"Show or hide columns","_localized":{}}
,
'dgrid/extensions/nls/pagination':{"status":"${start} - ${end} 共 ${total} 条结果","gotoFirst":"首页","gotoNext":"后一页","gotoPrev":"前一页","gotoLast":"末页","gotoPage":"到这页","jumpPage":"跳到页","rowsPerPage":"Number of rows per page","_localized":{}}
,
'Sage/UI/Controls/nls/Grid':{"loadingMessage":"正在加载数据...","noDataMessage":"没有与选择条件匹配的记录。","showMore":"show more","showLess":"show less","_localized":{}}
,
'Sage/UI/nls/EditableGrid':{"unsavedDataText":"*未保存的数据","addText":"添加","deleteText":"删除","saveText":"保存","cancelText":"取消","noSelectionsText":"未选择任何记录。","confirmDeleteFmtTxt":"是否确定要删除这些“${0}”项目?","yesText":"是","noText":"否","createItemsInvalidArrayText":"Sage.UI.EditableGrid.createItems() 中的项目参数应该是数组。","recordCountFormatString":"记录 ${0} - ${1} 条(共 ${2} 条)","noDataMessage":"没有与选择条件匹配的记录。","dirtyDataMessage":"存在未保存的数据。如果继续，那么所做的更改将丢失。","okText":"确定","_localized":{}}
,
'Sage/Utility/nls/File':{"unableToUploadText":"必须安装 Saleslogix Desktop Integration Module 才能使用此功能。","unknownSizeText":"未知","largeFileWarningText":"警告: 此申请超出管理员设置的大小限制，加载失败。","largeFileWarningTitle":"警告","_localized":{}}
,
'Sage/Utility/File/nls/DescriptionsForm':{"titleFmt":"为“${0}”添加附件","titleLibraryDoc":"添加库文档","fileNameText":"文件名和大小:","descText":"描述:","okText":"确定","cancelText":"取消","_localized":{}}
,
'Sage/Utility/File/nls/Attachment':{"uploadingAttachments":"正在上传附件","uploadCompleted":"完成时间","uploadingPleaseWait":"正在上传，请稍候...","uploadFailed":"上传失败。","_localized":{}}
,
'Sage/UI/Controls/nls/DateTimePicker':{"okText":"确定","cancelText":"取消","convertDescription":"与其他时区进行比较。","convertText":"比较","calculatorText":"时区计算器","timeZoneSourceText":"当前时区","timeZoneDestText":"比较时区","buttonToolTip":"日历","timeStartText":"时间","timeZoneCalculatorText":"时区计算器","_localized":{}}
,
'dojox/form/nls/Uploader':{"label":"选择文件...","_localized":{}}
,
'Sage/Utility/File/nls/AttachmentPropertiesEditForm':{"fileText":"文件","descriptionText":"描述","sizeText":"大小","attachDateText":"附加日期","attachedByText":"附加者","uploadFileText":"选择其他文件...","editText":"编辑附件","okText":"确定","cancelText":"取消","browseText":"浏览","urlText":"URL","requestFailedMsg":"无法完成申请的操作，请稍后重试。","_localized":{}}
,
'Sage/Utility/File/nls/FallbackFilePicker':{"addLibraryFileText":"添加库文件","attachFileText":"附加文件","descriptionText":"描述","uploadFileText":"附件","okText":"确定","cancelText":"取消","invalidContext":"无法在销售资料库以外上传文件。","fileTooLargeError":"由于文件太大，文件上传尝试已中止。","pleaseSelectFile":"请先选择文件。","slxErrorIdInfo":"Saleslogix 错误 ID:","_localized":{}}
,
'Sage/Utility/File/nls/AddURLAttachment':{"descriptionText":"描述","urlText":"URL","titleText":"添加 URL 附件","okText":"确定","cancelText":"取消","requestFailedMsg":"无法完成申请的操作，请稍后重试。","urlBlankMsg":"URL 或描述属性不能为空。","_localized":{}}
,
'Sage/Utility/File/nls/GoogleDocPicker':{"googleDocumentsTitle":"Google Documents","couldNotOpenWindowMsg":"无法打开身份验证窗口 - 请检查弹出窗口阻止程序设置。","_localized":{}}
,
'Sage/UI/nls/AttachmentList':{"attachmentText":"附件","userText":"用户","modDateText":"修改日期/时间","dateRangeText":"修改日期范围","sizeText":"大小","extensionText":"文件扩展名","addFileText":"添加文件","addUrlText":"添加 URL","editText":"编辑","helpText":"帮助","addGoogleText":"添加 Google Document","deleteText":"删除","request":"申请文件","delivered":"已送达","requested":"已申请","available":"可用","_localized":{}}
,
'Sage/UI/nls/GridView':{"unsavedDataText":"*未保存的数据","addText":"添加","deleteText":"删除","saveText":"保存","cancelText":"取消","editText":"编辑","helpText":"帮助","noSelectionsText":"未选择任何记录。","confirmDeleteFmtTxt":"是否确定要删除这些“${0}”项目?","yesText":"是","noText":"否","createItemsInvalidArrayText":"Sage.UI.EditableGrid.createItems() 中的项目参数应该是数组。","noDataMessage":"没有与选择条件匹配的记录。","dirtyDataMessage":"存在未保存的数据。如果继续，那么所做的更改将丢失。","okText":"确定","totalRecordCountLabel":"记录总数: ${0}","toggleRows":"Show/Hide preview","_localized":{}}
,
'Sage/UI/nls/SLXPreviewGrid':{"applyText":"应用","resetText":"重置","filterText":"筛选","_localized":{}}
,
'Sage/UI/Controls/nls/EntityInfoToolTip':{"errorText":"找不到信息。","loadingText":"正在加载...","noInfoText":"不显示任何信息。","mainText":"主要电话:","faxText":"传真:","tollFreeText":"免费电话:","urlText":"Web URL:","workText":"单位电话:","mobileText":"移动电话:","emailText":"电子邮件:","contactNameText":"名称:","phoneText":"电话:","accountText":"客户:","_localized":{}}
,
'Sage/UI/Controls/nls/Lookup':{"buttonToolTip":"查找","closeButtonToolTip":"移除","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/ActivityEditor':{"labelWidth":"100","tabNameGeneralText":"常规","tabNameAvailabilityText":"空闲","tabNameAssociationsText":"关联","tabNameRecurringText":"定期","tabNameAttachmentsText":"附件","tabNameNotesText":"备注","scheduleText":"日程安排","startTimeText":"开始时间","timeLessText":"无时间限制","alarmText":"警报","durationText":"持续时间","rolloverText":"自动滚动到第二天","contactText":"联系人","accountText":"客户","leadText":"销售线索","opportunityText":"销售机会","ticketText":"工单","companyText":"公司","regardingText":"事项","notesText":"备注","priorityText":"优先级","leaderText":"负责人","categoryText":"类别","locationText":"地点","dialogHeaderFormatText":"${actionText} ${activityType} - ${description}","scheduledByFormatText":"由 ${user} 于 ${date} 安排","completeScheduledByFormatText":"最初由 ${user} 于 ${date} 针对 ${startDate} 而安排","newConfirmationHeaderFormatText":"确认 ${user} 安排的 ${activityType}","otherConfimationHeaderFormatText":"${user} 执行的 ${actionText}“${activityType}”","acceptedText":"已接受","declinedText":"已拒绝","scheduledText":"计划时间","updatedText":"已更新","deletedText":"已删除","cancelText":"取消","okText":"确定","completeText":"完成","completeBtnText":"完成...","completedText":"完成时间","deleteText":"删除","lookupActText":"查找客户","lookupContactText":"查找联系人","lookupOpportunityText":"查找销售机会","lookupTicketText":"查找工单","lookupLeadText":"查找销售线索","lookupLeaderText":"查找负责人","lookupResourcesText":"添加成员和资源","addResourceText":"添加所选项","mainPhoneText":"主要电话","typeText":"类型","subTypeText":"子类型","nameText":"名称","cityText":"城市","stateText":"省","workphoneText":"单位电话","emailText":"电子邮件","acctMgrText":"客户经理","descriptionText":"描述","stageText":"阶段","statusText":"状态","ownerText":"所有者","ticketNumberText":"工单编号","phoneText":"电话","urgencyText":"紧急性","areaText":"所属范围","recurringText":"定期","resultText":"结果","followupText":"后续","noneText":"无","carryOverAttachmentsText":"沿用附件","carryOverNotesText":"沿用备注","asScheduledText":"按安排","nowText":"立即","responseText":"回应","acceptText":"接受","declineText":"拒绝","deleteConfText":"删除确认","closeText":"关闭","leadFullNameText":"名称","postalText":"邮政编码","failedLoadingDataMsg":"加载数据时发生错误。","removeText":"移除","noText":"否","yesText":"是","areYouSureText":"您即将永久删除此记录。","couldNotSaveErrorText":"很抱歉，由于发生错误，无法保存该活动。","couldNotDeleteErrorText":"很抱歉，由于发生错误，无法删除该活动。","couldNotCompleteErrorText":"很抱歉，由于发生错误，无法完成该活动。","scheduleFollowUpErrorText":"无法安排后续情况，因为无法确定 HistoryId 。","tabNameParticipants":"参与者","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/SpeedSearchLookup':{"dialogTitle":"查找参与者","okText":"添加所选项","cancelText":"关闭","noDataText":"没有与选择条件匹配的记录","srchBtnCaption":"搜索","colName":"名称","colType":"类型","colAccount":"公司/客户","colTitle":"标题","colEmail":"电子邮件","colWorkPhone":"单位电话","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/ActivityEditorAttendeesTab':{"header_Name":"名称","header_AccountName":"客户/公司","header_Type":"类型","header_Primary":"主要地址","header_RoleName":"角色","header_Phone":"电话","header_Email":"电子邮件","header_TimeZone":"时区","header_Notes":"备注","tooltip_speedSearch":"添加参与者","tooltip_AddContact":"添加联系人","tooltip_AddLead":"添加销售线索","tooltip_Delete":"删除","header_Attendee":"是否为参加者","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/ContactLookupConfig':{"contactText":"联系人","accountText":"客户","lookupContactText":"查找联系人","nameText":"名称","cityText":"城市","stateText":"省","workphoneText":"单位电话","emailText":"电子邮件","dialogButtonText":"添加所选项","cancelText":"关闭","colFirstName":"名字","colLastName":"姓氏","colTitle":"标题","colAccount":"客户","colWorkPhone":"单位电话","colEmail":"电子邮件","dialogTitleText":"查找联系人","_localized":{}}
,
'Sage/MainView/ActivityMgr/AttendeeLookup/nls/LeadLookupConfig':{"contactText":"联系人","accountText":"客户","lookupContactText":"查找联系人","nameText":"名称","cityText":"城市","stateText":"省","workphoneText":"单位电话","emailText":"电子邮件","dialogButtonText":"添加所选项","cancelText":"关闭","colFirstName":"名字","colLastName":"姓氏","colTitle":"标题","colCompany":"公司","colWorkPhone":"单位电话","colEmail":"电子邮件","dialogTitleText":"查找销售线索","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/RecurringEditor':{"activityOccurrsText":"定期模式","onceText":"仅一次","dailyText":"日","weeklyText":"周","monthlyText":"月","yearlyText":"年","occursOnceText":"该活动只发生一次","everyText":"每","daysText":"日","daysAfterText":"日","startRecurringText":"定期活动开始日期:","endAfterText":"发生","endOnText":"定期活动结束日期","occurrencesText":"次后结束","weeksOnText":"周","monText":"星期一","tueText":"星期二","wedText":"星期三","thurText":"星期四","friText":"星期五","satText":"星期六","sunText":"星期日","weeksAfterText":"周","monthsOnText":"个月的第","monthsOnTheText":"个月的","monthsAfterText":"个月","firstText":"第一个","secondText":"第二个","thirdText":"第三个","fourthText":"第四个","lastText":"最后一个","yearsOnText":"年的","yearsAfterText":"年","janText":"一月","febText":"二月","marText":"三月","aprText":"四月","mayText":"五月","junText":"六月","julText":"七月","augText":"八月","sepText":"九月","octText":"十月","novText":"十一月","decText":"十二月","theText":"The","inText":"包含","_localized":{}}
,
'Sage/UI/Controls/nls/DurationSelect':{"minuteText":"分钟","minutesText":"分钟","hourText":"小时","hoursText":"小时","dayText":"日","daysText":"天数","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/EditEventEditor':{"titleScheduleText":"安排事件","titleEditText":"编辑事件","lblDayTypeText":"日期类型:","lblStartDateText":"开始日期:","lblEndDateText":"结束日期:","lblUserText":"用户:","lookupUserText":"查找用户","lblCategoryText":"类别:","lblLocationText":"地点:","lblDescriptionText":"描述:","btnOkayText":"确定","btnCancelText":"取消","btnHelpText":"帮助","eventTypeActiveText":"活动","eventTypeBusinessTripText":"出差","eventTypeConferenceText":"会议","eventTypeHolidayText":"节假日","eventTypeOffText":"关闭","eventTypeTradeShowText":"展会","eventTypeUnavailableText":"不可用","eventTypeVacationText":"休假","errorText":"很抱歉，由于发生错误，无法创建该事件。","invaildDatesText":"很抱歉，结束日期不得早于开始日期。","nameText":"名称","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/QuickCompleteEditor':{"lblResultText":"结果:","lblNoteText":"备注(附加到所有项):","btnCompleteIndividuallyText":"单个","btnAsScheduledText":"按安排","btnCompleteNowText":"立即","btnCancelText":"取消","btnCloseText":"关闭","btnHelpText":"帮助","resultCompletedText":"完成","titleText":"快速完成","actionMessage":"仅完成您有权完成的活动。","completeMessage":"完成所有 {0} 选中的活动:","processingMessage":"正在处理所有 {0} 选中的活动，请稍候...","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/HistoryEditor':{"labelWidth":"100","tabNameGeneralText":"常规","tabNameAttachmentsText":"附件","scheduleText":"日程安排","startTimeText":"计划时间","completedDateText":"完成时间","timeLessText":"无时间限制","durationText":"持续时间","contactText":"联系人","accountText":"客户","leadText":"销售线索","opportunityText":"销售机会","ticketText":"工单","companyText":"公司","regardingText":"事项","resultText":"结果","notesText":"备注","priorityText":"优先级","leaderText":"负责人","categoryText":"类别","locationText":"地点","scheduledByFormatText":"由 ${user} 于 ${date} 安排","cancelText":"取消","okText":"确定","deleteText":"删除","lookupActText":"查找客户","lookupContactText":"查找联系人","lookupOpportunityText":"查找销售机会","lookupTicketText":"查找工单","lookupLeadText":"查找销售线索","lookupLeaderText":"查找负责人","lookupResourcesText":"查找","mainPhoneText":"主要电话","typeText":"类型","subTypeText":"子类型","nameText":"名称","cityText":"城市","stateText":"省","workphoneText":"单位电话","emailText":"电子邮件","acctMgrText":"客户经理","descriptionText":"描述","stageText":"阶段","statusText":"状态","ownerText":"所有者","ticketNumberText":"工单编号","phoneText":"电话","urgencyText":"紧急性","areaText":"所属范围","recurringText":"定期","followupText":"后续","noneText":"无","carryOverAttachmentsText":"沿用附件","carryOverNotesText":"沿用备注","asScheduledText":"按安排","insertText":"插入","couldNotSaveErrorText":"很抱歉，由于发生错误，无法保存历史。","deleteMessage":"您即将永久删除此记录。","deleteTitle":"删除历史","couldNotDeleteErrorText":"很抱歉，由于发生错误，无法删除历史。","postalText":"邮政编码","tabNameParticipants":"所有参与者","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/HistoryEditorAttendeesTab':{"header_Name":"名称","header_AccountName":"客户/公司","header_Type":"类型","header_Primary":"主要地址","header_RoleName":"角色","header_Phone":"电话","header_Email":"电子邮件","header_TimeZone":"时区","header_Notes":"备注","header_Status":"状态","header_Attendee":"是否为参加者","_localized":{}}
,
'Sage/MainView/ActivityMgr/nls/OccurrenceOrSeriesQueryDlg':{"titleFmt":"${type} - ${description}","actDateText":"活动日期:","contactText":"联系人:","accountText":"客户:","opportunityText":"销售机会:","editAllText":"编辑所有出现的情况","editOneText":"编辑此次出现的情况","completeAllText":"完成所有出现的情况","completeOneText":"完成此次出现的情况","deleteAllText":"删除所有出现的情况","deleteOneText":"删除此次出现的情况","continueText":"继续","failedToLoadMsg":"无法加载活动","_localized":{}}
,
'Sage/Services/nls/ActivityService':{"txtErrorActionMsg":"很抱歉，操作已失败，发生了错误。","txtActivity":"活动","txtActivities":"活动","txtActionDeleteActivites":"删除活动","txtActionDeleteActivitiesQuestion":"将只删除您有权删除的活动。<P>是否确定要删除 {0} 个选中的“{1}”?","txtAlarm":"警报","txtAlarms":"警报","txtActionSnoozeAlarm":"推迟警报","txtActionSnoozeQuestion":"是否确定要针对“{2}”推迟 {0} 选中的“{1}”?","txtActionSnoozeAllQuestion":"是否确定要推迟“{1}”的所有“{0}”?","txtActionDismissAlarms":"消除警报","txtActionDismissAlarmsQuestion":"是否确定要消除 {0} 选中的“{1}”?","txtEvent":"事件","txtEvents":"事件","txtActionDeleteEvents":"删除事件","txtActionDeleteEventsQuestion":"将只删除您有权删除的事件。<P>是否确定要删除 {0} 个选中的“{1}”?","txtConfirmation":"确认","txtConfirmations":"确认","txtActionAcceptConfirmations":"接受确认","txtActionAcceptConfirmQuestion":"是否确定要接受 {0} 选中的“{1}”?仅对新建或更改的确认执行此操作。将忽略所有其他情况。","txtDeclineConfirmations":"拒绝确认","txtActionDeclineConfrimQuestion":"是否确定要拒绝 {0} 选中的“{1}”?仅对新建或更改的确认执行此操作。将忽略所有其他情况。","txtActionRemoveConfirmations":"删除确认","txtActionRemoveConfirmationsQuestion":"是否确定要删除 {0} 选中的“{1}”?仅对负责人、已拒绝或已删除的确认执行此操作。将忽略所有其他情况。","txtLiteratureRequest":"营销材料申请","txtLiteratureRequests":"营销材料申请","txtActionDeleteLiteratureRequests":"删除营销材料申请","txtActionDeleteLiteratureRequestsQuestion":"将只删除您有权删除的营销材料申请。<P>是否确定要删除 {0} 个选中的“{1}”?","_localized":{}}
,
'Sage/Services/nls/JobService':{"txtInvalidParameter":"参数无效:“${0}”。","txtTriggerJobError":"抱歉，触发作业“${0}”时发生错误: ${1} ${2}。","txtScheduleJobError":"抱歉，安排作业“${0}”时发生错误: ${1} ${2}。","txtUnexpectedError":"抱歉，发生了错误: ${0} ${1}。","_localized":{}}
,
'Sage/UI/Alarms/nls/AlarmButton':{"pastDueToolTipFmt":" 您有 ${0} 个过期的活动。","_localized":{}}
,
'Sage/UI/Alarms/nls/AlarmCountDown':{"startsInText":"开始时间","overduebyText":"过期时间","minuteText":"分钟","minutesText":"分钟","hourText":"小时","hoursText":"小时","dayText":"日","daysText":"天数","weekText":"周","weeksText":"周","monthText":"月","monthsText":"月","yearText":"年","yearsText":"年","startsNowText":"立即开始","_localized":{}}
,
'Sage/MainView/EntityMgr/nls/_BaseEntityDetailContent':{"FilterTabTitle":"筛选器","MetricTabTitle":"度量","PropertyTabTitle":"字段","CalcFieldTabTitle":"已计算字段","EntityTabTitle":"实体","RelationTabTitle":"关系","dialogTitleAddField":"Add Field to ${0} Entity","dialogTitleAddFilter":"Add Filter to ${0} Entity","dialogTitleAddMetric":"Add Metric to ${0} Entity","dialogTitleAddRelationship":"Add Relationship to ${0} Entity","editDialogTitle":"Edit ${0} in ${1} Entity","FilterDialogTitle":"筛选","MetricDialogTitle":"度量","PropertyDialogTitle":"字段","RelationDialogTitle":"关系","FilterGridColumnFilter":"筛选器名称","MetricGridColumnMetric":"度量名称","FilterGridColumnDisplay":"显示名称","FilterGridColumnProperty":"字段","FilterGridColumnType":"度量或筛选器","FilterGridColumnIsMetric":"仪表板内","FilterGridColumnLastUpdated":"上次修改时间","FilterGridColumnDetails":"类型","FilterGridDetailsDistinctFilter":"不相同","FilterGridDetailsDateDiffMetricFilter":"日期差异度量","FilterGridDetailsRangeFilter":"范围","FilterGridDetailsMetricFilter":"度量","FilterGridDetailsUserLookupFilter":"用户查找","FilterGridDetailsLookupFilter":"查找","FilterGridDetailsCustom":"自定义","GridHelp":"帮助","FilterGridAdd":"添加筛选器","FilterGridRemove":"移除筛选器","FilterGridEdit":"编辑筛选器","MetricGridAdd":"添加度量","MetricGridRemove":"移除度量","MetricGridEdit":"编辑度量","PropertyGridAdd":"添加字段","PropertyGridRemove":"移除字段","PropertyGridEdit":"编辑字段","CalculatedGridAdd":"添加已计算字段","CalculatedGridRemove":"移除已计算字段","CalculatedGridEdit":"编辑计算字段","lblFilterName":"筛选器名称","lblDisplayName":"显示名称","lblFilterDp":"字段","lblTypeDp":"类型","lblCharacter":"字符","lblTypeSpecificContentBox":"特定于类型的内容框","lblSaveButton":"保存","lblCancelButton":"取消","lblOkButton":"确定","lblWarning":"请选择一个项目。","confirmDeleteFmtTxt":"是否确定要删除这些“${0}”项目?","filtersFor":"用于以下项的筛选器:","metricsFor":"用于以下项的度量:","propertyFor":"字段对应","calculatedFor":"已计算字段对应","defaultRangeRowValue":"输入值","customSql":"自定义 SQL","displayName":"显示名称","lower":"Lower","rangeId":"范围 ID","rangeName":"范围名称","upper":"Upper","SUM":"总计 (求和)","Contains":"Contains","StartsWith":"开始于","EndsWith":"结束于","LessThan":"小于","GreaterThan":"大于","LessThanEqual":"小于等于","GreaterThanEqual":"大于等于","Equal":"Equals","NotEqual":"不等于","COUNT":"计数","AVG":"平均值","MIN":"最小值","MAX":"最大值","totalRecordCountLabel":"记录总数: ${0}","propertyName":"名称","Description":"描述","propertyType":"类型","included":"Included","calculatedFields":"已计算","generate":"生成","key":"Key","relationFor":"关系对应","childEntity":"子级","childProperty":"Child's Field","parentEntity":"父级","parentProperty":"Parent's Field","editable":"可编辑","cardinality":"基数","relationship":"关系","parentImport":"Parent's Import","parentMatch":"Parent's Match","parentAudit":"Parent's Audit","parentIncluded":"Parent's Included","childImport":"Child's Import","childMatch":"Child's Match","childAudit":"Child's Audit","childIncluded":"Child is Included","text":"text","memo":"备忘录","unicodeText":"Unicode 文本","unicodeMemo":"Unicode 备忘录","integer":"integer","double":"double","single":"单精度","decimal":"decimal","short":"short","standardId":"标准 ID","trueFalse":"真/假","yesNo":"是/否","boolean":"boolean","dateTime":"日期/时间","email":"电子邮件","phone":"电话","pickList":"下拉列表","owner":"所有者","lookup":"查找","dependencyLookup":"依赖关系查找","char":"char","enum_":"枚举","guid":"guid","byte":"byte","binary":"binary","url":"url","string":"string","number":"number","notUniqueFor":"对以下内容不唯一","lblPluralName":"Display Plural Name","lblTitle":"标题","IsExtension":"是扩展","AdvOptions":"高级选项","lblImport":"导入","lblMatch":"匹配","lblBulkUpdate":"批量更新","lblAudited":"已审计","lblPut":"Put","lblPost":"Post","lblDelete":"删除","lblHistory":"跟踪历史记录至","metricNotEditable":"This metric is not editable.","下限":"下限","上限":"上限","包含":"包含","等于":"等于","已包括":"已包括","文本":"文本","整数":"整数","双精度":"双精度","小数":"小数","短":"短","布尔值":"布尔值","字符":"字符","Guid":"Guid","字节":"字节","二进制":"二进制","URL":"URL","字符串":"字符串","数字":"数字","_localized":{}}
,
'Sage/MainView/EntityMgr/AddEditEntityDetail/nls/AddEditDialog':{"dialogTitleAddField":"Add Field to ${0} Entity","dialogTitleAddFilter":"Add Filter to ${0} Entity","dialogTitleAddMetric":"Add Metric to ${0} Entity","dialogTitleAddRelationship":"Add Relationship to ${0} Entity","editDialogTitle":"Edit ${0} in ${1} Entity","lblFilter":"筛选","lblMetric":"度量","lblFilters":"筛选器","lblMetrics":"度量","lblDistinct":"不相同","lblRange":"范围","lblUserLookup":"用户查找","lblAdd":"添加","lblEdit":"编辑","lblRemove":"移除","lblHelp":"帮助","lblFilterName":"筛选器名称","lblMetricName":"度量名称","lblDisplayName":"显示名称","lblName":"名称","lblDisplay":"显示","lblCalculated":"已计算","lblCalculation":"计算","lblDescription":"描述","lblFieldsName":"字段名称","lblCalculatedFieldsName":"已计算字段名称","lblFilterDp":"字段","lblTypeDp":"类型","lblCharacter":"字符","lblFrom":"从","lblTo":"至","lblOperators":"运算符","lblAggregation":"汇总","lblTypeSpecificContentBox":"特定于类型的内容框","lblSaveButton":"确定","lblCancelButton":"取消","DateDiffCheckerValue":"日期差异度量","InvalidFilterName":"筛选器名称无效","InvalidRangeName":"范围名称无效","RequiredFilterName":"必须提供筛选器名称","RequiredRangeName":"必须提供范围名称","FieldMustBeANumber":"字符字段必须是整数","SelectAnItem":"请选择项目","ItemRequired":"必需的项目","ItemInvalid":"项目无效","LowerMustBeLessThanUpper":"下限值必须小于上限值。","defaultRangeRowValue":"输入值","totalRecordCountLabel":"记录总数: ${0}","lblNew":"新建","lblExisting":"现有","lblExistingCalc":"现有已计算字段","validNameMsg":"有效条目以大写字母开头且 <br> 可以包含字母数字值和下划线。","propertyName":"名称","displayName":"显示","dataTypeId":"类型","dataTypeData":"类型属性","length":"长度","scale":"缩放","precision":"精度","isIncluded":"已包括","isReadOnly":"只读","displayCategory":"显示类别","sdata":"Sdata","bulkAction":"批量操作","canBulkUpdate":"可批量更新","canImport":"导入","canMatch":"匹配","generate":"生成","audited":"已审计","notUniqueFor":"对以下内容不唯一","notUnique":"is not unique","nlsCode":"NLS Code","nlsName":"NLS Name","showTranslations":"Show translations","hideTranslations":"Hide translations","standardIds":"标准 ID","others":"Others","SelectField":"Please select a field !","SelectOneField":"Please select only one field !","parent":"Parent Entity and Join Field","child":"Child Entity and Join Field","cardinality":"关系","cascade":"层叠","includeParent":"Include parent relationship property in the child entity","includeChild":"Include child relationship property in the parent entity","existingRelaton":"This relationship already exists !","_localized":{}}
,
'Sage/UI/Controls/nls/PropertyStore':{"text":"Text","memo":"备忘录","unicodeText":"Unicode 文本","unicodeMemo":"Unicode 备忘录","integer":"Integer","double":"Double","single":"单精度","decimal":"Decimal","short":"Short","standardId":"标准 ID","trueFalse":"真/假","yesNo":"是/否","boolean":"Boolean","dateTime":"日期/时间","email":"电子邮件","phone":"电话","pickList":"下拉列表","owner":"所有者","lookup":"查找","dependencyLookup":"依赖关系查找","char":"Char","enum_":"枚举","guid":"Guid","byte":"Byte","binary":"Binary","url":"Url","string":"String","number":"Number","calc":"已计算字段","calcSF":"字符串计数","calcNF":"数字计数","文本":"文本","整数":"整数","双精度":"双精度","小数":"小数","短":"短","布尔值":"布尔值","字符":"字符","Guid":"Guid","字节":"字节","二进制":"二进制","URL":"URL","字符串":"字符串","数字":"数字","id":"ID","code":"代码","name":"名称","value":"值","本机":"本机","_localized":{}}
,
'Sage/MainView/EntityMgr/EntityWizard/nls/_EntityWizardDialog':{"lblNewEntityWizard":"新建实体向导","lblCreateEntity":"Create Entity","lblCreateEntityFromTable":"Create a new entity from a table","lblEntityName":"名称","lblDisplayName":"显示","lblPackage":"包","lblEntityUsed":"Entity Name is already used !","lblNext":"下一步","lblCancel":"取消","lblBack":"返回","lblEnterProperties":"Enter Fields","lblAddNewProperty":"Click the add(+) button to add new fields to the entity","lblPropertyName":"字段名称","lblDataType":"数据类型","lblLength":"长度","lblSure":"Are you sure ?","lblThisStepCreateEntity":"完成此步骤将创建实体以及必要的结构","lblEntity":"实体","lblProperties":"字段","lblStatus":"状态","lblSuccess":"成功","lblSuccessMsg":"Success, Entity created Successfully.","lblError":"错误","lblFailed":"Failed","lblErrorMsg":"Error, Entity creation failed !","lblFinish":"完成","lblInvalidEntry":"A valid entry starts with capital letter","lblRequired":"必需","lblErrorRelation":"Error while creating relationship with","lblRelationship":"主要关系","lblSelectEntity":"Choose whether this entity has a primary relationship to another entity","lblExistingEntity":"关联到现有实体","lblRelatedEntity":"Related Entity","lblRelationType":"Relation Type","addFieldDialogTitle":"添加字段","editFieldDialogTitle":"编辑字段","noDeleteSysProps":"Can not delete the system properties","noEditSysProps":"Can not edit the system properties","NoRecordsSelected":"未选择任何记录。","lblNullable":"可空","CreateUser":"创建用户","CreateDate":"创建日期","ModifyUser":"修改用户","ModifyDate":"修改日期","_localized":{}}
,
'Sage/UI/Forms/nls/FormFromSData':{"addText":"添加","deleteText":"删除","saveText":"保存","cancelText":"取消","editText":"编辑","helpText":"帮助","yesText":"是","noText":"否","okText":"确定","newPickList":"新建下拉列表","items":"下拉列表项目","number":"顺序","enterValue":"Enter Value","lblMore":"More","picklistAlreadyExists":"Picklist '${0}' already exists.","messageOnSave":"Pick list, ${0}, has been saved. Please continue adding or editing the field information.","permissionsToView":"You do not have permitions to view.","required":"必需条目","allowMultiples":"允许多选","valueMustExist":"文本必须与列表项目匹配","alphaSorted":"按字母顺序排序","noneEditable":"用户不能编辑项目","_localized":{}}
,
'Sage/UI/Controls/nls/FieldAttributeControlFactory':{"IsEncrypted":"是否加密","Length":"长度","Precision":"精度","Scale":"缩放","LookupEntityName":"查找实体名称","LookupGroup":"查找组","IsPercentage":"百分比","Items":"项目","MultiSelect":"多选","OverriddenName":"覆盖的名称","Storage":"存储器","EnableHyperLinking":"启用超链接","LookupPreFilters":"查找预筛选器","EqualTo":"等于","NotEqualTo":"不等于","GreaterThanOrEqual":"大于等于","GreaterThan":"大于","LessThanOrEqual":"小于等于","LessThan":"小于","CondOperator":"条件运算符","FilterValue":"筛选器值","PropertyName":"属性名称","LookupProperties":"查找属性","ExcludeFromFilters":"从筛选器中排除","HideCondition":"隐藏条件","IsSortable":"可排序","PropertyFormat":"属性格式","None":"无","Phone":"电话","User":"用户","PickList":"下拉列表","DateTime":"日期时间","PropertyFormatString":"属性格式字符串","PropertyHeader":"属性标题","PropertyType":"属性类型","UseAsResult":"用作结果","ReturnPrimaryKey":"返回主键","AllowMultiples":"允许多个值","AlphaSort":"Alpha 排序","MustExistInList":"必须存在于列表中","NoneEditable":"不可编辑","PickListFilter":"下拉列表筛选器","ValueStoredAsText":"值存储为文本","Value":"值","Display":"显示","Code":"代码","Name":"名称","DisplayName":"显示名称","Template":"计算","Description":"描述","SortOrder":"排序顺序","lblNoFieldsInTemplate":"Please add an entity property to the template before applying a sort order.","AddField":"添加字段","InUse":"使用中","NotInUse":"Not In Use","CalculatedNumberInputError":"<p>Inputs are limited to Field Names selected via the drop down,<br/> and the following characters:<br/>&nbsp;&nbsp;&nbsp;&nbsp;'+','-','*','/','(', or ')',<br/>&nbsp;&nbsp;&nbsp;&nbsp;these match up with the button values above the text area.</p>","newPickList":"新建下拉列表","add":"添加","substract":"substract","multiply":"multiply","divide":"divide","openParens":"open parenthesis","closeParens":"close parenthesis","_localized":{}}
,
'Sage/UI/Alarms/nls/ActivityAlarm':{"noSubjectText":"无主题","contactText":"联系人","accountText":"客户","opportunityText":"销售机会","leadText":"销售线索","companyText":"公司","recurringText":"定期","ticketText":"工单","leaderText":"负责人","locationText":"地点","_localized":{}}
,
'Sage/UI/Alarms/nls/AlarmPane':{"dismissAllText":"全部消除","dismissText":"消除","fiveMinText":"5 分钟","tenMinText":"10 分钟","fifteenMinText":"15 分钟","thirtyMinText":"30 分钟","oneHourText":"1 小时","twoHourText":"2 小时","fourHourText":"4 小时","eightHourText":"8 小时","oneDayText":"1 日","twoDayText":"2 日","threeDayText":"3 日","oneWeekText":"1 周","twoWeekText":"2 周","snoozeText":"推迟","snoozeByText":"推迟:","snoozeAllText":"全部推迟","showCalendarText":"显示日历","_localized":{}}
,
'Sage/UI/Alarms/nls/UnconfirmedPane':{"showConfirmationsText":"显示确认","showCalendarText":"显示日历","acceptText":"接受","declineText":"拒绝","_localized":{}}
,
'Sage/UI/Alarms/nls/AlarmPopup':{"title":"警报","alarmsText":"警报","unconfirmedText":"未确认","deleteText":"删除所选项","helpText":"帮助","completeText":"完成所选活动","_localized":{}}
,
'Sage/UI/Alarms/nls/JobNotificationButton':{"notificationToolTip":"您有 ${0} 个作业通知。","notificationErrorToolTip":"检索作业通知时发生错误。请联系管理员。","_localized":{}}
,
'Sage/UI/Alarms/nls/JobNotificationPopup':{"title":"作业通知","helpText":"帮助","colNameJobName":"类型","colNameProgress":"进度","colNameStatus":"状态","colExecutionResult":"结果","executionStatusRunning":"Running","executionStatusComplete":"Complete","executionStatusInterrupting":"Interrupting","executionStatusInterrupted":"Interrupted","executionStatusError":"Error","executionStatusUndefined":"Undefined","_localized":{}}
,
'dijit/_editor/nls/commands':{"bold":"粗体","copy":"复制","cut":"剪切","delete":"删除","indent":"增加缩进","insertHorizontalRule":"水平线","insertOrderedList":"编号列表","insertUnorderedList":"符号列表","italic":"斜体","justifyCenter":"居中","justifyFull":"对齐","justifyLeft":"左对齐","justifyRight":"右对齐","outdent":"减少缩进","paste":"粘贴","redo":"重做","removeFormat":"除去格式","selectAll":"全选","strikethrough":"删除线","subscript":"下标","superscript":"上标","underline":"下划线","undo":"撤销","unlink":"除去链接","createLink":"创建链接","toggleDir":"切换方向","insertImage":"插入图像","insertTable":"插入/编辑表","toggleTableBorder":"切换表边框","deleteTable":"删除表","tableProp":"表属性","htmlToggle":"HTML 源代码","foreColor":"前景色","hiliteColor":"背景色","plainFormatBlock":"段落样式","formatBlock":"段落样式","fontSize":"字体大小","fontName":"字体名称","tabIndent":"制表符缩进","fullScreen":"切换全屏","viewSource":"查看 HTML 源代码","print":"打印","newPage":"新建页面","systemShortcut":"只能通过使用键盘快捷键在浏览器中执行 \"${0}\" 操作。请使用 ${1}。","ctrlKey":"ctrl+${0}","appleKey":"⌘${0}","_localized":{}}
,
'Sage/UI/Controls/nls/HelpMenu':{"helpText":"帮助","aboutText":"关于","webClientHelpText":"Web 客户端帮助","gettingStartedText":"入门指南","quickReferenceText":"快速参考卡","_localized":{}}
,
'Sage/UI/Controls/nls/LogOffButton':{"logOffText":"注销","_localized":{}}
,
'Sage/UI/Dashboard/nls/WidgetDefinition':{"defaultWidgetText":"编辑小组件设置","settingsText":"设置","viewGroupText":"查看组","Bar_Chart":"条形图","Column_Chart":"柱状图","Group_List":"组列表","Pie_Chart":"饼图","Funnel_Chart":"漏斗图","Line_Chart":"折线图","SData_Feed":"SData 订阅源","Web_Feed":"Web 订阅源","Website":"网站","Default":"默认值","Links":"链接","Recently_Viewed":"最近查看","Todays_Activities":"今天的活动","Today_s_Activities":"今天的活动","Welcome":"欢迎","Closing_Opportunities":"结束销售机会","Quick_Actions":"快速操作","Do_You_Know___":"您是否知道...","All_Leads":"所有销售线索","My_Notes":"我的备注","Open_Opportunities":"未结销售机会","My_Top_Opportunities":"我的排名靠前的销售机会","My_Pipeline":"我的销售管道","Recent_Lead_Creation_History":"最近销售线索创建历史","My_Activity_trend":"我的活动趋势","My_Completed_Activities_by_Type":"我已完成的活动 (按类型)","Active_Campaigns":"正在进行的销售活动","All_Open_Opportunities":"所有未结的销售机会","Top_Opportunities":"排名靠前的销售机会","Open_Defect_Distribution":"未结缺陷分布","My_Dashboard":"我的仪表板","Sales":"销售","Group_List_Description":"按实体显示组记录列表。例如，一组正在进行的销售活动。","Welcome_Description":"显示 Saleslogix 介绍，以及介绍 Saleslogix for Web 的帮助主题链接。","Line_Chart_Description":"以一系列由线连接的数据点的形式显示数据。在数据表示许多组或类别时，此图表很有用。","Bar_Chart_Description":"以一系列水平条形的形式显示数据。在比较多组数据时，此图表很有用。","Column_Chart_Description":"以一系列按类别分组的垂直条形的形式显示数据。在显示一段时间内的数据变化或者演示不同项目的对比时，此图表很有用。","Funnel_Chart_Description":"以漏斗状的渐进式比例形式显示数据。数据以 100% 的比例形式显示，此图表没有轴线。","Pie_Chart_Description":"以占整体的比例形式显示数据。以占整体的百分比形式计算每个值。此图表没有轴线。","Recently_Viewed_Description":"显示指向最近查看的记录（带有用于标识类型的图标）的链接。例如，客户或联系人。","Todays_Activities_Description":"显示指向今日活动的链接。","Links_Description":"显示您创建的链接。例如，指向 Saleslogix 中的详细视图链接或指向外部网站的链接。","SData_Feed_Description":"显示使用 SData (Sage Data) 订阅源的 Web 订阅源。例如，来自会计集成或 Saleslogix 数据库的订阅源。","Web_Feed_Description":"显示 RSS 或 Atom 订阅源信息。","Website_Description":"显示选择的网站。","_localized":{}}
,
'Sage/UI/Dashboard/nls/DashboardTabController':{"newTabText":"新建选项卡","addContentText":"添加内容","editOptionsText":"编辑选项","hideTabText":"隐藏选项卡","closeText":"关闭","copyTabText":"复制选项卡","showTabText":"显示选项卡","shareTabText":"共享选项卡","deleteTabText":"删除选项卡","deleteTabConfirmText":"是否确定要删除此选项卡?","descriptionText":"描述","everyoneText":"所有人","saveTabText":"保存选项卡","helpText":"帮助","addText":"添加","invalidMessage":"字符无效","invalidDuplicateMessage":"标题必须唯一。","deleteText":"删除","titleText":"职位:","chooseTemplateText":"选择想要使用的模板:","oneColumnText":"一列","twoColumnText":"拆分为两列","fatLeftText":"两列，左侧较大","fatRightText":"两列，右侧较大","makeDefaultText":"设为默认值","releaseFetchErrorText":"提取发布列表时出错。","releaseDeleteNoneSelected":"未选择任何项目。","releasedToText":"已发布至:","typeText":"类型","addLookup":"添加","okButton":"确定","errorText":"错误","warningText":"警告","permissionErrorText":"错误: 用户无权执行此操作。","permissionErrorPerformCopyText":"是否要创建页面的个人副本?","yesText":"是","noText":"否","DeletingReleasedWidget":"Are you sure you want to delete this Dashboard tab?  This tab is shared with ${0} user(s).  Deleting this tab will delete it for all users.","Welcome":"欢迎","_localized":{}}
,
'Sage/UI/nls/Boolean':{"yesText":"是","noText":"否","_localized":{}}
,
'Sage/UI/Dashboard/nls/DashboardWidgetCell':{"closeTooltipText":"关闭","minimizeTooltipText":"最小化","settingsTooltipText":"设置","_localized":{}}
,
'Sage/UI/Dashboard/nls/DashboardWidget':{"noQueryDataText":"服务器没有可供查询的数据","initializingText":"正在初始化","_localized":{}}
,
'Sage/UI/Dashboard/nls/Dashboard':{"newTabTitleText":"新建选项卡标题","inputTitleText":"输入标题","copiedPageText":"复制的选型卡","showText":"显示","_localized":{}}
,
'Sage/UI/nls/SummaryContainer':{"loadingText":"Loading...","_localized":{}}
,
'Sage/Groups/nls/GroupLookup':{"txtNoRecordsFound":"找不到任何记录。","_localized":{}}
,
'Sage/UI/nls/OwnerType':{"teamText":"团队","departmentText":"部门","systemText":"系统","userText":"用户","_localized":{}}
,
'Sage/UI/nls/UserType':{"administratorText":"管理员","templateText":"模板","remoteText":"远程","webOnlyText":"仅限 Web","retiredText":"已引退","concurrentText":"并发","webViewerText":"Web 查看者","networkText":"网络","addOnUserText":"加载项用户","_localized":{}}
,
'Sage/UI/nls/ListPanel':{"listText":"列表","summaryText":"摘要","detailText":"详细信息","hideDetailText":"隐藏详细信息","unsavedDataText":"*未保存的数据","helpText":"帮助","refreshText":"刷新","overflowText":"搜索返回了大量结果。应用筛选器以缩小搜索范围。","totalRecordsText":"Total Records: ","displayingText":"显示","ofText":"/","_localized":{}}
,
'Sage/UI/nls/SpeedSearch':{"standardText":"标准","advancedText":"高级","speedSearchText":"快速搜索","_localized":{}}
,
'Sage/UI/nls/TimeZoneItem':{"buttonOKText":"确定","buttonCancelText":"取消","timeZoneText":"时区","timeZoneSettingsText":"时区设置","setTimeZoneText":"设置时区:","_localized":{}}
,
'Sage/UI/nls/SearchMenuItem':{"findText":"查找","clearText":"清除","showHiddenText":"显示隐藏项:","_localized":{}}
,
'Sage/UI/nls/GroupsTitlePaneConfigProvider':{"groupText":"组","addGroupButtonTooltip":"添加组","groupButtonTooltip":"管理组","lookupText":"查找","lookupResultsText":"查找结果","groupColumnText":"组","visibleColumnText":"可见","groupOwner":"Owner","exceedMaxGroupMsg":"Only ${0} favorite groups allowed.","_localized":{}}
});