import * as React from "react";
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  Circle,
  LinearGradient,
  Stop,
  Mask,
  RadialGradient,
} from "react-native-svg";

const renderCheckmarkIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      fill="#F0F9FF"
      d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z"
    />
    <Path
      fill="#026AA2"
      fillRule="evenodd"
      d="m17.096 7.39-7.16 6.91-1.9-2.03c-.35-.33-.9-.35-1.3-.07-.39.29-.5.8-.26 1.21l2.25 3.66c.22.34.6.55 1.03.55.41 0 .8-.21 1.02-.55.36-.47 7.23-8.66 7.23-8.66.9-.92-.19-1.73-.91-1.03v.01Z"
      clipRule="evenodd"
    />
  </Svg>
);

const renderArrowLeft = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none">
    <Path
      stroke="#36BFFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22.167 14H5.833m0 0L14 22.167M5.833 14 14 5.833"
    />
  </Svg>
);

const renderCodeIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#667085"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 17 5-5-5-5M7 7l-5 5 5 5m7-14-4 18"
    />
  </Svg>
);

const renderMagnifierIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
    <Path
      stroke="#344054"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="m16.5 16.5-3.625-3.625m1.958-4.708a6.667 6.667 0 1 1-13.333 0 6.667 6.667 0 0 1 13.333 0Z"
    />
  </Svg>
);

const renderCloseIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="none">
    <Path
      stroke="#98A2B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 1 1 11M1 1l10 10"
    />
  </Svg>
);

const renderCircleCheckmark = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={137} height={137} fill="none">
    <Rect
      width={104.714}
      height={104.714}
      x={16.143}
      y={16.143}
      stroke="#36BFFA"
      strokeWidth={2}
      opacity={0.3}
      rx={52.357}
    />
    <Rect
      width={134.357}
      height={134.357}
      x={1.322}
      y={1.321}
      stroke="#36BFFA"
      strokeWidth={2}
      opacity={0.1}
      rx={63}
    />
    <Path
      stroke="#36BFFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m52.938 68.5 10.375 10.375 20.75-20.75m19.02 10.375c0 19.1-15.483 34.583-34.583 34.583-19.1 0-34.583-15.483-34.583-34.583 0-19.1 15.483-34.583 34.583-34.583 19.1 0 34.583 15.483 34.583 34.583Z"
    />
  </Svg>
);

const renderDashboardIconHistoryDefault = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#364152"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M14 17H8m8-4H8m12-3.012V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446Z"
    />
  </Svg>
);

const renderDashboardIconHistoryActive = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#36BFFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2.27V6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437c.214.11.494.11 1.054.11h4.13M14 17H8m8-4H8m12-3.012V17.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 22 16.88 22 15.2 22H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 19.72 4 18.88 4 17.2V6.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 2 7.12 2 8.8 2h3.212c.733 0 1.1 0 1.446.083.306.073.598.195.867.36.303.185.562.444 1.08.963l3.19 3.188c.518.519.777.778.963 1.081a3 3 0 0 1 .36.867c.082.346.082.712.082 1.446Z"
    />
  </Svg>
);

const renderDashboardIconPatientDefault = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#364152"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21v-6m-3 3h6m-10-3H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M15.5 3.29a4.001 4.001 0 0 1 0 7.42M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </Svg>
);

const renderDashboardIconPatientActive = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#36BFFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21v-6m-3 3h6m-10-3H8c-1.864 0-2.796 0-3.53.305a4 4 0 0 0-2.166 2.164C2 18.204 2 19.136 2 21M15.5 3.29a4.001 4.001 0 0 1 0 7.42M13.5 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </Svg>
);

const renderDashboardIconProfileDefault = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#364152"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.316 19.438A4.001 4.001 0 0 1 9 17h6a4.001 4.001 0 0 1 3.684 2.438M16 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm6 2.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </Svg>
);

const renderDashboardIconProfileActive = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none">
    <Path
      stroke="#36BFFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.316 19.438A4.001 4.001 0 0 1 9 17h6a4.001 4.001 0 0 1 3.684 2.438M16 9.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm6 2.5c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </Svg>
);

const renderCirclePlusIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} fill="none">
    <G filter="url(#a)">
      <Rect width={28} height={28} x={2} y={1} fill="#36BFFA" rx={14} />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.67}
        d="M16 9.167v11.666M10.167 15h11.666"
      />
    </G>
    <Defs></Defs>
  </Svg>
);

