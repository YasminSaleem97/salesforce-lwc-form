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

