const puppeteer = require('puppeteer');
const xlsx = require('xlsx');

const JOB_URL = 'https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35';

const scrapeJobs = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(JOB_URL, { waitUntil: 'networkidle2' });

    const jobs = await page.evaluate(() => {
      const jobElements = document.querySelectorAll('.job-bx');
      const jobData = [];

      jobElements.forEach((el) => {
        const jobTitle = el.querySelector('.job-title')?.innerText.trim() || 'N/A';
        const companyName = el.querySelector('.company-name')?.innerText.trim() || 'N/A';
        const location = el.querySelector('.job-location')?.innerText.trim() || 'N/A';
        const jobType = el.querySelector('.job-type')?.innerText.trim() || 'N/A';
        const postedDate = el.querySelector('.posted')?.innerText.trim() || 'N/A';
        const jobDescription = el.querySelector('.job-short-desc')?.innerText.trim() || 'N/A';

        if (jobTitle) {
          jobData.push({ Job_Title: jobTitle, Company_Name: companyName, Location: location, Job_Type: jobType, Posted_Date: postedDate, Job_Description: jobDescription });
        }
      });

      return jobData;
    });

    await browser.close();
    return jobs;
  } catch (error) {
    console.error('Error scraping job data:', error);
    return [];
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
