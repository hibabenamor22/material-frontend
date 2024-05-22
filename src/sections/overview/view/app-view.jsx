import React from 'react';
import { Link } from 'react-router-dom'; // import Link
import { faker } from '@faker-js/faker';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge'; 
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import AppNewsUpdate from '../app-news-update';
import AppWidgetSummary from '../app-widget-summary';
import AppWebsiteVisits from '../app-website-visits';
import AppCurrentSubject from '../app-current-subject';

export default function AppView() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h3" sx={{ mb: 5, color: '#0C8599' }}>
        Hi, Welcome back 👋
      </Typography>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Scan Activity
      </Typography> 
     
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={4}>
          <Box border={1} borderRadius="16px" borderColor="transparent" p={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={200} bgcolor="#FFFFFF">
            <Gauge
              value={1}
              startAngle={-110}
              endAngle={110}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 30,
                  transform: 'translate(0px, 0px)',
                },
              }}
              text={({ value, valueMax }) => `${value} / ${10}`}
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Running Scans
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Box border={1} borderRadius="16px" borderColor="transparent" p={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={200} bgcolor="#FFFFFF">
            <Gauge
              value={1}
              startAngle={-110}
              endAngle={110}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 30,
                  transform: 'translate(0px, 0px)',
                },
              }}
              text={({ value, valueMax }) => `${value} / ${10}`} 
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Waiting Scans
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} md={4}>
          <Box border={1} borderRadius="16px" borderColor="transparent" p={2} display="flex" flexDirection="column" alignItems="center" justifyContent="center" height={200} bgcolor="#FFFFFF">
            <Gauge
              value={1}
              startAngle={-110}
              endAngle={110}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 30,
                  transform: 'translate(0px, 0px)',
                },
              }}
              text={({ value, valueMax }) => `${value} / ${10}`} 
            />
            <Typography variant="h6" sx={{ mt: 2 }}>
              Finished Scans
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Vulnerability summary"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={4}>
  <Box border={1} borderRadius="16px" borderColor="transparent" p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" height={200} bgcolor="#FFFFFF">
    <Typography variant="h6" sx={{ mb: 3, alignSelf: 'flex-start' }}>
      Latest Scans
    </Typography>
    <Typography variant="body1" sx={{ mt: 2, alignSelf: 'center', mb: 2 }}>
      You don't have any scans yet.
    </Typography>
    <Link to="/products">
      <Button variant="contained" color="primary" sx={{ backgroundColor: '#0C8599', width: '100%', alignSelf: 'center' }}>
        Start a Scan
      </Button>
    </Link>
  </Box>
</Grid>

        <Grid item xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="Read"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.name.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>
      </Grid>
    </Container>
  );
}