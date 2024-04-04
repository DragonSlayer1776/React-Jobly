import React from 'react';

function CompanyCard({ company }) {
    return (
        <div className="card">
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            {/* More company details */}
        </div>
    );
}


export default CompanyCard;