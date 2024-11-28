import { useState } from 'react';

export default function FaqAccordion ({ title, answer }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>

        {/* <div className='question-block'> */}
       {isActive ? 
      //  <button clas>

         <img src="/images/up.png" alt="button up" />
       
        // </button>
        : 
        // <button>
        <img src="/images/down.png" alt="button close" />
        // </button>
      }
        {/* </div> */}
      </div>
      {isActive && <div className="accordion-content">{answer}</div>}
    </div>
  );
};

