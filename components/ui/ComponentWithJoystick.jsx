"use client";
import JoystickButton from "./JoystickButton";

const ComponentWithJoystick = ({
  children,
  showJoystick = false,
  gameId = 1,
  joystickClassName = "",
}) => {
  return (
    <div className="relative">
      {children}
      {showJoystick && (
        <JoystickButton gameId={gameId} className={joystickClassName} />
      )}
    </div>
  );
};

export default ComponentWithJoystick;
