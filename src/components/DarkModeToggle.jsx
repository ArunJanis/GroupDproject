// import { useEffect, useState } from 'react';
// import './DarkModeToggle.css';

// function DarkModeToggle() {
//   const [isDark, setIsDark] = useState(() => {
//     const saved = localStorage.getItem('theme');
//     return saved === 'dark';
//   });

//   useEffect(() => {
//     document.body.className = isDark ? 'dark' : 'light';
//     localStorage.setItem('theme', isDark ? 'dark' : 'light');
//   }, [isDark]);

//   return (
//     <div className="dark-toggle">
//       <label className="switch">
//         <input
//           type="checkbox"
//           checked={isDark}
//           onChange={() => setIsDark(!isDark)}
//         />
//         <span className="slider round"></span>
//       </label>
//     </div>
//   );
// }

// export default DarkModeToggle;
