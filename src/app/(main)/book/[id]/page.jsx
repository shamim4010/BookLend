import React from 'react'

function BookDetails({ params }) {
    const name = params;
    console.log(name.id)
    let names = '';
    /* for (let i = 0; i < name.id.length; i++){
      console.log(name.id[i]);
      if (name.id[i] === '%' ){
        names += ' ';
        i+=2
      }
      else{
        names += name.id[i];
      }
    }
    console.log(names); */

    return (
        <div>BookDetails</div>
    )
}

export default BookDetails