import React from 'react';
export const Navbar = () => {
  const navItems = [
    {
      key: 'cart-list',
      label: 'cart',
      icon: '',
    },
    {
      key: '',
      label: '',
      icon: '',
    },
  ];
  return (
    <>
      <div className='d-flex'>
        <div></div>
        <div>
          <ul>
            {navItems.map((navItem) => {
              return <li key={navItem.key}>{navItem.label}</li>;
            })}
          </ul>
        </div>
        <div>
          <a className='button' href='#'>
            cart
          </a>
        </div>
      </div>
    </>
  );
};
