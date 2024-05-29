'use client'
import { Grid, Box, TextField } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import RegimeGeralChart from '@/app/(DashboardLayout)/components/dashboard/RegimeGeralChart';
import { useState } from 'react';
import { BaseTable } from './components/dashboard/BaseTable';
import IRSJovemChart from './components/dashboard/IRSJovemChart';

const Dashboard = () => {
  let [ baseSalary, setBaseSalary ] = useState(0);

  const changeSalary = (event: any) => {
    setBaseSalary(event.target.value);
  }

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <TextField id="outlined-basic" label="Salário Bruto Base Anual" variant="outlined" style={{ display: "flex" }} onChange={changeSalary} />
          </Grid>
          <Grid item xs={12} lg={8}>
            <BaseTable baseSalary={baseSalary} />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <RegimeGeralChart baseSalary={baseSalary} />
              </Grid>
              <Grid item xs={12}>
                <IRSJovemChart baseSalary={baseSalary} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <text style={{textAlign: 'center', marginTop: '20px', display: 'flex'}}>Made with 💙 by &nbsp;<a href="https://github.com/jrui/AD-IrsJovem2025">jrui</a></text>
    </PageContainer>
  )
}

export default Dashboard;
