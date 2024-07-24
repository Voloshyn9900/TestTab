import { useEffect, useState } from "react";
// import scheduleData from "../../Data/schedule.json";

import {
  TableContainer,
  TableElement,
  TableHeader,
  TableBody,
  ProfessorHeader,
  TableHeaderCell,
  TableCellDay,
  TableCell,
  TableRow,
} from "./Table2.styled";
import { fetchScheduleAll } from "../api";

export default function ScheduleTableSecond() {
  const [scheduleData, setScheduleData] = useState([]);
  const [errors, setError] = useState(false);

  useEffect(() => {
    const getAllSchedule = async () => {
      try {
        const response = await fetchScheduleAll();
        setScheduleData(response);
      } catch (error) {
        setError(true);
        console.log(errors);
      }
    };
    getAllSchedule();
  }, []);

  // Временные слоты, которые могут быть в расписании
  const timeSlots = ["1", "2", "3", "4"];

  return (
    <TableContainer>
      {console.log("Забрал с API", scheduleData)}
      {scheduleData.map((professor, index) => (
        <TableElement key={index}>
          <TableHeader>
            <ProfessorHeader>
              <TableHeaderCell colSpan={timeSlots.length + 1}>
                {professor.prof}
              </TableHeaderCell>
            </ProfessorHeader>
          </TableHeader>
          <TableBody>
            {professor.schedule.map((scheduleDay, dayIndex) => (
              <TableRow key={dayIndex}>
                <TableCellDay>
                  <strong>{scheduleDay.day}</strong>
                </TableCellDay>
                {timeSlots.map((slot) => {
                  const lessons =
                    scheduleDay.lessons.length > 0
                      ? scheduleDay.lessons[0]
                      : { time: [], theme: [] };
                  const lessonIndex = lessons.time.indexOf(slot);
                  return (
                    <TableCell key={slot}>
                      {lessonIndex !== -1 ? (
                        <>
                          <strong>{slot}.</strong> {lessons.theme[lessonIndex]}
                        </>
                      ) : (
                        ""
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </TableElement>
      ))}
    </TableContainer>
  );
}
