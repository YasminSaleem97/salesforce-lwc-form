import { LightningElement, track } from 'lwc';
import saveData from '@salesforce/apex/AccountContactCaseController.saveData';

export default class AccountContactCaseForm extends LightningElement {
    @track account = { Name: '', Industry: '' };
    @track contact = { FirstName: '', LastName: '', Email: '' };
    @track caseObj = { Subject: '', Status: 'New', Priority: 'Medium' };

    handleChange(event) {
        const { name, value, dataset } = event.target;
        if (dataset.obj === 'account') this.account[name] = value;
        if (dataset.obj === 'contact') this.contact[name] = value;
        if (dataset.obj === 'case') this.caseObj[name] = value;
    }

    async handleSubmit() {
        const wrapper = {
            accountObj: this.account,
            contactObj: this.contact,
            caseObj: this.caseObj
        };
        try {
            await saveData({ wrapperStr: JSON.stringify(wrapper) });
            alert('Account, Contact, and Case created successfully!');
        } catch (error) {
            console.error(error);
            alert('Error: ' + error.body.message);
        }
    }
}
