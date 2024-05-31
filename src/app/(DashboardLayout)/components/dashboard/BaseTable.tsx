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
            <TableCell><b>Rendimento Coletável&nbsp;(€)</b></TableCell>
            <TableCell align="right"><b>Taxa marginal IRS Jovem</b></TableCell>
            <TableCell align="right"><b>Total IRS Jovem</b></TableCell>
            <TableCell align="right"><b>Regime geral de IRS</b></TableCell>
            <TableCell align="right"><b>Total Regime Geral</b></TableCell>
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