const plus = x => x+1

const a = async () => {
  const res = await plus(4)
  console.log('res : ', res );
}

a()