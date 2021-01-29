import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import {v4 as uid} from 'uuid';

const CompanyProfile = ({companyData}) => {
    return (
        <div>
            {companyData && Object.entries(companyData).map(([title, value]) => {
                console.log(title, value)
                
                return <InfoCard key={uid()} title={title} value={value} />
            })}
        </div>
    )
}

export default CompanyProfile
