import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import '../css/dashboard/teachersDash.css'


export default function Calendar2() {
    const [value, onChange] = useState(new Date()) 
  return (
    <div>
        <Calendar onChange={onChange} value={value} className='calen' />
    </div>
  )
}
