export default function Input(){
    return(
        <section className="my-4">
      <h2 className="text-2xl font-bold mb-4">User Input Area</h2>
        <div className="flex justify-center h-screen">
        {/* Form for User Input */}
        <form className="form">

            {/* First Row: Personal Information */}
            <div className="flex flex-wrap justify-between mx:auto mb-4">
            {/* Age */}
            <div className="px-2 mb-4">
                <label htmlFor="age" className="block text-gray-700">Age</label>
                <input type="number" id="age" name="age" className="border p-2 w-full" />
            </div>

            

            {/* Gender */}
            <div className="px-2 mb-4">
                <label htmlFor="gender" className="block text-gray-700">Gender</label>
                <select id="gender" name="gender" className="border p-2 w-full">
                <option value="male">Male</option>
                <option value="female">Female</option>
                </select>
            </div>

            {/* Height */}
            <div className=" px-2 mb-4">
                <label htmlFor="height" className="block text-gray-700">Height</label>
                <input type="number" id="height" name="height" className="border p-2 w-full" />
            </div>

            {/* Weight */}
            <div className="px-2 mb-4">
                <label htmlFor="weight" className="block text-gray-700">Weight</label>
                <input type="number" id="weight" name="weight" className="border p-2 w-full" />
            </div>
            </div>

            {/* Second Row: Goal-related Information */}
            <div className="flex flex-wrap justify-between mx:auto mb-4">
            {/* Goal */}
            <div className="px-2 mb-4">
                <label htmlFor="goal" className="block text-gray-700">Goal</label>
                <select id="goal" name="goal" className="border p-2 w-full">
                <option value="bulk">Bulk</option>
                <option value="cut">Cut</option>
                <option value="lose-fat">Lose Fat</option>
                </select>
            </div>

            {/* Number of Days */}
            <div className="px-2 mb-4">
                <label htmlFor="days" className="block text-gray-700">Number of Days</label>
                <input
                    type="number"
                    id="days"
                    name="days"
                    className="border p-2 w-full"
                    min="1"  // Set the minimum value
                    max="7"  // Set the maximum value
                />
            </div>

            {/* Experience */}
            <div className="px-2 mb-4">
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
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Generate Plan</button>
        </form>
      </div>
    </section>
    );
}