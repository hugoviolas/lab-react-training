import React from 'react';

const Greetings = ({ lang, children }) => {
  if (lang === 'de') {
    return (
      <div>
        <p>Hallo {children}</p>
      </div>
    );
  } else if (lang === 'es') {
    return (
      <div>
        <p>Olà {children}</p>
      </div>
    );
  } else if (lang === 'en') {
    return (
      <div>
        <p>Hello {children}</p>
      </div>
    );
  } else if (lang === 'fr') {
    return (
      <div>
        <p>Salut {children}</p>
      </div>
    );
  }
};

export default Greetings;
