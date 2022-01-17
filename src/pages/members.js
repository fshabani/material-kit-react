//import Head from 'next/head';
import { Box, Container } from '@mui/material';
//import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { EnhancedTable } from '../components/customer/member-list';
import { DashboardLayout } from '../components/dashboard-layout';
//import { customers } from '../__mocks__/customers';

const Members = () => (
  <>

    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          { <EnhancedTable /> }
        </Box>
      </Container>
    </Box>
  </>
);
Members.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Members;
