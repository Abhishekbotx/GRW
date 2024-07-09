import React from 'react';

const ApplicationForm = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-3xl lg:text-4xl mb-8 text-center leading-tight">
        Application Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block font-bold mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Ex:- Kirti"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block font-bold mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Ex:- Sharma"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-bold mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            placeholder="Ex:- kirtisharma152@gmail.com"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block font-bold mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Ex:- 9825063147"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth" className="block font-bold mb-2">
            Date Of Birth *
          </label>
          <input
            type="date"
            id="dateOfBirth"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="height" className="block font-bold mb-2">
            Height *
          </label>
          <input
            type="text"
            id="height"
            placeholder="162 cm"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block font-bold mb-2">
            Weight *
          </label>
          <input
            type="text"
            id="weight"
            placeholder="80 Kg"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="bust/chest" className="block font-bold mb-2">
            Bust/Chest *
          </label>
          <input
            type="text"
            id="bust/chest"
            placeholder="32 Inch"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="waist" className="block font-bold mb-2">
            Waist *
          </label>
          <input
            type="text"
            id="waist"
            placeholder="34 Inch"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="hip" className="block font-bold mb-2">
            Hip Measurement *
          </label>
          <input
            type="text"
            id="hip"
            placeholder="16 Inch"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="shoe" className="block font-bold mb-2">
            Shoe Size *
          </label>
          <input
            type="text"
            id="shoe"
            placeholder="5 Uk/In"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="currentLocation" className="block font-bold mb-2">
            Current Location *
          </label>
          <input
            type="text"
            id="currentLocation"
            placeholder="Ex:- A 56 subham nagar flat no. 45 B block Thane Mumbai 400066"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="notableAchievements" className="block font-bold mb-2">
            Any notable achievements or awards *
          </label>
          <input
            type="text"
            id="notableAchievements"
            placeholder="Ex:- National level dance champion"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div>
          <label htmlFor="portfolio" className="block font-bold mb-2">
            Portfolio showcasing a diverse range of your work *
          </label>
          <input
            type="url"
            id="portfolio"
            placeholder="https://yourportfolio.com"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="motivation" className="block font-bold mb-2">
            Why do you want to participate in the Goa Resort Week Fashion Event? *
          </label>
          <textarea
            id="motivation"
            rows="4"
            className="w-full border-2 border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-black text-white text-lg sm:text-xl font-bold py-3 px-8 sm:px-20 rounded-full hover:bg-gray-800">
          Submit Form Now
        </button>
      </div>
    </div>
  );
};

export default ApplicationForm;

 