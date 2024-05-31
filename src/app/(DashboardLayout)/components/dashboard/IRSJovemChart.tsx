
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, Avatar } from '@mui/material';
import { IconArrowUpRight } from '@tabler/icons-react';
import PropTypes from 'prop-types';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import { calculateTaxTable } from "@/utils/calculateTaxTable";


interface IIRSJovemChartProps {
  baseSalary: number;
}


export function IRSJovemChart(props: IIRSJovemChartProps) {
  const { baseSalary } = props;

  const theme = useTheme();
  // https://m2.material.io/inline-tools/color/
  const primary = "#00642f";
  const primarylight = '#19944e';
  const secondarylight = '#bedcc8';
  const successlight = theme.palette.success.light;

  // chart
  const optionscolumnchart: any = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, secondarylight],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent',
        },
      },
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
    ],
  };

  const rows = calculateTaxTable(baseSalary);
  const ss = baseSalary * 0.11;
  const irs = rows.map(row => row.irsGeralDeducao).reduce((a, b) => a + b, 0);
  const irsJovem = rows.map(row => row.irsJovemDeducao).reduce((a, b) => a + b, 0);

  const seriescolumnchart: any = [
    baseSalary - irsJovem - ss,
    irsJovem,
    ss
  ];

  return (
    <DashboardCard title="Remuneração Líquida IRS Jovem">
      <Grid container spacing={3}>
        {/* column */}
        <Grid item xs={7} sm={7}>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Typography variant="h3" fontWeight="700">
              {Math.round(((baseSalary - ss - irsJovem) / 14 ) * 100) / 100}€
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
                mês
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpRight width={20} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              {Math.round(((irs - irsJovem) / 14) * 100) / 100 || 0}€
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Regime Geral
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Typography variant="h3" fontWeight="700">
              {Math.round((baseSalary - ss - irsJovem) * 100) / 100}€
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
                ano
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Avatar sx={{ bgcolor: successlight, width: 27, height: 27 }}>
              <IconArrowUpRight width={20} color="#39B69A" />
            </Avatar>
            <Typography variant="subtitle2" fontWeight="600">
              {Math.round(((irs - irsJovem) / 100) * 100) || 0}€
            </Typography>
            <Typography variant="subtitle2" color="textSecondary">
              Regime Geral
            </Typography>
          </Stack>

          <Stack spacing={3} mt={5} direction="row">
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primary, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                Líquido
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: primarylight, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                IRS
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{ width: 9, height: 9, bgcolor: secondarylight, svg: { display: 'none' } }}
              ></Avatar>
              <Typography variant="subtitle2" color="textSecondary">
                SS
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* column */}
        <Grid item xs={5} sm={5}>
          <Chart
            options={optionscolumnchart}
            series={seriescolumnchart}
            type="donut"
            height={150} width={"100%"}
          />
        </Grid>
      </Grid>
    </DashboardCard>
  );
};


IRSJovemChart.defaultProps = {
  baseSalary: 0.0
};


IRSJovemChart.propTypes = {
  baseSalary: PropTypes.number,
};


export default IRSJovemChart;
