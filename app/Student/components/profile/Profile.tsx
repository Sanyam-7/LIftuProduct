import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="w-156px rounded-bl-[20%] h-20 p-4 flex items-center bg-sidebar gap-4">
      <svg
        className="w-20"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 28.5H17C17 30.15 15.65 31.5 14 31.5C12.35 31.5 11 30.15 11 28.5ZM27.5 25.5V27H0.5V25.5L3.5 22.5V13.5C3.5 8.85 6.5 4.8 11 3.45V3C11 1.35 12.35 0 14 0C15.65 0 17 1.35 17 3V3.45C21.5 4.8 24.5 8.85 24.5 13.5V22.5L27.5 25.5ZM21.5 13.5C21.5 9.3 18.2 6 14 6C9.8 6 6.5 9.3 6.5 13.5V24H21.5V13.5Z"
          fill="black"
        />
      </svg>
      <img
        className="w-12 h-12 rounded-full"
        src="https://s3-alpha-sig.figma.com/img/2a05/755c/48d13afeef6805864b15db5ca6010c66?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXueRh3ukt26JcaE5A4gqJiXea4pWUnSTlNeCfq5COcpCegXUSnAtM~LaHIyEq~XbQFxir9NrAOvoe7HwKFOuNRislKo7JBsSDOh2-AnVCVZoVthWZXV6t~8ZeTm0IPR6owe0ThNneIYqMUVCG2Rrr4z7v2dhSX~BpqOFYxSvoGQvdnGVadqD~NXcxgfSBrVxJY8CqSklTDchZ4DFgafq1hpaV5ahB09btPwuOMp4jNUE02EMDW4if-58BYKUhqbJ4yc6mujFyHlBRpZNfWki4UsotTT~94mkBgumOYpOnApDEFWgDRlZpcRHdczxFhJs65AVguiz6vQRlyKRR3BaA__"
        alt=""
      />
    </div>
  );
};

export default Profile;