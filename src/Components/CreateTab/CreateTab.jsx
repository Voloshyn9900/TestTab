import { Formik, FieldArray } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import {
  Form,
  Field,
  WrapperDay,
  Label,
  AddButton,
  RemoveButton,
  AddLessonButton,
  ErrorMessage,
} from "./CreateTab.styled";
import { fetchAddSchedule } from "../api";

// Обновленная схема валидации
const scheduleSchema = Yup.object().shape({
  prof: Yup.string().required("Required"),
  schedule: Yup.array().of(
    Yup.object().shape({
      day: Yup.string().required("Required"),
      lessons: Yup.array().of(
        Yup.object().shape({
          time: Yup.array().of(Yup.string().required("Required")),
          theme: Yup.array().of(Yup.string().required("Required")),
        })
      ),
    })
  ),
});

export const FormSchedule = () => {
  const addSchedule = async (newSchedule) => {
    try {
      await fetchAddSchedule(newSchedule);
      toast.success("Schedule added successfully");
    } catch (error) {
      toast.error("Failed to add schedule");
    }
  };

  return (
    <div>
      <Formik
        initialValues={{
          prof: "",
          schedule: [
            { day: "Понеділок", lessons: [{ time: [""], theme: [""] }] },
            { day: "Вівторок", lessons: [{ time: [""], theme: [""] }] },
            { day: "Середа", lessons: [{ time: [""], theme: [""] }] },
            { day: "Четвер", lessons: [{ time: [""], theme: [""] }] },
            { day: "П`ятниця", lessons: [{ time: [""], theme: [""] }] },
          ],
        }}
        validationSchema={scheduleSchema}
        onSubmit={(values, actions) => {
          addSchedule(values);
          actions.resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <Label>
              <ErrorMessage name="prof" component="span" />
              <Field name="prof" placeholder="Please enter your full name" />
            </Label>
            <FieldArray name="schedule">
              {() => (
                <WrapperDay>
                  {values.schedule.map((scheduleDay, index) => (
                    <div key={index}>
                      <h3>{scheduleDay.day}</h3>
                      <FieldArray name={`schedule.${index}.lessons`}>
                        {({ remove, push }) => (
                          <div>
                            {scheduleDay.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex}>
                                <Field
                                  component="select"
                                  name={`schedule.${index}.lessons.${lessonIndex}.time[0]`}
                                >
                                  <option value="">Select Time</option>
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                </Field>
                                <ErrorMessage
                                  name={`schedule.${index}.lessons.${lessonIndex}.time[0]`}
                                  component="span"
                                />
                                <Field
                                  name={`schedule.${index}.lessons.${lessonIndex}.theme[0]`}
                                  placeholder="Theme"
                                />
                                <ErrorMessage
                                  name={`schedule.${index}.lessons.${lessonIndex}.theme[0]`}
                                  component="span"
                                />
                                <RemoveButton
                                  type="button"
                                  onClick={() => remove(lessonIndex)}
                                >
                                  Remove Lesson
                                </RemoveButton>
                              </div>
                            ))}
                            <AddLessonButton
                              type="button"
                              onClick={() => push({ time: [""], theme: [""] })}
                            >
                              Add Lesson
                            </AddLessonButton>
                          </div>
                        )}
                      </FieldArray>
                    </div>
                  ))}
                </WrapperDay>
              )}
            </FieldArray>
            <AddButton type="submit">Add Schedule</AddButton>
          </Form>
        )}
      </Formik>
    </div>
  );
};
