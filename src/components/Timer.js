// Use moment.js

import moment from 'moment';

function Timer() {
    const now = moment().format('HH:mm:ss')
    
    return(
        <p className='time-stamp'>{now}</p>
    )
}

export default Timer