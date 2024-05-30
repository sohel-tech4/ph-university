import CatchAsync from '../../utils/catchAsync';
import { StudentServices } from './student.service';

const getAllStudent = CatchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentfromDB;
  res.status(200).json({
    success: true,
    message: 'Student is created successfully',
    data: result,
  });
});

const getSingleStudent = CatchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Student is retrievd successfully',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
};
