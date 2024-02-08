export default function Input( { handleClick, handleInputValues }){
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const values = {};
        formData.forEach((value, key) => {
            values[key] = value.trim();
        });
        handleInputValues(values);
      }



    
    return(
        <section className="my-4">
        <h2 className="text-2xl font-bold mb-4">User Input Area</h2>
        <div className="flex justify-center items-center ">
        {/* Form for User Input */}
        <form className="form w-full max-w-md px-4" onSubmit={handleSubmit}>

            {/* First Row: Personal Information */}
            <div className="flex flex-wrap mb-4">
            {/* Age */}
            <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="age" className="block text-gray-700">Age</label>
                <input type="number" id="age" name="age" className="border p-2 w-full" />
            </div>

            {/* Gender */}
            <div className="w-full sm:w-1/2 px-2 mb-4">
                <label htmlFor="gender" className="block text-gray-700">Sex</label>
                <select id="gender" name="gender" className="border p-2 w-full">
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            </div>

                {/* Height */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                    <label htmlFor="height" className="block text-gray-700">Height (in cm)</label>
                    <input type="number" id="height" name="height" className="border p-2 w-full" />
                </div>

                {/* Weight */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                    <label htmlFor="weight" className="block text-gray-700">Weight (in lbs)</label>
                    <input type="number" id="weight" name="weight" className="border p-2 w-full" />
                </div>
            </div>

            {/* Second Row: Goal-related Information */}
            <div className="flex flex-wrap mb-4">
                {/* Goal */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                    <label htmlFor="goal" className="block text-gray-700">Goal</label>
                    <select id="goal" name="goal" className="border p-2 w-full">
                    <option value="bulk">Bulk</option>
                    <option value="cut">Cut</option>
                    <option value="lose-fat">Lose Fat</option>
                    </select>
                </div>

                {/* Number of Days */}
                <div className="w-full sm:w-1/2 px-2 mb-4">
                    <label htmlFor="days" className="block text-gray-700">Number of Days per week</label>
                    <select id="days" name="days" className="border p-2 w-full">
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select>
                </div>

                {/* Experience */}
                <div className="w-full px-2 mb-4">
                    <label htmlFor="experience" className="block text-gray-700">Experience</label>
                    <select id="experience" name="experience" className="border p-2 w-full">
                    <option value="beginner">Beginner</option>
                    <option value="novice">Novice</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    </select>
                </div>
            </div>

            {/* Submit Button */}
            <button type="submit" onClick = {handleClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Generate Plan</button>
        </form>
        </div>

        </section>
        );
    }
