function makeList() {
  let items = [];

  return {
    add(item) {
      let idx = items.indexOf(item);
      if (idx !== -1) return;

      items.push(item);
      console.log(`${item} added!`);
    },

    list() {
      if (items.length === 0) {
        console.log('The list is empty.');
      } else {
        items.forEach(item => console.log(item));
      }
    },

    remove(item) {
      let idx = items.indexOf(item);
      if (idx === -1) return;
      
      items.splice(idx, 1);
      console.log(`${item} removed!`);
    },

    clear() {
      items = [];
      console.log('All items deleted!');
    }
  }
}


let list = makeList();
list.add('peas');       // peas added!
list.list();            // peas
list.add('corn');       // corn added!
list.list();            // peas
                        // corn
list.remove('peas');    // peas removed!
list.list();            // corn