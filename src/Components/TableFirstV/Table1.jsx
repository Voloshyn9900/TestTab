import scheduleData from "../../Data/schedule.json";

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
} from "./Table1.styled";

export default function ScheduleTableFirst() {
  return (
    <TableContainer>
      {scheduleData.map((professor, index) => (
        <TableElement key={index}>
          <TableHeader>
            <ProfessorHeader>
              <TableHeaderCell colSpan="6">{professor.prof}</TableHeaderCell>
            </ProfessorHeader>
          </TableHeader>
          <TableBody>
            {professor.schedule.map((scheduleDay, dayIndex) => (
              <TableRow key={dayIndex}>
                <TableCellDay>
                  <strong>{scheduleDay.day}</strong>
                </TableCellDay>
                {Array(4)
                  .fill()
                  .map((_, cellIndex) => {
                    const lessonIndex = scheduleDay.lessons.findIndex(
                      (lesson) => lesson.time.includes(String(cellIndex + 1))
                    );
                    if (lessonIndex !== -1) {
                      const lesson = scheduleDay.lessons[lessonIndex];
                      const themeIndex = lesson.time.indexOf(
                        String(cellIndex + 1)
                      );
                      return (
                        <TableCell key={cellIndex}>
                          {cellIndex + 1}. {lesson.theme[themeIndex]}
                        </TableCell>
                      );
                    } else {
                      return <TableCell key={cellIndex}></TableCell>;
                    }
                  })}
              </TableRow>
            ))}
          </TableBody>
        </TableElement>
      ))}
    </TableContainer>
  );
}
