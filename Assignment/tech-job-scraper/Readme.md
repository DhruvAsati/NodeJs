### **Solution: Scraping Tech Job Postings with Node.js**

In this assignment, we'll scrape job postings from the provided URL using **Node.js** and the `axios` and `cheerio` libraries. The scraped data will then be saved into an Excel sheet using the `xlsx` library.

---

### **Project Setup**

1. **Create a New Project**:
   ```bash
   mkdir tech-job-scraper
   cd tech-job-scraper
   npm init -y
   ```

2. **Install Dependencies**:
   ```bash
   npm install axios cheerio xlsx
   ```

3. **Project Structure**:
   Create the following files:
   - `index.js`: Main scraping and data-saving script.
   - `README.md`: Project documentation.

---

### **Implementation**

**`index.js`: Main Script**

```javascript
const axios = require('axios');
const cheerio = require('cheerio');
const xlsx = require('xlsx');
const fs = require('fs');

// Constants
const JOB_URL =
  'https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35';

const scrapeJobs = async () => {
  try {
    const { data } = await axios.get(JOB_URL);
    const $ = cheerio.load(data);

    const jobs = [];

    $('.job-bx').each((i, el) => {
      const jobTitle = $(el).find('.job-title').text().trim();
      const companyName = $(el).find('.company-name').text().trim();
      const location = $(el).find('.job-location').text().trim();
      const jobType = $(el).find('.job-type').text().trim() || 'Not Specified';
      const postedDate = $(el).find('.posted').text().trim();
      const jobDescription = $(el).find('.job-short-desc').text().trim();

      if (jobTitle) {
        jobs.push({
          Job_Title: jobTitle,
          Company_Name: companyName,
          Location: location,
          Job_Type: jobType,
          Posted_Date: postedDate,
          Job_Description: jobDescription,
        });
      }
    });

    console.log(`Scraped ${jobs.length} jobs`);
    return jobs;
  } catch (err) {
    console.error('Error fetching job data:', err);
  }
};

const saveToExcel = (jobs) => {
  try {
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(jobs);
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Jobs');

    const filePath = './tech_jobs.xlsx';
    xlsx.writeFile(workbook, filePath);
    console.log(`Data saved to ${filePath}`);
  } catch (err) {
    console.error('Error saving data to Excel:', err);
  }
};

// Main Function
(async () => {
  const jobs = await scrapeJobs();
  if (jobs && jobs.length) {
    saveToExcel(jobs);
  } else {
    console.log('No jobs found.');
  }
})();
```

---

### **Testing the Script**

1. Run the script:
   ```bash
   node index.js
   ```

2. The output will indicate the number of scraped jobs, and the data will be saved to `tech_jobs.xlsx` in the project directory.

---

### **Output**

**Excel File Structure**:

| Job_Title                     | Company_Name   | Location    | Job_Type      | Posted_Date   | Job_Description        |
|-------------------------------|----------------|-------------|---------------|---------------|------------------------|
| Software Developer            | TechCorp Ltd.  | New York, NY | Full-time     | 2 days ago    | Build scalable apps... |
| Frontend Engineer             | WebWorks Inc.  | Remote       | Contract      | 1 week ago    | Develop web UI...      |
| ...                           | ...            | ...         | ...           | ...           | ...                    |

---

### **Submission Details**

1. **GitHub Repository**:
   - Upload the following files:
     - `index.js`: Main script.
     - `package.json`: Metadata for dependencies.
     - `README.md`: Documentation.

2. **Excel Sheet**:
   - Upload the `tech_jobs.xlsx` file to a cloud storage service like Google Drive.
   - Provide a shareable **view access link** in your submission.

---

### **README.md Documentation**

```markdown
# Tech Job Scraper

This project scrapes tech job postings from the TimesJobs website and organizes the data into an Excel sheet.

## Features

- Scrapes job details:
  - Job Title
  - Company Name
  - Location
  - Job Type
  - Posted Date
  - Job Description
- Saves the data in an Excel file.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd tech-job-scraper
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the script:
   ```bash
   node index.js
   ```

## Output

- The data will be saved in an Excel file named `tech_jobs.xlsx`.

## Challenges

- Handling missing job details.
- Ensuring the script adapts to changes in website structure.

## License

This project is licensed under the MIT License.
```

---

### **Assessment Criteria**

- **Data Extraction**: Successfully extracts all required job details.
- **Excel File**: Data is correctly formatted and saved to an Excel sheet.
- **Code Organization**: Clear structure with modular functions (`scrapeJobs` and `saveToExcel`).
- **Documentation**: README file provides setup, usage instructions, and project overview.