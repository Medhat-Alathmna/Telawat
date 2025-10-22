import fs from 'fs';
import { parseString } from 'xml2js';
import path from 'path';

// 🔹 ملف XML الأصلي من Tanzil
const inputFile = './src/assets/data/quran-uthmani.xml';

// 🔹 مجلد ناتج لحفظ السور
const outputDir = './src/assets/quran/surahs';

// تأكد من وجود المجلد
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// قراءة وتحليل XML
const xml = fs.readFileSync(inputFile, 'utf8');

parseString(xml, (err, result) => {
  if (err) throw err;

  const surahs = result.quran.sura;

  surahs.forEach((sura) => {
    const index = sura.$.index.padStart(3, '0'); // مثل 001
    const name = sura.$.name;
    const ayat = sura.aya.map((a) => ({
      index: a.$.index,
      text: a.$.text,
    }));

    const data = {
      index,
      name,
      ayat,
    };

    const filePath = path.join(outputDir, `${index}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    console.log(`✅ Created ${filePath}`);
  });

  console.log('🎉 Done! All surahs exported as JSON.');
});
