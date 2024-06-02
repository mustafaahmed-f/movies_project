interface myProps {
  title: string;
  icon: JSX.Element;
}

const WatchBtn: React.FC<myProps> = ({ title, icon }) => {
  return (
    <button
      className={`flex flex-row items-center justify-center gap-1 px-2 py-1 text-sm rounded-sm ${
        title === "Watch now" ? `bg-movieColor` : `bg-transparent`
      } outline outline-movieColor outline-offset-0 sm:px-3 sm:py-2 sm:text-base sm:gap-2`}
    >
      {title} <span>{icon}</span>
    </button>
  );
};

export default WatchBtn;
