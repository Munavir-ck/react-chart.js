import React, { useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "tailwindcss/tailwind.css";


function DayReport() {


 

  return (
    <div className="container mx-auto mt-12">
      <div className="relative mt-4 w-56">
       
      </div>
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
        <div className="w-full px-4 py-5 bg-orange-400 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
          <div className="text-sm font-medium text-gray-500 truncate">
            Today Revenue
            </div>
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
            $556
          </div>
        </div>
        <div className="w-full px-4 py-5 bg-orange-400 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Today Booking
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
           3
          </div>
        </div>
        <div className="w-full px-4 py-5 bg-orange-400 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 truncate">
            Total Slots Booked
          </div>
          <div className="mt-1 text-3xl font-semibold text-gray-900">
           16
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayReport;
