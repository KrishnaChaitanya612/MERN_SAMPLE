import StudentData from '../models/student.js'

export const getStudents = async (req, res) => {
    try {
        const allstudents = await StudentData.find();
        res.status(200).json(allstudents);

    } catch (error) {
     res.status(404).json({ message: error.message}); 
    }
}

export const createStudent = async (req, res) => {
    const student = req.body;
    const newStudent = new StudentData(student);

    try {
        await newStudent.save();
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const deleteStudent = async (req, res) => {
   const id = req.params.id;

    try {
        await  StudentData.findByIdAndRemove(id).exec();
        res.send('deleted');
     
    } catch (error) {
        console.log(error);
    }
}

export const getUserById = async (request, response) => {
    try{
        const user = await StudentData.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

export const editUser = async (request, response) => {
   
    try{
        const id = request.params.id;
        const updates = request.body;
        const options = {new : true};
        await StudentData.findByIdAndUpdate(id,updates,options);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}