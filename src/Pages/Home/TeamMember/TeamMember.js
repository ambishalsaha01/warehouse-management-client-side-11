import React from 'react';
import member1 from '../../../images/team_member/member1.jpg'
import member2 from '../../../images/team_member/member2.jpg'
import member3 from '../../../images/team_member/member3.jpg'
import './TeamMember.css'

const TeamMember = () => {
    return (
        <div id='member' className='container'>
            <h2 className='text-center mb-4'>Team Member</h2>
            <div className="team-container">
                <div className="team-member">
                    <img className='w-100' src={member1} alt="team-member" />
                    <h3>Mathew P. Brown</h3>
                    <p>CEO</p>
                </div>
                <div className="team-member">
                    <img className='w-100' src={member2} alt="team-member" />
                    <h3>Stanley W. Lewis</h3>
                    <p>Marketing Expert</p>
                </div>
                <div className="team-member">
                    <img className='w-100' src={member3} alt="team-member" />
                    <h3>Tyler R. Martinez</h3>
                    <p>Manager</p>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;