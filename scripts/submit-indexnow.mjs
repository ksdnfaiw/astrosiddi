import https from 'https';

const HOST = 'www.astrosiddi.com';
const KEY = '8fa3d9b0487d4615a9992fca1249b5c2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const URLS = [
  'https://www.astrosiddi.com/',
  'https://www.astrosiddi.com/about',
  'https://www.astrosiddi.com/contact',
  'https://www.astrosiddi.com/services',
  'https://www.astrosiddi.com/services/kundali-matching',
  'https://www.astrosiddi.com/services/vastu-visakhapatnam',
  'https://www.astrosiddi.com/services/career-astrology',
  'https://www.astrosiddi.com/tools',
  'https://www.astrosiddi.com/tools/numerology-calculator',
  'https://www.astrosiddi.com/blog',
  'https://www.astrosiddi.com/blog/finding-best-astrologer-in-visakhapatnam',
  'https://www.astrosiddi.com/blog/vedic-kundali-matching-ashta-kuta-kuja-dosha',
  'https://www.astrosiddi.com/blog/non-demolition-vastu-apartments-visakhapatnam',
  'https://www.astrosiddi.com/blog/best-astrologer-in-visakhapatnam',
  'https://www.astrosiddi.com/blog/kundali-matching-marriage-telugu-vedic-astrology',
  'https://www.astrosiddi.com/blog/vastu-shastra-guide-homes-flats-visakhapatnam',
  'https://www.astrosiddi.com/blog/how-to-calculate-your-moon-sign',
  'https://www.astrosiddi.com/blog/telugu-jyothisham-books',
  'https://www.astrosiddi.com/blog/signs-you-need-vastu-correction-at-home',
  'https://www.astrosiddi.com/blog/how-kundali-matching-really-works-telugu-tradition',
  'https://www.astrosiddi.com/blog/numerology-basics-birth-number-career-timing',
  'https://www.astrosiddi.com/blog/career-astrology-reading-kundali-for-job-business-timing',
  'https://www.astrosiddi.com/blog/manglik-dosha-myths-vs-facts',
  'https://www.astrosiddi.com/blog/vastu-tips-visakhapatnam-apartments',
  'https://www.astrosiddi.com/terms',
  'https://www.astrosiddi.com/privacy',
];

function postIndexNow(endpoint, payload) {
  return new Promise((resolve, reject) => {
    const url = new URL(endpoint);
    const data = JSON.stringify(payload);

    const options = {
      hostname: url.hostname,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data),
        'User-Agent': 'AstroSiddi-IndexNow-Submitter/1.0',
      },
    };

    const req = https.request(options, (res) => {
      let resBody = '';
      res.on('data', (chunk) => (resBody += chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: resBody,
        });
      });
    });

    req.on('error', (err) => reject(err));
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log(`Submitting ${URLS.length} URLs for ${HOST} to IndexNow...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URLS,
  };

  const endpoints = [
    'https://api.indexnow.org/IndexNow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    console.log(`Submitting to ${endpoint}...`);
    try {
      const res = await postIndexNow(endpoint, payload);
      console.log(`Response from ${endpoint}: HTTP ${res.statusCode} (${res.statusMessage || 'OK'})`);
      if (res.body) {
        console.log(`Body: ${res.body}`);
      }
    } catch (err) {
      console.warn(`Submission to ${endpoint} failed: ${err.message}`);
    }
  }

  console.log('IndexNow submission finished.');
}

main().catch(console.error);
