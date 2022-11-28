/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const active = 'bg-blue-800';
  // const [active, setActive] = useState('');
  const [isActiveH, setIsActiveH] = useState(false);
  const [isActiveC, setIsActiveC] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setIsActiveH(true);
      setIsActiveC(false);
    } else {
      setIsActiveH(false);
      setIsActiveC(true);
    }
  }, []);

  return (
    <div>
      <div className="w-full h-14 bg-blue-900">
        <div className="flex flex-row h-full text-white ml-16 text-xl">
          <div
            className={`hover:bg-blue-600 flex h-full px-3 items-center ${
              isActiveH ? `${active}` : ''
            }`}
          >
            <a className="" href="/">
              Home
            </a>
          </div>
          <div
            className={`hover:bg-blue-600 flex h-full px-3 items-center ${
              isActiveC ? `${active}` : ''
            }`}
          >
            <a className="" href="/configuracion">
              Configuration
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
