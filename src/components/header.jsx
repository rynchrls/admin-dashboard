import React from 'react'
import '../css/header.css'


function Header({ toShowNav }) {
    const [ active, setActive] = React.useState({
        isActive: false
    })
    const [shownotif,setShownotif] = React.useState({
        isShow: false
    })

    const handleClick = () => {
        setActive(prev => ({
            ...prev,
            isActive: !prev.isActive
        }))
    }

    const showNotif = () => {
        setShownotif(prev => ({
            ...prev,
            isShow: !prev.isShow
        }))
    }


  return (
    <div className='header'>
        <div className='left-side'>
        <svg className='menu' onClick={toShowNav} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path></svg>
        <h1 className="title2">
        ESK<span>WELA</span>
        </h1>    
            <div className='search'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                <input type='search' placeholder='Search here' />
            </div>
        </div>

        <div className='right-side'>
            <div className='bell-wrapper'>
                <svg onClick={showNotif} xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24"><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 23z"></path></svg>
            </div>
            <div className='profile' onClick={handleClick}>
                <div className='img-wrapper'>
                    <img src='../../images/mybaby.jpg' />
                </div>
                <div className='name-wrapper21'>
                    <h6>Ryan Charles</h6>
                    <span>Administrator</span>
                </div>
                <svg className={active.isActive === true ? 'svg-active' : ''} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path></svg>       
            </div>
            <div className={`profile-card ${active.isActive === true ? 'active2' : ''}`}>
                    <div className='card-wrapper'>
                        <img src='../../images/mybaby.jpg' />
                        <div>
                            <h6>Ryan Charles</h6>
                            <span>Administrator</span>
                        </div>
                    </div>
                    <div className='shifter'>My Profile</div>
                    <div className='shifter'>Inbox</div>
                    <div className='shifter'>Log out</div>
            </div>
            <div className={`notify ${shownotif.isShow === true ? 'active3' : ''}`}>
                <div className='top'>
                    <div>Notification</div>
                    <div className='clear-all'>CLEAR ALL</div>
                </div>
                <div className='middle'>
                    <div className='notif'>
                        <img src='../../images/mybaby.jpg' />
                        <div className='notif-content'>
                            <p>Loraine Montecalvo <span>has approved</span> <strong>your estimate</strong></p>
                            <span className='minutes'>4 mins ago</span>
                        </div>
                    </div>
                    <div className='notif'>
                        <img src='../../images/mybaby.jpg' />
                        <div className='notif-content'>
                            <p>Loraine Montecalvo <span>has approved</span> <strong>your estimate</strong></p>
                            <span className='minutes'>4 mins ago</span>
                        </div>
                    </div>
                    <div className='notif'>
                        <img src='../../images/mybaby.jpg' />
                        <div className='notif-content'>
                            <p>Loraine Montecalvo <span>has approved</span> <strong>your estimate</strong></p>
                            <span className='minutes'>4 mins ago</span>
                        </div>
                    </div>
                    <div className='notif'>
                        <img src='../../images/mybaby.jpg' />
                        <div className='notif-content'>
                            <p>Loraine Montecalvo <span>has approved</span> <strong>your estimate</strong></p>
                            <span className='minutes'>4 mins ago</span>
                        </div>
                    </div>
                </div>
                <footer>View all notification</footer>
            </div>    
        </div>
        
    </div>
  )
}

export default Header
