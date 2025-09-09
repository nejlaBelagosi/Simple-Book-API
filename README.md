# 📚 Simple Book API - Postman Collection

This repository contains **Postman collections** and **environment files** used for testing the **Simple Book API**.  
It includes test results, environment configuration, and API requests grouped in collections.

---

## 🛠 Tools Used
- **Postman** – for API testing and automation.
- **JSON** – for storing collections, environments, and test results.

---

## 🌐 Repository Structure
```
postman/
├─ Environment/
│ └─ Simple Book API.postman_environment.json
├─ Test Results/
│ └─ Simple Book API.postman_test_run.json
└─ collections/
└─ 48284099-87c29c06-4e8a-4178-9a47-b9a4d6407ed4.json
```

## 📖 API Documentation

For detailed API documentation, visit the official page:

- [Simple Book API Documentation](https://documenter.getpostman.com/view/48284099/2sB3HnL154)

---

## ⚡ How to Use

1. **Import Environment and Collection into Postman**
   - Open Postman.
   - Go to **File → Import**.
   - Select the files from `Environment` and `collections` folders.

2. **Set the Environment**
   - After importing, select `Simple Book API` environment in Postman.

3. **Run Requests**
   - Explore the collection requests in Postman.
   - Send requests individually or run the entire collection using the **Collection Runner**.

4. **View Test Results**
   - Open `Test Results/Simple Book API.postman_test_run.json` to see detailed test outcomes.  

---

## 📂 Folder Overview
- **Environment/** – contains Postman environment JSON.  
- **Test Results/** – contains exported test run results in JSON format.  
- **collections/** – contains Postman collection JSON files with API requests.  

---

## 🚀 Next Steps
- Add more test cases for edge scenarios.  
- Automate collection runs using **Newman** for CI/CD integration.  
