'use client'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

// Component Imports
import Pricing from '@components/pricing'
import { pricingData } from '@configs/pricingdata' // Adjust the import path as per your project structure


const PricingPage = () => {
  return (
    <Card>
      <CardContent className='xl:!plb-16 xl:pli-[6.25rem] pbs-10 pbe-5 pli-5 sm:p-16'>
        <Pricing data={pricingData} />
      </CardContent>
    </Card>
  );
};

export default PricingPage
