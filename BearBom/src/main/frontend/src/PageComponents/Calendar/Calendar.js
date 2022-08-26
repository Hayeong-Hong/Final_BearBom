import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers-pro/AdapterDateFns";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { DateRangePickerDay as MuiDateRangePickerDay } from "@mui/x-date-pickers-pro/DateRangePickerDay";

const DateRangePickerDay = styled(MuiDateRangePickerDay)(
  ({ theme, isHighlighting, isStartOfHighlighting, isEndOfHighlighting }) => ({
    ...(isHighlighting && {
      borderRadius: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      "&:hover, &:focus": {
        backgroundColor: theme.palette.primary.dark,
      },
    }),
    ...(isStartOfHighlighting && {
      borderTopLeftRadius: "50%",
      borderBottomLeftRadius: "50%",
    }),
    ...(isEndOfHighlighting && {
      borderTopRightRadius: "50%",
      borderBottomRightRadius: "50%",
    }),
  })
);

function Calendar4() {
  const [value, setValue] = React.useState([null, null]);

  const renderWeekPickerDay = (date, dateRangePickerDayProps) => {
    return <DateRangePickerDay {...dateRangePickerDayProps} />;
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDateRangePicker
        displayStaticWrapperAs=""
        label="date range"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderDay={renderWeekPickerDay}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}> to </Box>
            <TextField {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}
export default Calendar4;

// // import React, { useState } from "react";
// // import "../../css/calendar.css";
// // import { Calendar } from "react-date-range";
// // import { ko } from "date-fns/esm/locale";

// // function Calendar3() {
// //   const [startDate, setStartDate] = useState(new Date());
// //   const [endDate, setEndDate] = useState(new Date());

// //   return (
// //     <section>
// //       <p>(필수) 프로젝트 기간</p>
// //       <p>프로젝트의 진행 기간을 선택해주세요.</p>
// //       <div>
// //         <p>프로젝트 시작일: </p>
// //         <Calendar
// //           selected={startDate}
// //           onChange={(date) => setStartDate(date)}
// //           locale={ko}
// //           dateFormat="yyyy년 MM월 dd일"
// //           placeholderText="Weeks start on Monday"
// //           minDate={new Date()}
// //           selectsStart
// //           startDate={startDate}
// //           endDate={endDate}
// //         />
// //       </div>
// //       <div>
// //         <p>프로젝트 종료일:</p>
// //         <Calendar
// //           selected={endDate}
// //           onChange={(date) => setEndDate(date)}
// //           locale={ko}
// //           dateFormat="yyyy년 MM월 dd일"
// //           placeholderText="Weeks start on Monday"
// //           selectsEnd
// //           endDate={endDate}
// //           minDate={startDate}
// //         />
// //       </div>
// //     </section>
// //   );
// // }
// // export default Calendar3;
// // import React, { useState, useQuery } from "react";
// // import Calendar from "react-calendar";
// // import "../../css/calendar.css"; // css import
// // import moment from "moment";
// // import axios from "axios";

// // function MyApp() {
// //   const [value, onChange] = useState(new Date());
// //   const [mark, setMark] = useState([]);

// //   const { data } = useQuery(
// //     ["logDate", month],
// //     async () => {
// //       const result = await axios.get(`/api/healthLogs?health_log_type=DIET`);
// //       return result.data;
// //     },
// //     {
// //       onSuccess: (data) => {
// //         setMark(data);
// //         // ["2022-02-02", "2022-02-02", "2022-02-10"] 형태로 가져옴
// //       },
// //     }
// //   );
// //   return (
// //     <div>
// //       <Calendar
// //         onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
// //         formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
// //         value={value}
// //         minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
// //         maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
// //         navigationLabel={null}
// //         showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
// //         className="mx-auto w-full text-sm border-b"
// //         tileContent={({ date, view }) => {
// //           // 날짜 타일에 컨텐츠 추가하기 (html 태그)
// //           // 추가할 html 태그를 변수 초기화
// //           let html = [];
// //           // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
// //           if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
// //             html.push(<div className="dot"></div>);
// //           }
// //           // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
// //           return (
// //             <>
// //               <div className="flex justify-center items-center absoluteDiv">
// //                 {html}
// //               </div>
// //             </>
// //           );
// //         }}
// //       />
// //     </div>
// //   );
// // }
// // import { Calendar } from 'react-date-range';
// // import { Component } from 'react';
// // class CalendarComponent extends Component {
// //   handleSelect(date) {
// //     console.log(date); // native Date object
// //   }
// //   render(){
// //     return (<Calendar date= onChange= /> );
// //   }
// // }
// // export default CalendarComponent;
// // import { Calendar } from "react-date-range"; // 얘가 캘린더 라이브러리
// // import ko from "date-fns/locale/ko"; // 날짜 포맷 라이브러리 (한국어 기능을 임포트)
// // import moment from "moment"; // 날짜 포맷 라이브러리
// // import React, { useState, useCallback } from "react";

// // function Calendar3() {
// //   const [showCalendar, setShowCalendar] = useState(); // 캘린더 여는 토글
// //   const tomorrow = moment().add(1, "d").toDate(); // 내일 날짜 기본값지정을 위해
// //   const [date, setDate] = useState(tomorrow); // date 를 선언하고 기본값을 내일날짜로 지정

// //   const onChangeDate = useCallback(
// //     (date) => {
// //       // date 변경값을 받아오는 함수
// //       if (!date) {
// //         return;
// //       } // 날짜값이 없을 때 예외처리
// //       setDate(date); // 날짜값이 들어오면 date 를 set해준다
// //     },
// //     [date]
// //   );
// //   return (
// //     <>
// //       <Calendar
// //         locale={ko} // 한국어 달력
// //         months={1} // 1달치 달력만 디스플레이
// //         minDate={tomorrow} // 최소날짜값 내일이면 내일부터 선택가능하다.
// //         date={date} // 날짜값
// //         onChange={onChangeDate} // onChange 함수
// //         dateDisplayFormat={"yyyy.mm.dd"} // 날짜 포맷값
// //       />
// //     </>
// //   );
// // }

// // export default Calendar3;

// import { DateRangePicker } from "react-date-range";
// function Calendar3() {
//   return (
//     <>
//       <DateRangePicker
//         onChange={(item) => {
//           this.handleonDateRange(item);
//         }}
//         showSelectionPreview={true}
//         moveRangeOnFirstSelection={false}
//         months={2}
//         ranges={this.state.dateRange}
//         direction="horizontal"
//       />
//       ;
//     </>
//   );
// }

// export default Calendar3;

// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import Calendar from "../Calendar";
// import { rangeShape } from "../DayCell";
// import { findNextRangeIndex, generateStyles } from "../../utils";
// import {
//   isBefore,
//   differenceInCalendarDays,
//   addDays,
//   min,
//   isWithinInterval,
//   max,
// } from "date-fns";
// import classnames from "classnames";
// import coreStyles from "../../styles";

// class DateRange extends Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       focusedRange: props.initialFocusedRange || [
//         findNextRangeIndex(props.ranges),
//         0,
//       ],
//       preview: null,
//     };
//     this.styles = generateStyles([coreStyles, props.classNames]);
//   }
//   calcNewSelection = (value, isSingleValue = true) => {
//     const focusedRange = this.props.focusedRange || this.state.focusedRange;
//     const {
//       ranges,
//       onChange,
//       maxDate,
//       moveRangeOnFirstSelection,
//       retainEndDateOnFirstSelection,
//       disabledDates,
//     } = this.props;
//     const focusedRangeIndex = focusedRange[0];
//     const selectedRange = ranges[focusedRangeIndex];
//     if (!selectedRange || !onChange) return {};
//     let { startDate, endDate } = selectedRange;
//     const now = new Date();
//     let nextFocusRange;
//     if (!isSingleValue) {
//       startDate = value.startDate;
//       endDate = value.endDate;
//     } else if (focusedRange[1] === 0) {
//       // startDate selection
//       const dayOffset = differenceInCalendarDays(endDate || now, startDate);
//       const calculateEndDate = () => {
//         if (moveRangeOnFirstSelection) {
//           return addDays(value, dayOffset);
//         }
//         if (retainEndDateOnFirstSelection) {
//           if (!endDate || isBefore(value, endDate)) {
//             return endDate;
//           }
//           return value;
//         }
//         return value || now;
//       };
//       startDate = value;
//       endDate = calculateEndDate();
//       if (maxDate) endDate = min([endDate, maxDate]);
//       nextFocusRange = [focusedRange[0], 1];
//     } else {
//       endDate = value;
//     }

//     // reverse dates if startDate before endDate
//     let isStartDateSelected = focusedRange[1] === 0;
//     if (isBefore(endDate, startDate)) {
//       isStartDateSelected = !isStartDateSelected;
//       [startDate, endDate] = [endDate, startDate];
//     }

//     const inValidDatesWithinRange = disabledDates.filter((disabledDate) =>
//       isWithinInterval(disabledDate, {
//         start: startDate,
//         end: endDate,
//       })
//     );

//     if (inValidDatesWithinRange.length > 0) {
//       if (isStartDateSelected) {
//         startDate = addDays(max(inValidDatesWithinRange), 1);
//       } else {
//         endDate = addDays(min(inValidDatesWithinRange), -1);
//       }
//     }

//     if (!nextFocusRange) {
//       const nextFocusRangeIndex = findNextRangeIndex(
//         this.props.ranges,
//         focusedRange[0]
//       );
//       nextFocusRange = [nextFocusRangeIndex, 0];
//     }
//     return {
//       wasValid: !(inValidDatesWithinRange.length > 0),
//       range: { startDate, endDate },
//       nextFocusRange: nextFocusRange,
//     };
//   };
//   setSelection = (value, isSingleValue) => {
//     const { onChange, ranges, onRangeFocusChange } = this.props;
//     const focusedRange = this.props.focusedRange || this.state.focusedRange;
//     const focusedRangeIndex = focusedRange[0];
//     const selectedRange = ranges[focusedRangeIndex];
//     if (!selectedRange) return;
//     const newSelection = this.calcNewSelection(value, isSingleValue);
//     onChange({
//       [selectedRange.key || `range${focusedRangeIndex + 1}`]: {
//         ...selectedRange,
//         ...newSelection.range,
//       },
//     });
//     this.setState({
//       focusedRange: newSelection.nextFocusRange,
//       preview: null,
//     });
//     onRangeFocusChange && onRangeFocusChange(newSelection.nextFocusRange);
//   };
//   handleRangeFocusChange = (focusedRange) => {
//     this.setState({ focusedRange });
//     this.props.onRangeFocusChange &&
//       this.props.onRangeFocusChange(focusedRange);
//   };
//   updatePreview = (val) => {
//     if (!val) {
//       this.setState({ preview: null });
//       return;
//     }
//     const { rangeColors, ranges } = this.props;
//     const focusedRange = this.props.focusedRange || this.state.focusedRange;
//     const color =
//       ranges[focusedRange[0]]?.color || rangeColors[focusedRange[0]] || color;
//     this.setState({ preview: { ...val.range, color } });
//   };
//   render() {
//     return (
//       <Calendar
//         focusedRange={this.state.focusedRange}
//         onRangeFocusChange={this.handleRangeFocusChange}
//         preview={this.state.preview}
//         onPreviewChange={(value) => {
//           this.updatePreview(value ? this.calcNewSelection(value) : null);
//         }}
//         {...this.props}
//         displayMode="dateRange"
//         className={classnames(
//           this.styles.dateRangeWrapper,
//           this.props.className
//         )}
//         onChange={this.setSelection}
//         updateRange={(val) => this.setSelection(val, false)}
//         ref={(target) => {
//           this.calendar = target;
//         }}
//       />
//     );
//   }
// }

// DateRange.defaultProps = {
//   classNames: {},
//   ranges: [],
//   moveRangeOnFirstSelection: false,
//   retainEndDateOnFirstSelection: false,
//   rangeColors: ["#3d91ff", "#3ecf8e", "#fed14c"],
//   disabledDates: [],
// };

// DateRange.propTypes = {
//   ...Calendar.propTypes,
//   onChange: PropTypes.func,
//   onRangeFocusChange: PropTypes.func,
//   className: PropTypes.string,
//   ranges: PropTypes.arrayOf(rangeShape),
//   moveRangeOnFirstSelection: PropTypes.bool,
//   retainEndDateOnFirstSelection: PropTypes.bool,
// };

// export default DateRange;
