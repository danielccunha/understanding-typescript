const user = {
  id: 1,
  name: 'Daniel',
  job: {
    title: 'CEO',
    description: 'Pandora',
  },
};

const title = user?.job?.title ?? 'Unknown';
console.log(title);
