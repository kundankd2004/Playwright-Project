const XLSX = require('xlsx');

class ExcelUtils {

    static readExcel(filePath, sheetName) {

        const workbook = XLSX.readFile(filePath);

        const worksheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json(worksheet);

    }
}

module.exports = ExcelUtils;