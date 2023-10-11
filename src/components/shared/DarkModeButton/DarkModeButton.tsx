import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';

const DarkModeButton = ({ toggleDarkMode, modePage }: DarkBtn) => {
  return (
    <button
      onClick={toggleDarkMode}
      className={`${
        modePage === 'dark'
          ? 'text-[#03132b] bg-[#cfe0fa]'
          : 'text-[#cfe0fa] bg-[#03132b]'
      }  rounded-br-3xl p-3`}
    >
      {modePage === 'dark' ? <CiLight size={20} /> : <MdDarkMode size={20} />}
    </button>
  );
};
export default DarkModeButton;
