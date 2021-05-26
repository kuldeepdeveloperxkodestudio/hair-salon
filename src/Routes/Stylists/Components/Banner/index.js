import React from 'react'
import './style.scss'
import { Images } from '../../../../Shared/Assets'

const TeamBanner = () => {
    return (
        <>
            <div className="TeamBanner">
                <img alt="" src={Images.ServicePageBanner} />
                <h1>OUR TEAM</h1>
            </div>
        </>
    )
}
export default TeamBanner;