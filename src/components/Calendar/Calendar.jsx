import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [state, setState] = useState({
    selectedDate: new Date(2021, 3, 7), // April 7, 2021 (from Figma design)
    currentMonth: 3, // April
    currentYear: 2021
  });

  const handleDateClick = (e) => {
    const dayElement = e.target.closest('.day');
    if (dayElement && !dayElement.classList.contains('disabled')) {
      const calendarElement = dayElement.closest('.calendar');
      calendarElement.querySelectorAll('.day').forEach(day => day.classList.remove('selected'));
      dayElement.classList.add('selected');
    }
  };

  const handlePrevMonth = () => {
    setState(prevState => {
      let newMonth = prevState.currentMonth - 1;
      let newYear = prevState.currentYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      }
      return {
        ...prevState,
        currentMonth: newMonth,
        currentYear: newYear
      };
    });
  };

  const handleNextMonth = () => {
    setState(prevState => {
      let newMonth = prevState.currentMonth + 1;
      let newYear = prevState.currentYear;
      if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      return {
        ...prevState,
        currentMonth: newMonth,
        currentYear: newYear
      };
    });
  };

  return (
    <div className="calendar-wrapper">
      {/* Dark Mode Calendar */}
      <div className="calendar dark-mode">
        <div className="calendar-content">
          <div className="calendar-header">
            <button className="nav-btn prev-month" onClick={handlePrevMonth}>
              <span className="chevron-icon left"></span>
            </button>
            <div className="month-year">
              <div className="dropdown month">
                <span>{months[state.currentMonth]}</span>
                <span className="dropdown-arrow"></span>
              </div>
              <div className="dropdown year">
                <span>{state.currentYear}</span>
                <span className="dropdown-arrow"></span>
              </div>
            </div>
            <button className="nav-btn next-month" onClick={handleNextMonth}>
              <span className="chevron-icon right"></span>
            </button>
          </div>
          <div className="calendar-days">
            <div className="weekdays">
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
              <span>Su</span>
            </div>
            <div className="days" onClick={handleDateClick}>
              <span className="day disabled">29</span>
              <span className="day disabled">30</span>
              <span className="day disabled">31</span>
              <span className="day">1</span>
              <span className="day">2</span>
              <span className="day">3</span>
              <span className="day">4</span>
              <span className="day">5</span>
              <span className="day">6</span>
              <span className="day today selected">7</span>
              <span className="day">8</span>
              <span className="day">9</span>
              <span className="day">10</span>
              <span className="day">11</span>
              <span className="day">12</span>
              <span className="day">13</span>
              <span className="day">14</span>
              <span className="day">15</span>
              <span className="day">16</span>
              <span className="day">17</span>
              <span className="day">18</span>
              <span className="day">19</span>
              <span className="day">20</span>
              <span className="day">21</span>
              <span className="day">22</span>
              <span className="day">23</span>
              <span className="day">24</span>
              <span className="day">25</span>
              <span className="day">26</span>
              <span className="day">27</span>
              <span className="day">28</span>
              <span className="day">29</span>
              <span className="day">30</span>
              <span className="day disabled">1</span>
              <span className="day disabled">2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Light Mode Calendar */}
      <div className="calendar light-mode">
        <div className="calendar-content">
          <div className="calendar-header">
            <button className="nav-btn prev-month" onClick={handlePrevMonth}>
              <span className="chevron-icon left"></span>
            </button>
            <div className="month-year">
              <div className="dropdown month">
                <span>{months[state.currentMonth]}</span>
                <span className="dropdown-arrow"></span>
              </div>
              <div className="dropdown year">
                <span>{state.currentYear}</span>
                <span className="dropdown-arrow"></span>
              </div>
            </div>
            <button className="nav-btn next-month" onClick={handleNextMonth}>
              <span className="chevron-icon right"></span>
            </button>
          </div>
          <div className="calendar-days">
            <div className="weekdays">
              <span>Mo</span>
              <span>Tu</span>
              <span>We</span>
              <span>Th</span>
              <span>Fr</span>
              <span>Sa</span>
              <span>Su</span>
            </div>
            <div className="days" onClick={handleDateClick}>
              <span className="day disabled">29</span>
              <span className="day disabled">30</span>
              <span className="day disabled">31</span>
              <span className="day">1</span>
              <span className="day">2</span>
              <span className="day">3</span>
              <span className="day">4</span>
              <span className="day">5</span>
              <span className="day">6</span>
              <span className="day today selected">7</span>
              <span className="day">8</span>
              <span className="day">9</span>
              <span className="day">10</span>
              <span className="day">11</span>
              <span className="day">12</span>
              <span className="day">13</span>
              <span className="day">14</span>
              <span className="day">15</span>
              <span className="day">16</span>
              <span className="day">17</span>
              <span className="day">18</span>
              <span className="day">19</span>
              <span className="day">20</span>
              <span className="day">21</span>
              <span className="day">22</span>
              <span className="day">23</span>
              <span className="day">24</span>
              <span className="day">25</span>
              <span className="day">26</span>
              <span className="day">27</span>
              <span className="day">28</span>
              <span className="day">29</span>
              <span className="day">30</span>
              <span className="day disabled">1</span>
              <span className="day disabled">2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
