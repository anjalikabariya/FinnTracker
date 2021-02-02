import React from 'react'
import InfoCard from '../InfoCard/InfoCard';
import {v4 as uid} from 'uuid';
import './styles.scss';

//maps company data into InfoCard component
const CompanyProfile = ({companyData}) => {
    return (
        <div className="profile__container">
            {companyData && Object.entries(companyData).map(([title, value]) => {    
                return <InfoCard key={uid()} title={title} value={value} />
            })}
        </div>
    )
}

export default CompanyProfile
