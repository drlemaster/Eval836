/*
 * This metadata is used by the Saleslogix platform.  Do not remove.
<snippetHeader xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" id="6d0c2b05-2371-48a2-a7e6-85499e6b4588">
 <assembly>Sage.SnippetLibrary.CSharp</assembly>
 <name>btnOK_OnClickStep</name>
 <references>
  <reference>
   <assemblyName>Sage.Entity.Interfaces.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\interfaces\bin\Sage.Entity.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Form.Interfaces.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\formInterfaces\bin\Sage.Form.Interfaces.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\assemblies\Sage.Platform.dll</hintPath>
  </reference>
  <reference>
   <assemblyName>Sage.SalesLogix.API.dll</assemblyName>
  </reference>
  <reference>
   <assemblyName>Sage.SalesLogix.dll</assemblyName>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.Application.dll</assemblyName>
  </reference>
  <reference>
   <assemblyName>Sage.Platform.WebPortal.dll</assemblyName>
   <hintPath>%BASEBUILDPATH%\assemblies\Sage.Platform.WebPortal.dll</hintPath>
  </reference>
 </references>
</snippetHeader>
*/


#region Usings
using System;
using Sage.Entity.Interfaces;
using Sage.Form.Interfaces;
using Sage.Platform;
using Sage.Platform.Application;
using Sage.Platform.WebPortal.Services;
using Sage.SalesLogix.API;
using Sage.SalesLogix.SelectionService;
#endregion Usings

namespace Sage.BusinessRules.CodeSnippets
{
    public static partial class QuickInsertAccountContactEventHandlers
    {
        public static void btnOK_OnClickStep(IQuickInsertAccountContact form, EventArgs args)
        {
            IUser currentUser = MySlx.Security.CurrentSalesLogixUser;
			IContact contact = form.CurrentEntity as IContact;
			IAccount account = EntityFactory.Create<IAccount>();

			IAddress ad = EntityFactory.Create<IAddress>();
			ad.Description = contact.Address.Description;
			ad.Address1 = contact.Address.Address1;
			ad.Address2 = contact.Address.Address2;
			ad.Address3 = contact.Address.Address3;
			ad.Address4 = contact.Address.Address4;
			ad.City = contact.Address.City;
			ad.State = contact.Address.State;
			ad.PostalCode = contact.Address.PostalCode;
			ad.Country = contact.Address.Country;
			ad.County = contact.Address.County;
			ad.Salutation = contact.Address.Salutation;

			account.Address = ad;
			account.AccountName = form.txtAccount.Text;
			account.AccountManager = currentUser;
			account.Owner = currentUser.DefaultOwner;
			account.Type = form.pklType.PickListValue;
			account.MainPhone = form.phAccountMain.Text;

			contact.Account = account;
			contact.AccountManager = currentUser;
			contact.Owner = currentUser.DefaultOwner;
			contact.SaveContactAccount(account);

			ISelectionService srv = ApplicationContext.Current.Services.Get<ISelectionService>(true);
			ISelectionContext sc = new SimpleSelectionContext();
			SelectionInfo selInfo = new SelectionInfo();
			SelectionItem item = new SelectionItem {Id = contact.Id.ToString()};
			selInfo.Selections.Add(item);
			sc.Key = "QuickInsertAccountContact";
			sc.SelectionInfo = selInfo;
			srv.SetSelectionContext(sc.Key, sc);

			IPanelRefreshService refresher = form.Services.Get<IPanelRefreshService>();
			if (refresher != null)
            {
                refresher.RefreshAll();
            }
        }
    }
}