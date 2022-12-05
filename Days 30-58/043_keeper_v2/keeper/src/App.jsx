import React from 'react';
import Heading from './Header';
import Footer from './Footer';
import Note from './Note';
import notes from './notes';




function App() {
    return (
      <div>
        <Heading />
        <div>{notes.map(note => <Note
    key={note.key}
    title={note.title}
    contents={note.content}
    />
  )};
</div>
        <Footer />
      </div>
    );
  }

  export default App;