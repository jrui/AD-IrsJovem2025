import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { calculateTaxTable } from '@/utils/calculateTaxTable';


export function BaseTable(props: typeof BaseTable.defaultProps) {
  const { baseSalary } = props;
  let rows = calculateTaxTable(baseSalary);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Rendimento Coletável&nbsp;(€)</TableCell>
            <TableCell align="right">Taxa marginal IRS Jovem</TableCell>
            <TableCell align="right">Total IRS Jovem</TableCell>
            <TableCell align="right">Regime geral de IRS</TableCell>
            <TableCell align="right">Total Regime Geral</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.rendColectavel}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.rendColectavel}</TableCell>
              <TableCell align="right">{row.irsJovem}&nbsp;%</TableCell>
              <TableCell align="right">{row.irsJovemDeducao}&nbsp;€</TableCell>
              <TableCell align="right">{row.irsGeral}&nbsp;%</TableCell>
              <TableCell align="right">{row.irsGeralDeducao}&nbsp;€</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


BaseTable.defaultProps = {
  baseSalary: 0
};