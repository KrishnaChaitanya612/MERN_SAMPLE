import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    regNo: String,
    studentName: {
        type: String,
        required: [true, "name is required"],
    },
    grade: String,
    section: {
        type: String,
        default: "A",
    },
});

const StudentData = mongoose.model("StudentData", studentSchema);

export default StudentData;
