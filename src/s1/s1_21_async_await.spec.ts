import 'mocha';

describe('Understanding async await', () => {
  it('example with async await', async () => {
    const delay = (ms: number) =>
      new Promise(res => setTimeout(res, ms));

    await delay(100);
    console.log("0.1 s")
    await delay(100);
    console.log("0.2 s")
    await delay(100);
    console.log("0.3 s")
  })
  it('example with promises', () => {
    setTimeout(() => {
      console.log("0.1 s")
      setTimeout(() => {
        console.log("0.2 s")
        setTimeout(() => {
          console.log("0.3 s")
        }, 100)
      }, 100);
    }, 100)
  })
})
