import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import axios from "axios";

const FullCal = () => {
  const apiKey = process.env.REACT_APP_CAL_API_KEY;
  console.log(apiKey);

  const showDetail = (e) => {
    alert("d");
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "prev next today",
          center: "title",
          end: "",
        }}
        titleFormat={{ year: "numeric", month: "short" }}
        height={"100vh"}
        width={"100vw"}
        googleCalendarApiKey={apiKey}
        events={{ googleCalendarId: "skehdgus401@gmail.com" }}
        eventColor="#efb33f"
        eventClick={() => showDetail("ee")}
      />
    </>
  );
};

export default FullCal;
