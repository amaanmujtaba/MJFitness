import { parse } from 'postcss';
import { forwardRef } from 'react';

const ResultModal = forwardRef(function Output({ handleClose, inputValues }, ref) {
    function calculateBMI(weight, height) {
        // Convert height to meters
        const heightInMeters = height / 100;
        const weightInKG = weight * 0.4536
        // Calculate BMI
        const bmi = weightInKG / (heightInMeters * heightInMeters);
    
        return bmi.toFixed(2);
    }

    function calculateBMR(age, weight, heightCm, isMale) {
        const weightKg = weight * 0.4536
        
        if (isMale) {
            // For men
            return 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
        } else {
            // For women
            return 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
        }
    }



    console.log(inputValues)

    const age = parseFloat(inputValues.age);
    const height = parseFloat(inputValues.height);
    const weight = parseFloat(inputValues.weight);
    const noOfDay = parseFloat(inputValues.days)
    const exp  = inputValues.experience;
    const goal = inputValues.goal;
    
    let activityLevel = 1.55;
    if(exp === "beginner"){
        activityLevel = 1.2
    }
    else if(exp === "novice"){
        activityLevel = 1.4;
    }
    else if(exp==="intermediate"){
        activityLevel= 1.6;
    }
    else if(exp === "advanced"){
        activityLevel=1.9;
    }
    else{
        activityLevel=1;
    }
    const proteinReq = weight * 0.9;

    

    const bmi = calculateBMI(weight, height);
    const bmr = calculateBMR(age, weight, height, inputValues.gender === 'male');
    const caloriesBurned = bmr*activityLevel;
    let caloriesIntake;

    if(goal === "bulk"){
        caloriesIntake = caloriesBurned + 342;
    }
    if(goal === "cut"){
        caloriesIntake = caloriesBurned - 200;
    }
    if( goal === "lose-fat"){
        caloriesIntake = caloriesBurned - 366;
    }

    return (
        <dialog ref={ref} className="fixed inset-4 w-3/4 bg-slate-600">
            <div className="flex flex-col md:flex-row lg:text-xl bg-blue-500 w-full mx-auto">
                <div className="flex flex-col md:w-1/2 bg-red-500">
                    <h1 className="text-2xl">Recommended workout schedule: </h1>
                    <p>Monday</p>
                    <p>Monday</p>
                    <p>Monday</p>
                    <p>Monday</p>
                    <p>Monday</p>
                    <p>Monday</p>
                    <p>Monday</p>
                </div>
                <div className="flex flex-col md:w-1/2 bg-green-700">
                    <div className="bg-blue-500">
                        <h2>Caloric Information</h2>
                        <p> BMI: {bmi}</p>
                        <p> BMR: {(bmr).toFixed(2)} </p>
                        <p> Calories Burned: {caloriesBurned.toFixed(2)}</p>
                    </div>
                    <div className="bg-yellow-500">
                        <h2>Calorie Intake</h2>
                        <p> Protein: {proteinReq.toFixed(0) + "g"} </p>
                        <p> Calorie Intake: {caloriesIntake.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <form method="dialog" className="flex justify-center bg-blue-500">
                <button onClick={handleClose} className="h-11 w-40 text-red-500 bg-slate-500 mx-auto">Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;
