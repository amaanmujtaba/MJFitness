export default function Output(){
    return(
        <div className="flex flex-col md:flex-row lg:w-3/4 lg:text-xl bg-blue-500 w-full mx-auto">
            <div className="flex flex-col md:w-1/2 bg-red-500">
                <h1 className="text-2xl">Recommended workout schedule: </h1>
                <p>MOnday</p>
                <p>MOnday</p>
                <p>MOnday</p>
                <p>MOnday</p>
                <p>MOnday</p>
                <p>MOnday</p>
                <p>MOnday</p>
            </div>
            <div className= "flex flex-col md:w-1/2  bg-green-700">
                <div className="bg-blue-500">
                    <h2>Caloric Information</h2>
                    <p> BMI: </p>
                    <p> BMR: </p>
                    <p> Calories Burned</p>
                </div>
                <div className= "bg-yellow-500">
                    
                    <h2>Calorie Intake</h2>
                    <p> Protein: </p>
                    {/*<p> Calorie Intake: </p>*/}

                    
                </div>

            </div>

        </div>
    )
}