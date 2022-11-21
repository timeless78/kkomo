const fs = require('fs');
const path = require('path');

function getListinFolder(folder) {
  let resultList = [];

  const appPath = path.join(__dirname, '~/assets/images/', folder);

  // read filelist
  resultList = fs.readdirSync(appPath);

  return resultList;
}


export default getListinFolder;
