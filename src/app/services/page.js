import CertificationsAndServices from '@/components/services/certifications-and-services'
import FinancialServices from '@/components/services/financial-services'
import WealthManagementSection from '@/components/services/wealth-management-section'
import React from 'react'

const page = () => {
  return (
    
    <>
    <FinancialServices />
    <WealthManagementSection />
    <CertificationsAndServices />
    </>
  )
}

export default page