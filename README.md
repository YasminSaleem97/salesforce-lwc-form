# Salesforce LWC Form — Create Account, Contact, and Case Records

This project demonstrates how to build a **Lightning Web Component (LWC)** form that creates related **Account, Contact, and Case** records in Salesforce using **Apex Wrapper Class** and **JSON Serialization/Deserialization**.

---

## 🧭 Overview

This project was part of my learning journey to deeply understand how **data flows between LWC (frontend)** and **Apex (backend)** in Salesforce.  
The form collects Account, Contact, and Case details from the user, sends them to Apex as a **JSON string**, and then creates the related records — all in a single transaction.

---

## 💡 Key Concepts Covered

- LWC to Apex communication using `@AuraEnabled`
- Passing complex data as JSON string (`JSON.stringify()`)
- Converting JSON string back to Apex object (`JSON.deserializeStrict()`)
- Using **Wrapper Classes** to handle multiple sObjects together
- Creating parent-child records (Account → Contact → Case)
- Clean and reusable Apex logic

---

## 🧱 Project Structure
salesforce-lwc-form/
├── force-app/
│ ├── main/
│ │ ├── default/
│ │ │ ├── classes/
│ │ │ │ └── AccountContactCaseController.cls
│ │ │ ├── lwc/
│ │ │ │ └── lwcForm/
│ │ │ │ ├── lwcForm.html
│ │ │ │ ├── lwcForm.js
│ │ │ │ ├── lwcForm.js-meta.xml
│ │ │ │ └── lwcForm.css
│ │ │ └── ...

🧠** Learnings**
How to pass structured data between frontend and backend.
Importance of JSON.deserializeStrict() for safe data handling.
How Wrapper Classes simplify multi-object operations.
How to debug LWC ↔️ Apex data flow.

👩‍💻 **Author**
Yasmin Saleem
Salesforce Developer | LWC Enthusiast | AgentForce Champion

⭐ **Contribution**
Feel free to fork this repo, open issues, or submit PRs if you want to enhance this example further!

🔗 Blog Reference
👉 Read the full blog post: “How I Used Wrapper Classes and JSON to Create Related Records in Salesforce” (coming soon on SalesforceTrail.com
)
