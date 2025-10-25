public with sharing class AccountContactCaseController {
    @AuraEnabled
    public static void saveData(String wrapperStr) {
        try {
            // Deserialize the incoming JSON string into the WrapperData class
            WrapperData data = (WrapperData) JSON.deserializeStrict(wrapperStr, WrapperData.class);

            // Insert Account
            insert data.accountObj;

            // Relate Contact to the newly created Account
            data.contactObj.AccountId = data.accountObj.Id;
            insert data.contactObj;

            // Relate Case to the same Account
            data.caseObj.AccountId = data.accountObj.Id;
            insert data.caseObj;

            System.debug('Records inserted successfully: ' + data);
        } catch (Exception e) {
            System.debug('Error while inserting records: ' + e.getMessage());
            throw new AuraHandledException('Error: ' + e.getMessage());
        }
    }

    public class WrapperData {
        @AuraEnabled public Account accountObj;
        @AuraEnabled public Contact contactObj;
        @AuraEnabled public Case caseObj;
    }
}