const renderEmptyPatient = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={160} height={120} fill="none">
    <Circle cx={81.5} cy={52} r={52} fill="#EAECF0" />
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="m47.227 79.11 33.238-15.5a3.334 3.334 0 0 0 1.613-4.43l-19.63-42.095-13.292-4.838-27.195 12.681a3.334 3.334 0 0 0-1.612 4.43l22.447 48.14a3.334 3.334 0 0 0 4.43 1.612Z"
      />
      <Path
        fill="#D0D5DD"
        d="m49.157 12.247 13.292 4.838-9.065 4.227-4.227-9.065Z"
      />
    </G>
    <G filter="url(#c)">
      <Path
        fill="url(#d)"
        d="M63.116 67.783h36.675a3.334 3.334 0 0 0 3.334-3.334V18.002L93.123 8H63.116a3.334 3.334 0 0 0-3.334 3.334V64.45a3.334 3.334 0 0 0 3.334 3.334Z"
      />
      <Path fill="#D0D5DD" d="m93.123 8 10.002 10.002H93.123V8Z" />
    </G>
    <G filter="url(#e)">
      <Path
        fill="url(#f)"
        d="m81.975 63.59 33.238 15.5a3.334 3.334 0 0 0 4.431-1.612l19.629-42.095-4.838-13.293L107.24 9.41a3.334 3.334 0 0 0-4.431 1.613L80.362 59.16a3.334 3.334 0 0 0 1.613 4.43Z"
      />
      <Path
        fill="#D0D5DD"
        d="m134.436 22.09 4.837 13.292-9.065-4.227 4.228-9.065Z"
      />
    </G>
    <Circle cx={26.5} cy={11} r={5} fill="#F2F4F7" />
    <Circle cx={23.5} cy={109} r={7} fill="#F2F4F7" />
    <Circle cx={150.5} cy={35} r={7} fill="#F2F4F7" />
    <Circle cx={139.5} cy={8} r={4} fill="#F2F4F7" />
    <Path
      fill="#026AA2"
      d="M57.5 86c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24-24-10.745-24-24Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m86 76.5 5 5m0-5-5 5m5.5 4.5v5.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C89.22 96 88.38 96 86.7 96H76.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C71.5 93.72 71.5 92.88 71.5 91.2V80.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C73.78 76 74.62 76 76.3 76h5.2m-9.855 17.926A4.002 4.002 0 0 1 75.5 91h7c.93 0 1.394 0 1.78.077a4 4 0 0 1 3.143 3.143c.077.386.077.85.077 1.78m-4-12.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
    <Defs>
      <LinearGradient
        id="b"
        x1={45.274}
        x2={18.785}
        y1={79.24}
        y2={31.453}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9FAFB" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={61.291}
        x2={57.48}
        y1={67.076}
        y2={12.571}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9FAFB" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={80.62}
        x2={100.201}
        y1={62.178}
        y2={11.17}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#F9FAFB" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const renderDecorativeBackground = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={147} height={116} fill="none">
    <Mask
      id="b"
      width={336}
      height={336}
      x={0}
      y={-127}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <Path fill="url(#a)" d="M0 0h336v336H0z" transform="translate(0 -127)" />
    </Mask>
    <G stroke="#36BFFA" mask="url(#b)">
      <Circle cx={168} cy={41} r={47.5} />
      <Circle cx={168} cy={41} r={47.5} />
      <Circle cx={168} cy={41} r={71.5} />
      <Circle cx={168} cy={41} r={95.5} />
      <Circle cx={168} cy={41} r={119.5} />
      <Circle cx={168} cy={41} r={143.5} />
      <Circle cx={168} cy={41} r={167.5} />
    </G>
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(90 0 168) scale(168)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={1} stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);

const renderCalendarIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none">
    <Path
      stroke="#98A2B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.667}
      d="M17.5 8.333h-15m10.833-6.666V5M6.667 1.667V5M6.5 18.333h7c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.092-1.093c.273-.534.273-1.235.273-2.635v-7c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.092c-.535-.273-1.235-.273-2.635-.273h-7c-1.4 0-2.1 0-2.635.273a2.5 2.5 0 0 0-1.093 1.092C2.5 5.233 2.5 5.933 2.5 7.333v7c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.093c.535.272 1.235.272 2.635.272Z"
    />
  </Svg>
);

const ICONS = {
  checkmark: renderCheckmarkIcon(),
  "arrow-left": renderArrowLeft(),
  "code-icon": renderCodeIcon(),
  "magnifier-icon": renderMagnifierIcon(),
  "close-icon": renderCloseIcon(),
  "circle-checkmark": renderCircleCheckmark(),
  "history-default": renderDashboardIconHistoryDefault(),
  "history-active": renderDashboardIconHistoryActive(),
  "patients-default": renderDashboardIconPatientDefault(),
  "patients-active": renderDashboardIconPatientActive(),
  "profile-default": renderDashboardIconProfileDefault(),
  "profile-active": renderDashboardIconProfileActive(),
  "circle-plus": renderCirclePlusIcon(),
  "empty-patients": renderEmptyPatient(),
  "decorative-background": renderDecorativeBackground(),
  "calendar-icon": renderCalendarIcon(),
};

const svgTranslator = (type) => {
  return ICONS[type];
};

export default svgTranslator;
