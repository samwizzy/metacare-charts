import * as React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TextField from "@mui/material/TextField";
import SearchBar from "./components/SearchBar";
import LineChart from "src/app/components/LineChart";
import { TimeCard } from "src/app/components";
import { chartAnalytics } from "./data";

import { IoCalendarClearOutline } from "react-icons/io5";

function Home() {
  const [date, setDate] = React.useState(null);

  const handleDateChange = (date: any) => {
    setDate(date);
  };

  return (
    <div>
      <SearchBar />
      <hr className="h-0 border-0 border-b" />

      <div className="border my-8">
        {chartAnalytics.map((chart) => (
          <div key={chart.id} className="grid grid-cols-12 sm:gap-x-4 border-b">
            <div className="md:col-span-8 col-span-12 border-r">
              <div className="flex items-center justify-between my-4 px-4 py-2">
                <h4 className="text-gray-800 text-base">
                  {chart.title}{" "}
                  <span className="p-1.5 rounded-xl bg-lime-200 text-xs">
                    +4.14%
                  </span>
                </h4>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    disableFuture
                    label="This Month"
                    openTo="year"
                    views={["year", "month", "day"]}
                    value={date}
                    components={{ OpenPickerIcon: IoCalendarClearOutline }}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField {...params} size="small" />
                    )}
                  />
                </LocalizationProvider>
              </div>

              <div className="w-full h-96" style={{ height: 500 }}>
                <LineChart data={chart.data} />
              </div>
            </div>

            <div className="flex flex-col space-y-4 md:col-span-4 col-span-12 p-4">
              <TimeCard title="Average Response Time" datetime="30 Mins" />
              <TimeCard title="Response Time" datetime="1 Hour 30 Mins" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
