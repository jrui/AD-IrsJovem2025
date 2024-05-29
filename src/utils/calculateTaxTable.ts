function createData(
    id: number,
    rendColectavel: string,
    irsJovem: number,
    irsJovemDeducao: number,
    irsGeral: number,
    irsGeralDeducao: number
  ) {
    return { id, rendColectavel, irsJovem, irsJovemDeducao, irsGeral, irsGeralDeducao };
  }
  
  
  export function calculateTaxTable(baseSalary: number) {
    return [
        createData(
        0, 'Até 7 703€',
        4.42,
        (() => {
            const irs = Math.floor(Math.min(7703, baseSalary) * (4.42 / 100));
            return irs;
        })(),
        13.25,
        (() => {
            const irs = Math.floor(Math.min(7703, baseSalary) * (13.25 / 100));
            return irs;
        })(),
        ),

        createData(
        1, 'De 7 703€ até 11 623€',
        6.00,
        (() => {
            const irs = Math.floor(Math.min(11623 - 7703, baseSalary - 7703) * (6.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        18.00,
        (() => {
            const irs = Math.floor(Math.min(11623 - 7703, baseSalary - 7703) * (18.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),

        createData(
        2, 'De 11 623€ até 16 472€',
        7.67,
        (() => {
            const irs = Math.floor(Math.min(16472 - 11623, baseSalary - 11623) * (7.67 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        23.00,
        (() => {
            const irs = Math.floor(Math.min(16472 - 11623, baseSalary - 11623) * (23.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),

        createData(
        3, 'De 16 472€ até 21 321€',
        8.67,
        (() => {
            const irs = Math.floor(Math.min(21321 - 16472, baseSalary - 16472) * (8.67 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        26.00,
        (() => {
            const irs = Math.floor(Math.min(21321 - 16472, baseSalary - 16472) * (26.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),
        
        createData(
        4, 'De 21 321€ até 27 146€',
        10.92,
        (() => {
            const irs = Math.floor(Math.min(27146 - 21321, baseSalary - 21321) * (10.92 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        32.75,
        (() => {
            const irs = Math.floor(Math.min(27146 - 21321, baseSalary - 21321) * (32.75 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),

        createData(
        5, 'De 27 146€ até 39 791€',
        12.33,
        (() => {
            const irs = Math.floor(Math.min(39791 - 27146, baseSalary - 27146) * (12.33 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        37.00,
        (() => {
            const irs = Math.floor(Math.min(39791 - 27146, baseSalary - 27146) * (37.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),

        createData(
        6, 'De 39 791€ até 51 997€',
        14.50,
        (() => {
            const irs = Math.floor(Math.min(51997 - 39791, baseSalary - 39791) * (14.50 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        43.50,
        (() => {
            const irs = Math.floor(Math.min(51997 - 39791, baseSalary - 39791) * (43.50 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),

        createData(
        7, 'De 51 997€ até 81 199€',
        15.00,
        (() => {
            const irs = Math.floor(Math.min(81199 - 51997, baseSalary - 51997) * (15.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        45.00,
        (() => {
            const irs = Math.floor(Math.min(81199 - 51997, baseSalary - 51997) * (45.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),

        createData(
        8, 'Mais de 81 199€',
        48.00,
        (() => {
            const irs = Math.floor(Math.max(baseSalary - 81199) * (48.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        48.00,
        (() => {
            const irs = Math.floor(Math.max(baseSalary - 81199) * (48.00 / 100));
            return irs < 0 ? 0 : irs;
        })(),
        ),
    ];
}