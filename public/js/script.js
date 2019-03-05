function newCleanArr() {
  return new Array(16).fill(false);
};

// Drum Arrays
let kicks = newCleanArr();
let snares = newCleanArr();
let hiHats = newCleanArr();
let rideCymbals = newCleanArr();

const padTable = {
  'kicks': kicks,
  'snares': snares,
  'hiHats': hiHats,
  'rideCymbals': rideCymbals
}
const getDrumsArr = (pad) => {
  switch (pad) {
    case 'kicks':
      return kicks;
      break;
    case 'snares':
      return snares;
      break;
    case 'hiHats':
      return hiHats;
      break;
    case 'rideCymbals':
      return rideCymbals;
      break;
    default:
      return;
  }
}

function toggleDrum(pad, index) {
  const drums = getDrumsArr(pad);

  if(!drums || index === undefined || index>16 || index<0) {
    return;
  }

  drums[index] = !drums[index];
}

function clear(pad) {
  const drums = getDrumsArr(pad);
  if(!drums) {
    return;
  }

  drums.fill(false);
}

function invert(pad) {
  const drums = getDrumsArr(pad);
  if(!drums) {
    return;
  }

  for(let i=0;i<16;i++) {
    drums[i] = !drums[i];
  }
}

function getNeighborPads(x,y,size) {
  if(x<0 || y<0 || x>=size || y>=size) {
    return [];
  }

  let neighbors = [];
  if(x-1 >= 0) {
    neighbors.push([x-1, y]);
  }
  if(x+1 < size) {
    neighbors.push([x+1, y])
  }
  if(y-1 >= 0) {
    neighbors.push([x, y-1]);
  }
  if(y+1 < size) {
    neighbors.push([x, y+1]);
  }
  return neighbors;
}

// Test area


/*
toggleDrum('snares', 0);
console.log(snares[0]);
invert('snares');
console.log(snares);
toggleDrum(hiHats, 0);
console.log(hiHats[0]);
toggleDrum(rideCymbals, 0);
console.log(rideCymbals[0]);

toggleDrum(kicks, 0);
console.log(kicks[0]);
toggleDrum(snares, 0);
console.log(snares[0]);
toggleDrum(hiHats, 0);
console.log(hiHats[0]);
toggleDrum(rideCymbals, 0);
console.log(rideCymbals[0]);
*/
