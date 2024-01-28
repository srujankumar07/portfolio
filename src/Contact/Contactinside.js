import React from 'react';
import ContactLeft from '../Contact/ContactLeft';
import ContactRight from '../Contact/ContactRight';

const Contactinside = () => {
  return (
    <section id="contact" className="w-full px-4 md:px-6 lg:px-8 border-b-[1px] border-b-black">
      <div className="w-full">
        <div className="w-full flex flex-col md:flex-row lg:flex-row justify-between">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
    </section>
  );
};

export default Contactinside;
