app.get('/read-excel', async function (req, res) {
  const fileName = 'picks.xlsx';
  const sheetNames = await readSheetNames(fileName);

  const allSheetRows = await Promise.all([
    ...sheetNames.map(async (sheetName) => {
      const rows = await readXlsxFile(fileName, { sheet: sheetName });
      return {
        sheet: sheetName,
        rows,
        points: 0,
      };
    }),
  ]);

  res.json(allSheetRows);
  allSheetRows.forEach((i) => {
    console.log(i);
  });
});






    async function loadData() {
      const response = await fetch(url, options);
      const results = await response.json();
    }
  
    loadData()